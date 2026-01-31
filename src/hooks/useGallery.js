import { useState, useEffect } from 'react';

// Use Vite's glob import to automatically discover images in the assets folder.
// This allows the grid to update automatically when files are added or removed.
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
        // With eager globs, the images are already loaded in memory
        setImages(galleries[category] || []);
        setLoading(false);
    }, [category]);

    return { images, loading };
}
