import React from 'react';

const Scanlines: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden h-full w-full">
      <div className="scanlines-overlay absolute inset-0 opacity-20" />
      <div className="crt-flicker" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
    </div>
  );
};

export default Scanlines;
