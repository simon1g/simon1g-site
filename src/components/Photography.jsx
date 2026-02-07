import React, { useState, useEffect } from 'react';
import { useGallery } from '../hooks/useGallery';
import Lightbox from './Lightbox';
import LazyImage from './LazyImage';
import '../styles/photography.css';

export default function Photography() {
    const { images, loading } = useGallery('pics');
    const [selectedImage, setSelectedImage] = useState(null);

    // Common sizes attribute for the grid
    const sizes = "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw";

    // Preload first 2 images
    useEffect(() => {
        if (images.length > 0) {
            images.slice(0, 2).forEach((img) => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';

                // Use srcset preloading if available
                if (img.srcSet) {
                    link.imagesrcset = img.srcSet;
                    link.imagesizes = sizes;
                } else {
                    link.href = img.src;
                }

                link.type = 'image/webp';
                document.head.appendChild(link);
            });
        }
    }, [images]);

    if (loading) {
        return (
            <div className="container section">
                <h2 className="section-title">Photography</h2>
                <div className="photo-grid">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="photo-item skeleton-card" style={{ background: 'var(--card-bg)' }}></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container section">
            <h2 className="section-title">Photography</h2>
            <div className="photo-grid">
                {images.map((img, index) => (
                    <div
                        key={img.src}
                        className="photo-item"
                        onClick={() => setSelectedImage(img.src)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(img.src)}
                    >
                        <LazyImage
                            src={img.src}
                            srcSet={img.srcSet}
                            sizes={sizes}
                            alt={`Photo ${index + 1}`}
                            className="photo-img"
                            fetchPriority={index < 2 ? 'high' : undefined}
                            loading={index < 2 ? 'eager' : 'lazy'}
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage}
                isPixelArt={false}
            />
        </div>
    );
}
