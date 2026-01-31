import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import '../styles/modal.css';

export default function Lightbox({ isOpen, onClose, imageSrc, altText, isPixelArt }) {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleBackdropClick} aria-modal="true" role="dialog">
            <button className="modal-close" onClick={onClose} aria-label="Close image">
                <X size={32} />
            </button>
            <div className="modal-content" ref={modalRef}>
                <img
                    src={imageSrc}
                    alt={altText || 'Expanded view'}
                    className={`modal-image ${isPixelArt ? 'pixelated' : ''}`}
                />
            </div>
        </div>
    );
}
