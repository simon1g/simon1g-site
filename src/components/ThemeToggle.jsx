import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useSound } from '../context/SoundContext';

export default function ThemeToggle() {
    const { playHover, playClick, playSuccess } = useSound();
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const stored = localStorage.getItem('theme');
            if (stored) return stored;
        }
        return 'dark';
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        playSuccess(); // Success sound for theme toggle
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            onMouseEnter={playHover}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}
