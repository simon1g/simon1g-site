import React, { useState, useRef, useEffect } from 'react';

const ROOT_MARGIN = '600px'; // Load images 600px before they enter viewport
const THRESHOLD = 0.01;

/**
 * Optimized lazy loading image component for WebP images.
 * Features:
 * - IntersectionObserver for viewport detection
 * - Proper loading attribute handling
 * - Fade-in animation on load
 * - Responsive image support (optional)
 */
export default function LazyImage({
  src,
  alt,
  className,
  decoding = 'async',
  loading, // Allow override but use smart default
  fetchPriority,
  sizes,
  srcSet,
  ...props
}) {
  const [inView, setInView] = useState(fetchPriority === 'high');
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  // Determine optimal loading strategy
  const effectiveLoading = loading || (fetchPriority === 'high' ? 'eager' : 'lazy');

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // For high-priority images, skip IntersectionObserver and show immediately
    if (fetchPriority === 'high') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchPriority]);

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

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      loading={effectiveLoading}
      decoding={decoding}
      fetchpriority={fetchPriority}
      sizes={sizes}
      srcSet={srcSet}
      onLoad={() => setHasLoaded(true)}
      onError={() => {
        setHasError(true);
        setHasLoaded(true);
      }}
      style={{
        opacity: (hasLoaded || fetchPriority === 'high') ? 1 : 0,
        transition: fetchPriority === 'high' ? 'none' : 'opacity 0.3s ease-out',
        background: (hasError || (fetchPriority === 'high' && !hasLoaded)) ? 'transparent' : (hasLoaded ? 'transparent' : 'var(--card-bg)'),
        ...props.style,
      }}
      {...props}
    />
  );
}