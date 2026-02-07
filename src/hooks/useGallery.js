import { useState, useEffect } from 'react';

const galleryImporters = {
    pixelart: import.meta.glob('../assets/pixelart/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { import: 'default', eager: true }),
    pics: import.meta.glob('../assets/pics/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { import: 'default', eager: true }),
    astropics: import.meta.glob('../assets/astropics/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { import: 'default', eager: true })
};

const galleryCache = new Map();

function loadGallery(category) {
    if (galleryCache.has(category)) {
        return galleryCache.get(category);
    }

    const importers = galleryImporters[category];
    if (!importers) return [];

    // Group variants by base name
    const grouped = {};

    Object.entries(importers).forEach(([path, url]) => {
        const fileName = path.split('/').pop();
        const match = fileName.match(/(.+)-(\d+w)\.webp$/);

        if (match) {
            const [, base, width] = match;
            if (!grouped[base]) grouped[base] = { variants: [] };
            grouped[base].variants.push({ url, width });
        } else {
            const base = fileName.replace(/\.[^/.]+$/, "");
            if (!grouped[base]) grouped[base] = { variants: [] };
            grouped[base].src = url;
            grouped[base].baseName = base;
        }
    });

    // Convert grouped objects to final array with srcSet
    const images = Object.values(grouped)
        .filter(img => img.src) // Ensure we have a main src
        .map(img => {
            if (img.variants.length > 0) {
                const srcSet = img.variants
                    .map(v => `${v.url} ${v.width}`)
                    .join(', ');
                return { ...img, srcSet };
            }
            return img;
        })
        .sort((a, b) => a.baseName.localeCompare(b.baseName))
        .map(img => ({ src: img.src, srcSet: img.srcSet }));

    galleryCache.set(category, images);
    return images;
}

export function useGallery(category) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const resolvedImages = loadGallery(category);
        setImages(resolvedImages);
        setLoading(false);
    }, [category]);

    return {
        images,
        loading
    };
}
