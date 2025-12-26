import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 50, 
  startDelay = 0, 
  className = '', 
  cursor = true,
  onComplete
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!hasStarted) {
      timeout = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);
    } else {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, delay);
      } else if (onComplete) {
        onComplete();
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, hasStarted, startDelay, text, onComplete]);

  return (
    <span className={`${className} font-mono`}>
      {currentText}
      {cursor && (
        <span className="animate-blink bg-ats-red text-ats-red inline-block w-2.5 h-5 ml-1 align-middle shadow-[0_0_8px_rgba(255,0,0,0.5)]">_</span>
      )}
    </span>
  );
};

export default Typewriter;