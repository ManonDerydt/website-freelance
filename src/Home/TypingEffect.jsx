import React, { useState, useEffect } from 'react';

function TypingEffect({ text, delay }) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, delay);
        return () => clearInterval(intervalId);
    }, [text, delay]);

    return <span>{displayedText}</span>;
}

export default TypingEffect;