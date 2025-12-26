import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { isLux, isRetro } = useTheme();

  useEffect(() => {
    // Only enable on devices that support hover (desktop)
    if (typeof window !== 'undefined' && window.matchMedia("(hover: none)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instant update for the main cursor dot
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isClickable);
    };

    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);

    // Smooth animation loop for the follower
    const animateFollower = () => {
      // Linear interpolation (lerp) for delay effect
      followerX += (mouseX - followerX) * (isLux ? 0.1 : 0.15); // Slower for lux
      followerY += (mouseY - followerY) * (isLux ? 0.1 : 0.15);

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    const frameId = requestAnimationFrame(animateFollower);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(frameId);
    };
  }, [isLux]);

  if (!isRetro && !isLux) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[100] pointer-events-none -ml-1 -mt-1 hidden md:block mix-blend-difference
          ${isLux ? 'w-2 h-2 bg-white rounded-full' : 'w-2 h-2 bg-ats-green'}`}
      />
      
      {/* Trailing Reticle / Circle */}
      <div 
        ref={followerRef}
        className={`
          fixed top-0 left-0 z-[99] pointer-events-none hidden md:flex items-center justify-center transition-all duration-200 ease-out overflow-hidden
          ${isLux 
             ? `rounded-full border border-white mix-blend-difference transition-[width,height,margin] duration-300
                ${isHovering ? 'w-20 h-20 -ml-10 -mt-10 bg-white' : 'w-10 h-10 -ml-5 -mt-5'}
                ${isActive ? 'scale-90' : 'scale-100'}`
             : `
                ${isHovering ? 'w-12 h-12 -ml-6 -mt-6 bg-ats-red/10' : 'w-8 h-8 -ml-4 -mt-4'}
                ${isActive ? 'scale-75' : 'scale-100'}
             `
          }
        `}
      >
        {isRetro && (
          <>
            {/* Retro Reticle Borders */}
            <div className={`
              absolute inset-0 border border-ats-red transition-all duration-200
              ${isHovering ? 'border-dashed opacity-50 rotate-90' : 'opacity-30'}
              ${isActive ? 'bg-ats-red/20' : ''}
            `} />

            {/* Tech Corners */}
            <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-ats-red transition-all duration-200 ${isHovering ? '-top-1 -left-1' : 'top-0 left-0'}`} />
            <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-ats-red transition-all duration-200 ${isHovering ? '-top-1 -right-1' : 'top-0 right-0'}`} />
            <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-ats-red transition-all duration-200 ${isHovering ? '-bottom-1 -left-1' : 'bottom-0 left-0'}`} />
            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-ats-red transition-all duration-200 ${isHovering ? '-bottom-1 -right-1' : 'bottom-0 right-0'}`} />

            {/* Glitch/Scanline effect on hover */}
            {isHovering && (
              <div className="absolute left-0 w-full h-1 bg-ats-red/60 animate-scan-fast shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CustomCursor;