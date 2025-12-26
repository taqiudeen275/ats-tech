import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveBackground from './InteractiveBackground';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);

  const bootLines = [
    "> BIOS DATE 01/15/25 15:23:01 VER 1.0.2",
    "> CPU: ATS-QUANTUM PROCESSOR 128-CORE",
    "> CHECKING MEMORY... 64TB OK",
    "> INITIALIZING VIDEO ADAPTER... DONE",
    "> LOADING KERNEL... DONE",
    "> MOUNTING FILESYSTEMS... DONE",
    "> STARTING ATS_TECH_DAEMON...",
    "> ESTABLISHING SECURE CONNECTION...",
    "> SYSTEM READY."
  ];

  useEffect(() => {
    let delay = 0;
    bootLines.forEach((line, index) => {
      delay += Math.random() * 300 + 100;
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === bootLines.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, delay);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black flex items-start justify-start p-8 md:p-16 font-mono text-green-500 text-sm md:text-base overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
    >
      <InteractiveBackground />
      <div className="w-full max-w-3xl relative z-10">
        {lines.map((line, i) => (
          <div key={i} className="mb-1">{line}</div>
        ))}
        <motion.div 
          className="w-3 h-5 bg-green-500 mt-2"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

export default BootSequence;