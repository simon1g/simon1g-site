import React, { useState, useEffect } from 'react';
import { useGallery } from '../hooks/useGallery';
import Lightbox from './Lightbox';
import LazyImage from './LazyImage';
import '../styles/pixelart.css';

export default function PixelArt() {
    const { images, loading } = useGallery('pixelart');
    const [selectedImage, setSelectedImage] = useState(null);

    // Preload first 2 images (above the fold)
    useEffect(() => {
        if (images.length > 0) {
            images.slice(0, 2).forEach((img) => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = img.src;
                link.type = 'image/webp';
                document.head.appendChild(link);
            });
        }
    }, [images]);

    if (loading) {
        return (
            <div className="container section">
                <h2 className="section-title">Pixel Art</h2>
                <div className="pixel-grid">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="pixel-item skeleton-card" style={{ background: 'var(--card-bg)' }}></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container section">
            <h2 className="section-title">Pixel Art</h2>
            <div className="pixel-grid">
                {images.map((img, index) => (
                    <div
                        key={img.src}
                        className="pixel-item"
                        onClick={() => setSelectedImage(img.src)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(img.src)}
                    >
                        <LazyImage
                            src={img.src}
                            srcSet={img.srcSet}
                            alt={`Pixel Art ${index + 1}`}
                            className="pixel-img"
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
                isPixelArt={true}
            />
        </div>
    );
}
