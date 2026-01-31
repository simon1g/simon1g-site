import React from 'react';
import { Telescope, Code, Palette, Gamepad2, Mountain, Bike, Star, Tv, Twitter, Youtube, Music } from 'lucide-react';
import '../styles/interests.css';

export default function About() {
    const [activeInterest, setActiveInterest] = React.useState(null);

    const interests = [
        { name: 'Astronomy', icon: <Star size={32} />, description: 'Placeholder description for Astronomy. I love looking at the stars!' },
        { name: 'Astrophotography', icon: <Telescope size={32} />, description: 'Placeholder description for Astrophotography. Capturing the deep sky is amazing.' },
        { name: 'Programming', icon: <Code size={32} />, description: 'Placeholder description for Programming. Building things with code is my passion.' },
        { name: 'Pixel Art', icon: <Palette size={32} />, description: 'Placeholder description for Pixel Art. Creating retro-style art is so fun.' },
        { name: 'Gaming', icon: <Gamepad2 size={32} />, description: 'Placeholder description for Gaming. RPGs, Platformers, you name it.' },
        { name: 'Hiking', icon: <Mountain size={32} />, description: 'Placeholder description for Hiking. Exploring the great outdoors is refreshing.' },
        { name: 'Cycling', icon: <Bike size={32} />, description: 'Placeholder description for Cycling. Feeling the wind while riding is the best.' },
        { name: 'Anime', icon: <Tv size={32} />, description: 'Placeholder description for Anime. Massive weeb here!' },
        { name: 'Music', icon: <Music size={32} />, description: 'Placeholder description for Music. Listening to tunes is a big part of my day.' },
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
                    <div
                        key={item.name}
                        className={`interest-item ${activeInterest?.name === item.name ? 'active' : ''}`}
                        onMouseEnter={() => setActiveInterest(item)}
                        onMouseLeave={() => setActiveInterest(null)}
                        onClick={() => setActiveInterest(activeInterest?.name === item.name ? null : item)}
                    >
                        <div className="interest-icon">
                            {item.icon}
                        </div>
                        <span className="interest-name">{item.name}</span>
                    </div>
                ))}
            </div>

            <div className={`interest-description-box ${activeInterest ? 'visible' : ''}`}>
                <p>{activeInterest?.description || ''}</p>
            </div>

            <div className="about-socials">
                <a href="https://twitter.com/simon1g_" target="_blank" rel="noopener noreferrer" className="about-social-link twitter">
                    <Twitter size={24} />
                    <span>Twitter</span>
                </a>
                <a href="https://www.youtube.com/@imon1G" target="_blank" rel="noopener noreferrer" className="about-social-link youtube">
                    <Youtube size={24} />
                    <span>YouTube</span>
                </a>
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
