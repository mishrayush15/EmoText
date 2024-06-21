import React, { useState } from 'react';
import {emojis} from '../assets/Emojis'

const emojiMap = emojis

const TextBox = () => {
    const [text, setText] = useState('');
    const [convertedText, setConvertedText] = useState('');

    const convertTextToEmoji = (inputText) => {
        const words = inputText.split(' ');
        const convertedWords = words.map((word) => emojiMap[word.toLowerCase()] || word);
        return convertedWords.join(' ');
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setText(inputValue);
        setConvertedText(convertTextToEmoji(inputValue));
    };

    return (
        <div className="text-box">
            <textarea
                value={text}
                onChange={handleChange}
                placeholder=""
            />
            <div className="">
                {convertedText}
            </div>
        </div>
    );
};

export default TextBox;
