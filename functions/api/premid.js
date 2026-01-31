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

            const storedData = {
                ...body,
                last_updated: Date.now()
            };

            if (!env.PREMID_STORE) {
                return new Response("KV not bound", { status: 500 });
            }

            await env.PREMID_STORE.put(
                "activity",
                JSON.stringify(storedData)
            );

            return new Response("OK", {
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
                    "Access-Control-Allow-Origin": "*"
                }
            });
        }

        return new Response("Method not allowed", { status: 405 });
    } catch (err) {
        // Absolute last-resort catch → prevents 1101
        return new Response("Worker error", { status: 500 });
    }
}
