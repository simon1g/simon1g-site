import { useState, useEffect } from 'react';

// Eager glob: resolves image URLs synchronously so the grid renders immediately.
// Actual image bytes load on demand via LazyImage (Intersection Observer + loading="lazy").
const pixelartGlobs = import.meta.glob('../assets/pixelart/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { eager: true, import: 'default' });
const picsGlobs = import.meta.glob('../assets/pics/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { eager: true, import: 'default' });
const astropicsGlobs = import.meta.glob('../assets/astropics/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG,GIF,WEBP}', { eager: true, import: 'default' });

const galleries = {
    pixelart: Object.values(pixelartGlobs),
    pics: Object.values(picsGlobs),
    astropics: Object.values(astropicsGlobs)
};

export function useGallery(category) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setImages(galleries[category] || []);
        setLoading(false);
    }, [category]);

    return { images, loading };
}
