import React from 'react';
import { Telescope, Code, Palette, Gamepad2, Mountain, Bike, Star, Tv, Twitter, Youtube, Music, PawPrint, Cloud, Utensils } from 'lucide-react';
import '../styles/interests.css';

const NGLIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 348 192" fill="currentColor">
        <g transform="translate(0,192) scale(0.05,-0.05)">
            <path d="M5093 3767 c-132 -40 -284 -191 -317 -316 -28 -106 -32 -107 -134 -42 -548 346 -1321 338 -1717 -18 -86 -78 -100 -84 -134 -59 -84 61 -610 168 -829 168 -120 0 -283 -64 -349 -137 -30 -33 -43 -34 -158 -10 -577 120 -908 68 -1064 -168 -196 -297 -410 -2419 -273 -2720 165 -366 1093 -551 1349 -269 30 34 41 34 237 1 693 -116 1036 15 1036 395 l0 73 65 -49 c630 -476 1449 -424 1940 123 l90 100 124 -140 c257 -288 356 -305 1051 -180 910 165 1006 295 763 1033 -133 403 -231 521 -472 571 -111 23 -118 28 -110 76 63 374 133 767 149 831 52 217 -8 427 -157 551 -161 133 -869 254 -1090 186z m567 -450 c312 -56 300 -37 233 -377 -110 -559 -191 -1207 -157 -1256 15 -22 57 -21 242 7 302 47 295 51 388 -241 86 -267 110 -398 77 -418 -36 -22 -885 -171 -976 -172 -976 0 -240 139 -422 410 l-95 140 2 270 c4 460 169 1583 244 1667 39 42 83 39 464 -30z m-1626 -118 c472 -110 666 -299 640 -623 -19 -225 -6 -216 -391 -266 -290 -37 -294 -36 -313 131 -45 388 -282 231 -391 -261 -126 -563 57 -987 319 -742 87 81 79 102 -37 102 l-100 0 -30 105 c-110 387 -97 424 161 466 557 90 573 85 679 -243 136 -417 107 -586 -147 -853 -386 -404 -1015 -410 -1424 -13 -468 454 -288 1763 295 2148 175 115 396 130 739 49z m-1843 -140 c229 -39 392 -84 403 -111 5 -15 -13 -142 -41 -283 -92 -461 -179 -1169 -213 -1738 -14 -224 -29 -341 -45 -352 -70 -49 -688 43 -752 112 -44 48 -174 453 -243 763 -25 110 -52 208 -61 217 -18 20 -37 -253 -56 -787 l-13 -390 -86 -6 c-105 -8 -475 65 -537 106 -100 66 -71 748 74 1750 103 710 90 695 519 640 443 -57 425 -40 499 -484 106 -626 123 -650 149 -213 17 302 80 728 112 767 29 35 125 38 291 9z" />
        </g>
    </svg>
);

const SteamIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
        <path d="M18.102 12.129c0-0 0-0 0-0.001 0-1.564 1.268-2.831 2.831-2.831s2.831 1.268 2.831 2.831c0 1.564-1.267 2.831-2.831 2.831-0 0-0 0-0.001 0h0c-0 0-0 0-0.001 0-1.563 0-2.83-1.267-2.83-2.83 0-0 0-0 0-0.001v0zM24.691 12.135c0-2.081-1.687-3.768-3.768-3.768s-3.768 1.687-3.768 3.768c0 2.081 1.687 3.768 3.768 3.768v0c2.080-0.003 3.765-1.688 3.768-3.767v-0zM10.427 23.76l-1.841-0.762c0.524 1.078 1.611 1.808 2.868 1.808 1.317 0 2.448-0.801 2.93-1.943l0.008-0.021c0.155-0.362 0.246-0.784 0.246-1.226 0-1.757-1.424-3.181-3.181-3.181-0.405 0-0.792 0.076-1.148 0.213l0.022-0.007 1.903 0.787c0.852 0.364 1.439 1.196 1.439 2.164 0 1.296-1.051 2.347-2.347 2.347-0.324 0-0.632-0.066-0.913-0.184l0.015 0.006zM15.974 1.004c-7.857 0.001-14.301 6.046-14.938 13.738l-0.004 0.054 8.038 3.322c0.668-0.462 1.495-0.737 2.387-0.737 0.001 0 0.002 0 0.002 0h-0c0.079 0 0.156 0.005 0.235 0.008l3.575-5.176v-0.074c0.003-3.12 2.533-5.648 5.653-5.648 3.122 0 5.653 2.531 5.653 5.653s-2.531 5.653-5.653 5.653h-0.131l-5.094 3.638c0 0.065 0.005 0.131 0.005 0.199 0 0.001 0 0.002 0 0.003 0 2.342-1.899 4.241-4.241 4.241-2.047 0-3.756-1.451-4.153-3.38l-0.005-0.027-5.755-2.383c1.841 6.345 7.601 10.905 14.425 10.905 8.281 0 14.994-6.713 14.994-14.994s-6.713-14.994-14.994-14.994c-0 0-0.001 0-0.001 0h0z" />
    </svg>
);

const RedditIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
        <path d="M12.606 20.986c-0.225 0.001-0.407 0.183-0.407 0.408 0 0.112 0.045 0.214 0.118 0.288l-0-0c0.952 0.716 2.155 1.146 3.457 1.146 0.085 0 0.17-0.002 0.255-0.006l-0.012 0c0.081 0.004 0.175 0.006 0.27 0.006 1.294 0 2.488-0.431 3.445-1.158l-0.014 0.010c0.077-0.081 0.124-0.19 0.124-0.311 0-0.101-0.033-0.194-0.089-0.269l0.001 0.001c-0.074-0.074-0.177-0.119-0.29-0.119s-0.215 0.045-0.29 0.119l0-0c-0.799 0.575-1.798 0.919-2.877 0.919-0.092 0-0.184-0.003-0.275-0.007l0.013 0.001c-0.082 0.005-0.178 0.008-0.274 0.008-1.075 0-2.070-0.345-2.88-0.93l0.014 0.010c-0.074-0.073-0.175-0.119-0.287-0.119-0.001 0-0.002 0-0.003 0h0zM19.436 16c-0.861 0.001-1.56 0.699-1.56 1.561s0.699 1.561 1.561 1.561 1.561-0.699 1.561-1.561v0c-0.002-0.862-0.7-1.56-1.562-1.561h-0zM12.563 16c0.861 0 1.56 0.699 1.56 1.56s-0.699 1.56-1.56 1.56-1.56-0.699-1.56-1.56c0-0.861 0.698-1.56 1.56-1.56h0zM22.261 6.933c0.852 0.006 1.54 0.698 1.54 1.551 0 0.857-0.694 1.551-1.551 1.551-0.828 0-1.505-0.65-1.549-1.467l-0-0.004-3.245-0.684-1 4.682c2.185 0.049 4.201 0.737 5.878 1.884l-0.037-0.024c0.38-0.379 0.905-0.614 1.485-0.614 0.008 0 0.017 0 0.025 0h-0.001c1.21 0.001 2.191 0.982 2.192 2.192v0c-0.007 0.88-0.513 1.64-1.249 2.011l-0.013 0.006c0.033 0.191 0.052 0.412 0.052 0.637 0 0.005 0 0.009-0 0.014v-0.001c0 3.367-3.911 6.086-8.752 6.086s-8.752-2.719-8.752-6.086c0-0.001 0-0.003 0-0.005 0-0.234 0.020-0.463 0.057-0.687l-0.003 0.024c-0.771-0.35-1.298-1.114-1.298-2.001 0-1.21 0.981-2.191 2.191-2.191 0 0 0.001 0 0.001 0h-0c0.586 0.006 1.116 0.238 1.509 0.613l-0.001-0.001c1.66-1.148 3.711-1.841 5.924-1.858l0.004-0 1.106-5.226c0.028-0.103 0.090-0.189 0.173-0.245l0.002-0.001c0.063-0.037 0.139-0.059 0.22-0.059 0.027 0 0.054 0.003 0.080 0.007l-0.003-0 3.631 0.771c0.247-0.522 0.77-0.876 1.375-0.876 0.003 0 0.007 0 0.010 0h-0.001zM16 1.004c0 0 0 0-0 0-8.282 0-14.996 6.714-14.996 14.996s6.714 14.996 14.996 14.996c8.282 0 14.996-6.714 14.996-14.996 0-4.141-1.678-7.89-4.392-10.604v0c-2.714-2.714-6.463-4.392-10.604-4.392v0z" />
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
        { name: 'Hiking', icon: <Mountain size={32} />, description: 'Walking and hiking are fun, longest ive ever hiked was 15km nonstop 30k steps, love the nature so its natural to me' },
        { name: 'Cycling', icon: <Bike size={32} />, description: 'Same with hiking, love it, longest ive ever cycled was 45km died after, but i was worth it' },
        { name: 'Anime', icon: <Tv size={32} />, description: 'Over 500 anime watched so yea i guess i like it' },
        { name: 'Music', icon: <Music size={32} />, description: 'EDM, hardstyle, electronic, pop, indie, rock, upbeat, AND MY BOY AVICII ◢◤' },
        { name: 'Animals', icon: <PawPrint size={32} />, description: 'I fuck heavy with all things alive. My favorites include: guinea pigs, hamsters, seals, sea lions, sunfish, ducks, frogs, cats, and dogs. (and more)' },
        { name: 'Cooking', icon: <Utensils size={32} />, description: "I ain't Gordon Ramsay but I know my way within a kitchen, it's relaxing and fun, I wish I knew how to bake too maybe one day" },
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

            <div className="mobile-hint">
                <p>click to expand the intrest silly</p>
            </div>

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

            <p style={{
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto 0.5rem auto',
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
            }}>
                Links to my socials:
            </p>

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
                    <NGLIcon size={24} />
                    <span>NGL</span>
                </a>
                <a href="https://soundcloud.com/simon1g-xyz" target="_blank" rel="noopener noreferrer" className="about-social-link soundcloud">
                    <Cloud size={24} />
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
