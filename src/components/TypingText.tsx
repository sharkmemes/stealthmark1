import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const TypingText = ({ text, delay = 100, className = "" }: TypingTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink-caret border-r-2 border-primary ml-1"></span>
    </span>
  );
};