import { useRef, useEffect, useState } from 'react';

const useSound = () => {
    const [isEnabled, setIsEnabled] = useState(() => {
        const stored = localStorage.getItem('sound_enabled');
        return stored === null ? false : stored === 'true';
    });

    const audioContext = useRef(null);

    useEffect(() => {
        localStorage.setItem('sound_enabled', isEnabled);
    }, [isEnabled]);

    const initAudio = () => {
        if (!audioContext.current) {
            audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContext.current.state === 'suspended') {
            audioContext.current.resume();
        }
    };

    const playHover = () => {
        if (!isEnabled) return;
        initAudio();
        const ctx = audioContext.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    };

    const playClick = () => {
        if (!isEnabled) return;
        initAudio();
        const ctx = audioContext.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    };

    const playSuccess = () => {
        if (!isEnabled) return;
        initAudio();
        const ctx = audioContext.current;
        const mainOsc = ctx.createOscillator();
        const secondOsc = ctx.createOscillator();
        const gain = ctx.createGain();

        mainOsc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        mainOsc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2); // G5

        secondOsc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
        secondOsc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.2); // C6

        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

        mainOsc.connect(gain);
        secondOsc.connect(gain);
        gain.connect(ctx.destination);

        mainOsc.start();
        secondOsc.start();
        mainOsc.stop(ctx.currentTime + 0.3);
        secondOsc.stop(ctx.currentTime + 0.3);
    };

    const toggleSound = () => setIsEnabled(prev => !prev);

    return { playHover, playClick, playSuccess, isEnabled, toggleSound };
};

export default useSound;
