import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                Hello, I'm <span style={{ color: 'var(--accent-color)' }}>simon1g</span>
            </h1>
            <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2rem' }}>
                Hello, I'm Simon "simon1g", I'm cool and I like lots of things, I have lots of interests, I hope we can be friends :D
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/pixelart" className="home-btn">Pixel Art</Link>
                <Link to="/photography" className="home-btn">Photography</Link>
                <Link to="/astropics" className="home-btn">Astrophotography</Link>
                <Link to="/about" className="home-btn">About</Link>
                <Link to="/games" className="home-btn">Games</Link>
            </div>

            <p style={{ marginTop: '3rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                Have a question for me? Send an <a href="https://ngl.link/simon1g" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '600' }}>ngl</a> to me.
            </p>

            <style>{`
        .home-btn {
          padding: 0.75rem 1.5rem;
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--glass-border);
          color: var(--text-color);
          font-weight: 600;
          transition: all 0.2s;
        }
        .home-btn:hover {
          transform: translateY(-2px);
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
        }
      `}</style>
        </div>
    );
}
