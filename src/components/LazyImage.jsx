import React, { useState, useRef, useEffect } from 'react';

const ROOT_MARGIN = '120px';
const THRESHOLD = 0.01;

/**
 * Renders an img only when it enters the viewport (Intersection Observer).
 * Defers image requests until near view – improves initial load and saves bandwidth.
 */
export default function LazyImage({ src, alt, className, decoding = 'async', ...props }) {
    const [inView, setInView] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    if (!inView) {
        return (
            <div
                ref={wrapperRef}
                className={className}
                style={{ width: '100%', height: '100%', minHeight: 1, background: 'var(--card-bg)' }}
                aria-hidden="true"
            />
        );
    }

    return (
        <img
            ref={wrapperRef}
            src={src}
            alt={alt}
            className={className}
            loading="lazy"
            decoding="async"
            onLoad={() => setHasLoaded(true)}
            style={{ opacity: hasLoaded ? 1 : 0, transition: 'opacity 0.2s ease-out' }}
            {...props}
        />
    );
}
