import React, { useMemo } from 'react';
import '../styles/starry-background.css';

const StarryBackground = () => {
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

    return (
        <div className="starry-background">
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
        </div>
    );
};

export default StarryBackground;
