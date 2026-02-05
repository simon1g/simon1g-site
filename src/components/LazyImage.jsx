import React, { useState, useRef, useEffect } from 'react';

const ROOT_MARGIN = '600px';
const THRESHOLD = 0.01;

/**
 * Renders an img only when it enters (or gets near) the viewport.
 * Uses IntersectionObserver for scheduling and eager image fetch once mounted,
 * avoiding double-lazy delays (IO + loading="lazy").
 */
export default function LazyImage({
    src,
    alt,
    className,
    decoding = 'async',
    loading = 'eager',
    fetchPriority = 'low',
    ...props
}) {
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
            loading={loading}
            decoding={decoding}
            fetchPriority={fetchPriority}
            onLoad={() => setHasLoaded(true)}
            onError={() => setHasLoaded(true)}
            style={{ opacity: hasLoaded ? 1 : 0.4, transition: 'opacity 0.2s ease-out', background: 'var(--card-bg)' }}
            {...props}
        />
    );
}
