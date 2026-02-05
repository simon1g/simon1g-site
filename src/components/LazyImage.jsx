import React, { useState, useRef, useEffect } from 'react';

const ROOT_MARGIN = '200px'; // Increased for better prefetch
const THRESHOLD = 0.01;

// Preload cache to avoid duplicate requests
const imageCache = new Set();

/**
 * Optimized lazy image loader with:
 * - Intersection Observer for viewport detection
 * - Image preloading for better UX
 * - Fade-in animation
 * - Error handling with retry
 */
export default function LazyImage({ 
    src, 
    alt, 
    className, 
    decoding = 'async',
    priority = false, // For above-the-fold images
    ...props 
}) {
    const [inView, setInView] = useState(priority); // Load priority images immediately
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [retryCount, setRetryCount] = useState(0);
    const wrapperRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        if (priority) return; // Skip observer for priority images

        const el = wrapperRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
        );
        
        observer.observe(el);
        return () => observer.disconnect();
    }, [priority]);

    // Preload image when in view
    useEffect(() => {
        if (!inView || !src || imageCache.has(src)) return;

        const img = new Image();
        
        img.onload = () => {
            imageCache.add(src);
            setIsLoaded(true);
            setHasError(false);
        };

        img.onerror = () => {
            // Retry logic for failed loads
            if (retryCount < 2) {
                setTimeout(() => setRetryCount(c => c + 1), 1000 * (retryCount + 1));
            } else {
                setHasError(true);
            }
        };

        img.decoding = decoding;
        img.src = src;

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [inView, src, decoding, retryCount]);

    // Placeholder skeleton
    if (!inView) {
        return (
            <div
                ref={wrapperRef}
                className={className}
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    minHeight: 1, 
                    background: 'var(--card-bg)',
                }}
                aria-hidden="true"
            />
        );
    }

    // Error state
    if (hasError) {
        return (
            <div
                ref={wrapperRef}
                className={className}
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'var(--card-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                }}
            >
                Failed to load
            </div>
        );
    }

    return (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            className={className}
            loading={priority ? 'eager' : 'lazy'}
            decoding={decoding}
            style={{ 
                opacity: isLoaded ? 1 : 0, 
                transition: 'opacity 0.3s ease-out',
            }}
            {...props}
        />
    );
}
