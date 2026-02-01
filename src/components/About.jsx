import React from 'react';
import { Telescope, Code, Palette, Gamepad2, Mountain, Bike, Star, Tv, Twitter, Youtube, Music, MessageCircle, PawPrint, Cloud } from 'lucide-react';
import '../styles/interests.css';

export default function About() {
    const [activeInterest, setActiveInterest] = React.useState(null);

    const interests = [
        { name: 'Astronomy', icon: <Star size={32} />, description: 'Been into starts for a while, love everything about space, with my favorite being astrophotography. My favorite mission being ESA JUICE mission' },
        { name: 'Astrophotography', icon: <Telescope size={32} />, description: 'Same as astronomy but with photos, been at it for a while, all my photos have been taken with my phone, with favrite space objecting being The seven sisters, Pleiades' },
        { name: 'Programming', icon: <Code size={32} />, description: 'Studied it for a while, i mostly use python but i also know html, css and javascript for web development' },
        { name: 'Pixel Art', icon: <Palette size={32} />, description: 'Drawing pixel art is fun, doing it since i was 15 so for a while now' },
        { name: 'Gaming', icon: <Gamepad2 size={32} />, description: 'And this one ive been for at for ages since i was maybe 4 with my first PC, love games mostly multipleyer with friends or singleplayer, playing just for fun' },
        { name: 'Hiking', icon: <Mountain size={32} />, description: 'Walking and hiking is fun, longest ive ever hiked was 15km nonstop 30k steps, love the nature so its natural to me' },
        { name: 'Cycling', icon: <Bike size={32} />, description: 'Same with hiking, love it, longest ive ever cycled was 45km died after, but i was worth it' },
        { name: 'Anime', icon: <Tv size={32} />, description: 'Over 500 anime watched so yea i guess i like it' },
        { name: 'Music', icon: <Music size={32} />, description: 'EDM, hardstyle, electronic, pop, indie, rock, upbeat, AND MY BOY AVICII ◢◤' },
        { name: 'Animals', icon: <PawPrint size={32} />, description: 'I fuck heavy with all things alive. My favorites include: guinea pigs, hamsters, seals, sea lions, sunfish, ducks, frogs, cats, and dogs. (and more)' },
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
                Hello again, im a cool guy (i think) who likes shit ton of things, i'm always happy and open to try new things, other then that i... mhhhh... idk...
            </p>

            <div className={`interest-detail-view ${activeInterest ? 'visible' : ''}`}>
                {activeInterest ? (
                    <div className="detail-content">
                        <div className="detail-header">
                            {activeInterest.icon}
                            <h3>{activeInterest.name}</h3>
                        </div>
                        <p>{activeInterest.description}</p>
                    </div>
                ) : (
                    <div className="detail-placeholder">
                        <p>Click on an interest to learn more!</p>
                    </div>
                )}
            </div>

            <div className="interests-container">
                {interests.map((item) => (
                    <div
                        key={item.name}
                        className={`interest-item ${activeInterest?.name === item.name ? 'active' : ''}`}
                        onClick={() => setActiveInterest(activeInterest?.name === item.name ? null : item)}
                    >
                        <div className="interest-header">
                            <div className="interest-icon">
                                {item.icon}
                            </div>
                            <span className="interest-name">{item.name}</span>
                        </div>
                        <div className={`interest-inline-description ${activeInterest?.name === item.name ? 'visible' : ''}`}>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
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
                <a href="https://ngl.link/simon1g" target="_blank" rel="noopener noreferrer" className="about-social-link ngl">
                    <MessageCircle size={24} />
                    <span>NGL</span>
                </a>
                <a href="https://soundcloud.com/simon1g-xyz" target="_blank" rel="noopener noreferrer" className="about-social-link soundcloud">
                    <Cloud size={24} />
                    <span>SoundCloud</span>
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
                Also im an ambivert and i have level 1 autism so i may be a bit stiff sometimes, suffer from anxiety ¯\_(ツ)_/¯ it is what it is, im a short king of 174cm or 5'7 american tall. Spend half of my time outside, hiking, cycling, walking, stargazing and the other half inside mostly, gaming, sometimes programming or drawing or just being sad or happy. I'm also a massive weeb soooo, also favorite color being maroon (if it wasnt obvious enough), and and i wish i had a vtuber girlfriend but beggers cant be choosers
            </p>
        </div>
    );
}
