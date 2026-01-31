import React, { useState } from 'react';
import { useGallery } from '../hooks/useGallery';
import Lightbox from './Lightbox';
import '../styles/photography.css';

export default function Photography() {
    const { images, loading } = useGallery('pics');
    const [selectedImage, setSelectedImage] = useState(null);

    if (loading) return <div className="container section">Loading...</div>;

    return (
        <div className="container section">
            <h2 className="section-title">Photography</h2>
            <div className="photo-grid">
                {images.map((src, index) => (
                    <div
                        key={src}
                        className="photo-item"
                        onClick={() => setSelectedImage(src)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(src)}
                    >
                        <img
                            src={src}
                            alt={`Photo ${index + 1}`}
                            className="photo-img"
                            loading="lazy"
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
