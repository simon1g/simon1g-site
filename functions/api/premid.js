export async function onRequest({ request, env }) {
    try {
        // --- CORS ---
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type"
                }
            });
        }

        // --- POST (PreMiD sends activity here) ---
        if (request.method === "POST") {
            let body;
            try {
                body = await request.json();
            } catch {
                return new Response("Invalid JSON", { status: 400 });
            }

            if (!env.PREMID_STORE) {
                return new Response("KV not bound", { status: 500 });
            }

            // --- Optimization: Only write if data changed or 5 mins passed ---
            const existingValue = await env.PREMID_STORE.get("activity");
            let shouldUpdate = true;

            if (existingValue) {
                try {
                    const oldData = JSON.parse(existingValue);
                    const oldTimestamp = oldData.last_updated || 0;

                    // Create a copy for comparison without the timestamp
                    const { last_updated, ...oldActivity } = oldData;

                    // JSON stringify is a simple way to compare objects
                    const isSameActivity = JSON.stringify(oldActivity) === JSON.stringify(body);
                    const isRecent = (Date.now() - oldTimestamp) < 300000; // 5 minutes

                    if (isSameActivity && isRecent) {
                        shouldUpdate = false;
                    }
                } catch (e) {
                    // If parsing fails, just update anyway
                    shouldUpdate = true;
                }
            }

            if (shouldUpdate) {
                const storedData = {
                    ...body,
                    last_updated: Date.now()
                };

                await env.PREMID_STORE.put(
                    "activity",
                    JSON.stringify(storedData)
                );
            }

            return new Response(shouldUpdate ? "Updated" : "Ignored (No Change)", {
                status: 200,
                headers: { "Access-Control-Allow-Origin": "*" }
            });
        }

        // --- GET (your site / widgets read from here) ---
        if (request.method === "GET") {
            if (!env.PREMID_STORE) {
                return new Response(
                    JSON.stringify({ active_activity: null }),
                    { headers: { "content-type": "application/json" } }
                );
            }

            const value = await env.PREMID_STORE.get("activity");

            if (!value) {
                return new Response(
                    JSON.stringify({ active_activity: null }),
                    { headers: { "content-type": "application/json" } }
                );
            }

            let data;
            try {
                data = JSON.parse(value);
            } catch {
                return new Response(
                    JSON.stringify({ active_activity: null }),
                    { headers: { "content-type": "application/json" } }
                );
            }

            // 20-minute inactivity timeout
            if (Date.now() - data.last_updated > 1_200_000) {
                return new Response(
                    JSON.stringify({ active_activity: null }),
                    { headers: { "content-type": "application/json" } }
                );
            }

            return new Response(JSON.stringify(data), {
                headers: {
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Cache-Control": "public, max-age=30, s-maxage=30"
                }
            });
        }

        return new Response("Method not allowed", { status: 405 });
    } catch (err) {
        // Absolute last-resort catch → prevents 1101
        return new Response("Worker error", { status: 500 });
    }
}
