import { useState, useEffect } from 'react';

// Lazy glob: only load image URLs when needed
const pixelartGlobs = import.meta.glob('../assets/pixelart/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { eager: true, import: 'default' });
const picsGlobs = import.meta.glob('../assets/pics/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { eager: true, import: 'default' });
const astropicsGlobs = import.meta.glob('../assets/astropics/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { eager: true, import: 'default' });

// Cache to avoid re-processing
const galleryCache = new Map();

function getGalleryImages(category) {
    if (galleryCache.has(category)) {
        return galleryCache.get(category);
    }

    let globs;
    switch (category) {
        case 'pixelart':
            globs = pixelartGlobs;
            break;
        case 'pics':
            globs = picsGlobs;
            break;
        case 'astropics':
            globs = astropicsGlobs;
            break;
        default:
            globs = {};
    }

    // Sort images by filename for consistent ordering
    const images = Object.entries(globs)
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
        .map(([, url]) => url);

    galleryCache.set(category, images);
    return images;
}

export function useGallery(category) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reset loading state when category changes
        setLoading(true);
        
        // Defer to next frame to ensure proper rendering
        const timeoutId = setTimeout(() => {
            setImages(getGalleryImages(category));
            setLoading(false);
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [category]);

    return { images, loading };
}
