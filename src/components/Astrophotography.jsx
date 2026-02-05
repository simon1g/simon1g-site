import React, { useState } from 'react';
import { useGallery } from '../hooks/useGallery';
import Lightbox from './Lightbox';
import LazyImage from './LazyImage';
import '../styles/astrophotography.css';

export default function Astrophotography() {
    const { images, loading } = useGallery('astropics');
    const [selectedImage, setSelectedImage] = useState(null);

    if (loading) {
        return (
            <div className="container section">
                <h2 className="section-title">Astrophotography</h2>
                <div className="astro-grid">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="astro-item skeleton-card" style={{ background: 'var(--card-bg)' }}></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container section">
            <h2 className="section-title">Astrophotography</h2>
            <div className="astro-grid">
                {images.map((src, index) => (
                    <div
                        key={src}
                        className="astro-item"
                        onClick={() => setSelectedImage(src)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(src)}
                    >
                        <LazyImage
                            src={src}
                            alt={`Astrophoto ${index + 1}`}
                            className="astro-img"
                            priority={index < 4} // Load first 4 images with priority
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
