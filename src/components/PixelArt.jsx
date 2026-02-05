import React, { useState } from 'react';
import { useGallery } from '../hooks/useGallery';
import Lightbox from './Lightbox';
import LazyImage from './LazyImage';
import '../styles/pixelart.css';

export default function PixelArt() {
    const { images, loading } = useGallery('pixelart');
    const [selectedImage, setSelectedImage] = useState(null);

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
                {images.map((src, index) => (
                    <div
                        key={src}
                        className="pixel-item"
                        onClick={() => setSelectedImage(src)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(src)}
                    >
                        <LazyImage
                            src={src}
                            alt={`Pixel Art ${index + 1}`}
                            className="pixel-img"
                            priority={index < 4} // Load first 4 images with priority
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
