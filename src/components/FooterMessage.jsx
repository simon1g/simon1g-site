import React, { useState, useEffect } from 'react';

const FooterMessage = () => {
    const messages = [
        "hello",
        "how you doing?",
        "remember to drink water",
        "hope you're having a great day!",
        "stay hydrated",
        "you are awesome!",
        "take a break if you need to",
        "keep being you",
        "smile it looks good on you",
        "u're doing great!",
        "take a shower ok?",
        "i love you",
        "lowkey need a gf",
        "still single",
        "you are enough",
    ];

    const [currentMessage, setCurrentMessage] = useState("");
    const [key, setKey] = useState(0);

    useEffect(() => {
        const showNextMessage = () => {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            setCurrentMessage(randomMsg);
            setKey(prev => prev + 1);
        };

        showNextMessage();
        const interval = setInterval(showNextMessage, 10000); // Change every 10s
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="footer-message-container">
            <div key={key} className="footer-message-text">
                {currentMessage}
            </div>
        </div>
    );
};

export default FooterMessage;
