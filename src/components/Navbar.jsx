import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import '../styles/navbar.css';

const MOBILE_BREAKPOINT = 768;

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOnline, setIsOnline] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
        const update = () => setIsMobile(mql.matches);
        update();
        mql.addEventListener('change', update);
        return () => mql.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        const API_ENDPOINT = 'https://simon1g-site.pages.dev/api/premid';
        const fetchStatus = async () => {
            try {
                const res = await fetch(API_ENDPOINT);
                if (res.ok) {
                    const data = await res.json();
                    setIsOnline(!!data?.active_activity);
                }
            } catch (error) {
                console.error("Status fetch error", error);
            }
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 50000);
        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Pixel Art', path: '/pixelart' },
        { name: 'Photography', path: '/photography' },
        { name: 'Astrophotography', path: '/astropics' },
        { name: 'About', path: '/about' },
        { name: 'Games', path: '/games' },
    ];

    const navLinksContent = (
        <>
            {navItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                >
                    {item.name}
                </NavLink>
            ))}
        </>
    );

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink to="/" className="brand" onClick={() => setIsOpen(false)}>
                        simon1g
                    </NavLink>

                    {!isMobile && <div className="nav-links">{navLinksContent}</div>}

                    <div className="mobile-right-group">
                    <div className="nav-actions">
                        <span
                            className={`status-indicator ${isOnline ? 'status-online' : ''}`}
                            title={isOnline ? "Online" : "Offline"}
                            aria-label={isOnline ? "Status: Online" : "Status: Offline"}
                        />

                        <ThemeToggle />
                    </div>

                    <div className="hamburger" onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>
            </div>
        </nav>

            {isMobile &&
                createPortal(
                    <div
                        className={`mobile-menu-portal ${isOpen ? 'mobile-menu-portal--open' : ''}`}
                        onClick={() => setIsOpen(false)}
                        aria-hidden={!isOpen}
                    >
                        <div className="mobile-menu-glass" onClick={(e) => e.stopPropagation()}>
                            {navLinksContent}
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}