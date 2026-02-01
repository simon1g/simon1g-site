import React from 'react';
import { Telescope, Code, Palette, Gamepad2, Mountain, Bike, Star, Tv, Twitter, Youtube, Music, PawPrint } from 'lucide-react';
import '../styles/interests.css';
import nglLogo from '../assets/ngl-removebg-preview.png';

const RedditIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.056 1.597.04.21.06.427.06.646 0 2.311-2.73 4.184-6.1 4.184-3.37 0-6.1-1.873-6.1-4.184 0-.215.02-.426.059-.633A1.751 1.751 0 0 1 6.33 13.5c0-.968.786-1.754 1.754-1.754.463 0 .875.18 1.179.471 1.183-.834 2.806-1.388 4.581-1.47l.835-3.929c.04-.194.232-.319.42-.269l2.912.612c.252-.288.62-.464 1.028-.464zm-6.91 8.125c-.71 0-1.28.57-1.28 1.28 0 .71.57 1.28 1.28 1.28s1.28-.57 1.28-1.28c0-.71-.57-1.28-1.28-1.28zm5.8 0c-.71 0-1.28.57-1.28 1.28 0 .71.57 1.28 1.28 1.28s1.28-.57 1.28-1.28c0-.71-.57-1.28-1.28-1.28zm-5.8 2.302c-.08 0-.142.062-.142.142 0 .584.974 1.059 2.164 1.059 1.19 0 2.164-.475 2.164-1.059 0-.08-.063-.142-.143-.142H10.1z" />
    </svg>
);

const SteamIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
        <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z" />
    </svg>
);

const SoundCloudIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 15a1.5 1.5 0 0 1 1.5-1.5v3A1.5 1.5 0 0 1 0 15Zm2.5-.5a1.5 1.5 0 0 1 1.5-1.5v4.5a1.5 1.5 0 0 1-1.5-1.5v-1.5Zm2.5-1a1.5 1.5 0 0 1 1.5-1.5v5.5a1.5 1.5 0 0 1-1.5-1.5v-2.5Zm2.5-1.5a1.5 1.5 0 0 1 1.5-1.5v7.5a1.5 1.5 0 0 1-1.5-1.5v-4.5Zm2.5-3.5a1.5 1.5 0 0 1 1.5-1.5v11.5a1.5 1.5 0 0 1-1.5-1.5V7.5Zm2.5-2.5a1.5 1.5 0 0 1 1.5-1.5v15.5a1.5 1.5 0 0 1-1.5-1.5V5Zm2.5-1.5a1.5 1.5 0 0 1 1.5-1.5v18.5a1.5 1.5 0 0 1-1.5-1.5V3.5Zm2.5 5h1a4 4 0 0 1 4 4v.5a4 4 0 0 1-4 4h-1v-8.5Z" />
    </svg>
);

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
                    <img src={nglLogo} alt="NGL" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
                    <span>NGL</span>
                </a>
                <a href="https://soundcloud.com/simon1g-xyz" target="_blank" rel="noopener noreferrer" className="about-social-link soundcloud">
                    <SoundCloudIcon size={24} />
                    <span>SoundCloud</span>
                </a>
                <a href="https://www.reddit.com/user/_ssSimon_/" target="_blank" rel="noopener noreferrer" className="about-social-link reddit">
                    <RedditIcon size={24} />
                    <span>Reddit</span>
                </a>
                <a href="https://steamcommunity.com/id/simon1g/" target="_blank" rel="noopener noreferrer" className="about-social-link steam">
                    <SteamIcon size={24} />
                    <span>Steam</span>
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
