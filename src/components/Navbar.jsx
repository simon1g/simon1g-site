import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import '../styles/navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOnline, setIsOnline] = useState(false);

    React.useEffect(() => {
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
        { name: 'Astrophotography', path: '/astropics' }, // URL naming convention check? User said /astropics in assets, I'll use /astrophotography for route
        { name: 'About', path: '/about' },
        { name: 'Games', path: '/games' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="brand" onClick={() => setIsOpen(false)}>
                    simon1g
                </NavLink>

                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
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

                    <div className="nav-actions">
                        <span
                            className={`status-indicator ${isOnline ? 'status-online' : ''}`}
                            title={isOnline ? "Online" : "Offline"}
                            aria-label={isOnline ? "Status: Online" : "Status: Offline"}
                        />



                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
