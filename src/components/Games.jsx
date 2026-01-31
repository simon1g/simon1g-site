import React, { useState, useEffect } from 'react';
import '../styles/games.css';

export default function Games() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/games.json')
            .then(res => res.json())
            .then(data => {
                setGames(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load games", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="container section">Loading games...</div>;

    return (
        <div className="container section">
            <h2 className="section-title">Games I Play</h2>
            <div className="games-grid">
                {games.map((game) => (
                    <a
                        key={game.name}
                        href={game.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="game-card"
                        aria-label={`Open ${game.name} page`}
                        title={game.name}
                    >
                        <img src={game.icon} alt={game.name} className="game-icon" loading="lazy" />
                    </a>
                ))}
            </div>
        </div>
    );
}
