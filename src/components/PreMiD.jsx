import React, { useState, useEffect } from 'react';
import { Music, Activity } from 'lucide-react';
import '../styles/premid.css';

// Endpoint configuration
// In production, user should set this to their Cloudflare Worker URL
// that caches/forwards the PreMiD POST data.
const API_ENDPOINT = 'https://api.yourdomain.com/premid'; // Placeholder

export default function PreMiD() {
    const [data, setData] = useState({ active_activity: null });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let interval;

        const fetchData = async () => {
            try {
                // Mock data fetch logic (replace with real fetch in production)
                // const res = await fetch(API_ENDPOINT);
                // if (res.ok) {
                //   const jsonData = await res.json();
                //   setData(jsonData); // Expects { active_activity: { ... } }
                // } else { ... }

                // Mocking the structure provided by User
                // Uncomment to test visualization:
                /*
                setData({
                  active_activity: {
                    name: "YouTube",
                    details: "Watching a video",
                    state: "Never Gonna Give You Up",
                    assets: {
                      large_image: "https://placehold.co/64x64/png",
                      small_image: ""
                    }
                  }
                });
                */

                setData({ active_activity: null });

            } catch (error) {
                console.error("PreMiD fetch error", error);
                setData({ active_activity: null });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        interval = setInterval(fetchData, 10000); // Poll every 10s

        return () => clearInterval(interval);
    }, []);

    const activity = data?.active_activity;

    if (!activity && !loading) return (
        <div className="premid-container">
            <div className="premid-content">
                <span className="premid-label">Now listening to</span>
                <div className="premid-offline">
                    <Activity size={16} />
                    <span>Nothing right now / Offline</span>
                </div>
            </div>
        </div>
    );

    if (loading) return null;

    return (
        <div className="premid-container">
            <div className="premid-content">
                <span className="premid-label">Now listening to</span>
                <div className="premid-activity">
                    {activity.assets?.large_image ? (
                        <img src={activity.assets.large_image} alt={activity.name} className="premid-icon" />
                    ) : (
                        <Music size={24} />
                    )}
                    <div className="premid-details">
                        <span className="premid-name">{activity.name}</span>
                        {activity.details && <span className="premid-state">{activity.details}</span>}
                        {activity.state && <span className="premid-state" style={{ fontSize: '0.75rem', opacity: 0.8 }}>{activity.state}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}
