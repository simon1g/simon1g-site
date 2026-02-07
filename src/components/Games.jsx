import React, { useState, useEffect } from 'react';
import { useSound } from '../context/SoundContext';
import LazyImage from './LazyImage';
import '../styles/games.css';

export default function Games() {
    const { playHover, playClick } = useSound();
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

    if (loading) {
        return (
            <div className="container section">
                <h2 className="section-title">Games I Play</h2>
                <div className="games-grid">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="game-card skeleton-card" style={{ aspectRatio: '2/3', background: 'var(--card-bg)' }}></div>
                    ))}
                </div>
            </div>
        );
    }

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
                        onMouseEnter={playHover}
                        onClick={playClick}
                    >
                        <LazyImage
                            src={game.icon}
                            alt={game.name}
                            className="game-icon"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
