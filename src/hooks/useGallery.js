import { useState, useEffect } from 'react';

const galleryImporters = {
    pixelart: import.meta.glob('../assets/pixelart/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { import: 'default' }),
    pics: import.meta.glob('../assets/pics/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { import: 'default' }),
    astropics: import.meta.glob('../assets/astropics/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { import: 'default' })
};

const galleryCache = new Map();

async function loadGallery(category) {
    if (galleryCache.has(category)) {
        return galleryCache.get(category);
    }

    const importers = galleryImporters[category];
    if (!importers) return [];

    const sortedEntries = Object.entries(importers).sort(([a], [b]) => a.localeCompare(b));
    const images = await Promise.all(sortedEntries.map(([, importer]) => importer()));

    galleryCache.set(category, images);
    return images;
}

export function useGallery(category) {
    const [images, setImages] = useState([]);
    const [loadedCategory, setLoadedCategory] = useState('');

    useEffect(() => {
        let active = true;

        loadGallery(category).then((resolvedImages) => {
            if (!active) return;
            setImages(resolvedImages);
            setLoadedCategory(category);
        });

        return () => {
            active = false;
        };
    }, [category]);

    return {
        images,
        loading: loadedCategory !== category
    };
}
