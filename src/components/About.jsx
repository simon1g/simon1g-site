import React from 'react';
import { Telescope, Code, Palette, Gamepad2, Mountain, Bike, Star, Tv } from 'lucide-react';
import '../styles/interests.css';

export default function About() {
    const interests = [
        { name: 'Astronomy', icon: <Star size={32} /> },
        { name: 'Astrophotography', icon: <Telescope size={32} /> },
        { name: 'Programming', icon: <Code size={32} /> },
        { name: 'Pixel Art', icon: <Palette size={32} /> },
        { name: 'Gaming', icon: <Gamepad2 size={32} /> },
        { name: 'Hiking', icon: <Mountain size={32} /> },
        { name: 'Cycling', icon: <Bike size={32} /> },
        { name: 'Anime', icon: <Tv size={32} /> },
    ];

    return (
        <div className="container section">
            <h2 className="section-title">About</h2>

            <p style={{
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto 3rem auto',
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
            }}>
                Hello again, im cool guy (i think) who likes shit ton of things, i'm always happy and open to try new things, other then that i... mhhhh... idk...
            </p>

            <div className="interests-container">
                {interests.map((item) => (
                    <div key={item.name} className="interest-item">
                        <div className="interest-icon">
                            {item.icon}
                        </div>
                        <span className="interest-name">{item.name}</span>
                    </div>
                ))}
            </div>
            <p style={{
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto 3rem auto',
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginTop: '30px'
            }}>
                Also im an ambivert and i have level 1 autism, suffer from anxiety ¯\_(ツ)_/¯ it is what it is, im a short king of 174cm or 5'7 american tall. Spend half of my time outside, hiking, cycling, walking, stargazing and the other half inside mostly, gaming, sometimes programming or drawing or just being sad or happy. I'm also a massive weeb soooo
            </p>
        </div>
    );
}
