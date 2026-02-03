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
    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            duration: `${Math.random() * 3 + 2}s`,
            delay: `${Math.random() * 5}s`,
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

    const sunPosition = useMemo(() => randomPointOnParabola(), []);
    const clouds = useMemo(() => randomCloudsOnParabola(10), []);

    return (
        <div className="background">
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
                            animationDelay: star.delay,
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
                            transform: 'translate(-50%, -50%)',
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
                                transform: `translate(-50%, -50%) scale(${cloud.scale})`,
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
