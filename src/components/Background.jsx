import React, { useMemo } from 'react';
import '../styles/background.css';

const PARABOLA_YMIN = 0.15;
const PARABOLA_YSPREAD = 0.55;
const PARABOLA_XRANGE = [0.06, 0.94];

/** Random point on a parabola (percent 0–1): vertex at center top, arc across width. */
const randomPointOnParabola = (yOffset = 0) => {
    const t = Math.random();
    const x = PARABOLA_XRANGE[0] + t * (PARABOLA_XRANGE[1] - PARABOLA_XRANGE[0]);
    const xNorm = x - 0.5;
    const y = PARABOLA_YMIN + PARABOLA_YSPREAD * (xNorm * xNorm) + yOffset;
    return { x: x * 100, y: y * 100 };
};

/** Random clouds on the same parabolic band as the sun (safe area %). */
const randomCloudsOnParabola = (count = 10) =>
    Array.from({ length: count }, (_, i) => {
        const { x, y } = randomPointOnParabola((Math.random() - 0.5) * 0.04);
        return {
            id: i,
            left: x,
            top: y,
            scale: 0.5 + Math.random() * 0.9,
            opacity: 0.4 + Math.random() * 0.5,
        };
    });

const Background = () => {
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            // Convert to normalized coordinates -1 to 1
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            duration: `${Math.random() * 3 + 2}s`,
            delay: `${Math.random() * 5}s`,
            parallax: Math.random() * 15 + 5, // Parallax intensity
        }));
    }, []);

    const shootingStars = useMemo(() => {
        return Array.from({ length: 3 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 80 + 20}%`,
            delay: `${Math.random() * 20}s`,
            duration: `${Math.random() * 2 + 3}s`,
        }));
    }, []);

    const sunPosition = useMemo(() => {
        const pos = randomPointOnParabola();
        return { ...pos, parallax: 15 }; // Sun parallax intensity
    }, []);

    const clouds = useMemo(() => {
        const baseClouds = randomCloudsOnParabola(10);
        return baseClouds.map(c => ({
            ...c,
            parallax: Math.random() * 20 + 10 // Varying cloud parallax
        }));
    }, []);

    return (
        <div className="background" style={{
            '--mouse-x': mousePos.x,
            '--mouse-y': mousePos.y
        }}>
            <div className="star-container">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star twinkle"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            '--duration': star.duration,
                            '--parallax': star.parallax,
                            animationDelay: star.delay,
                            transform: `translate(calc(var(--mouse-x) * var(--parallax) * 1px), calc(var(--mouse-y) * var(--parallax) * 1px))`
                        }}
                    />
                ))}
                {shootingStars.map((sStar) => (
                    <div
                        key={sStar.id}
                        className="shooting-star"
                        style={{
                            top: sStar.top,
                            left: sStar.left,
                            animationDelay: sStar.delay,
                            animationDuration: sStar.duration,
                        }}
                    />
                ))}
            </div>
            <div className="light-sun-wrap" aria-hidden="true">
                <div className="light-sun-layer">
                    <div
                        className="sun"
                        style={{
                            left: `${sunPosition.x}%`,
                            top: `${sunPosition.y}%`,
                            '--parallax': sunPosition.parallax,
                            transform: `translate(calc(-50% + var(--mouse-x) * var(--parallax) * 1px), calc(-50% + var(--mouse-y) * var(--parallax) * 1px))`,
                        }}
                    />
                </div>
                <div className="light-clouds-layer">
                    {clouds.map((cloud) => (
                        <div
                            key={cloud.id}
                            className="cloud"
                            style={{
                                left: `${cloud.left}%`,
                                top: `${cloud.top}%`,
                                '--parallax': cloud.parallax,
                                transform: `translate(calc(-50% + var(--mouse-x) * var(--parallax) * 1px), calc(-50% + var(--mouse-y) * var(--parallax) * 1px)) scale(${cloud.scale})`,
                                opacity: cloud.opacity,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Background;
