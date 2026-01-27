import { useState, useEffect } from 'react';

function TypingEffect({ text, speed = 120, highlightWord = '' }) {
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex >= text.length) return;

    const timer = setInterval(() => {
      setCharIndex(prev => prev + 1);
    }, speed);

    return () => clearInterval(timer);
  }, [charIndex, text.length, speed]);

  const displayedText = text.slice(0, charIndex);

  // If there's a word to highlight, split and style it
  const renderText = () => {
    if (!highlightWord || !displayedText.includes(highlightWord)) {
      return displayedText;
    }

    // Split the text around the highlight word
    const parts = displayedText.split(highlightWord);

    return (
      <>
        {parts[0]}
        <span className="intro-name">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <span>
      {renderText()}
      <span className="typed-cursor">|</span>
    </span>
  );
}

export default TypingEffect;
