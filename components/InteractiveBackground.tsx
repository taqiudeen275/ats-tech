import React, { useEffect, useRef } from 'react';

interface InteractiveBackgroundProps {
  className?: string;
  variant?: 'retro' | 'glass' | 'clay' | 'antidesign' | 'hyperminimal' | 'grain' | 'lux';
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ 
  className = '', 
  variant = 'retro' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    // Retro Particles
    let particles: { x: number; y: number; originX: number; originY: number; size: number }[] = [];
    
    // Glass/Clay Blobs
    let blobs: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = [];

    // Anti Design Elements
    let antiElements: { x: number; y: number; vx: number; vy: number; text: string; size: number }[] = [];

    // Hyperminimal Dot
    let hyperDot = { x: -100, y: -100 };

    // Grain Scratches
    let scratches: { x: number; h: number; opacity: number }[] = [];
    let nextScratchTime = 0;

    // Lux Spotlight
    let spotlight = { x: width/2, y: height/2 };

    // Mouse state
    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const init = () => {
      if (!canvas.parentElement && !document.body) return;
      
      // If fixed (glass/clay/anti/hyper/grain/lux), use window size. If absolute (retro), use parent size.
      if (variant === 'glass' || variant === 'clay' || variant === 'antidesign' || variant === 'hyperminimal' || variant === 'grain' || variant === 'lux') {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      } else {
        width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
        height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      }
      
      if (variant === 'retro') {
        particles = [];
        const spacing = 50; // Grid spacing
        const cols = Math.ceil(width / spacing);
        const rows = Math.ceil(height / spacing);

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const x = i * spacing + (spacing / 2);
            const y = j * spacing + (spacing / 2);
            particles.push({ 
              x, 
              y, 
              originX: x, 
              originY: y,
              size: 1.5
            });
          }
        }
      } else if (variant === 'glass') {
        blobs = [];
        const blobCount = 8;
        const colors = [
          '#FF00FF', '#00FFFF', '#FFFF00', '#FF1493', '#7B68EE', '#00FA9A',
        ];
        
        for (let i = 0; i < blobCount; i++) {
          blobs.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            radius: Math.random() * 100 + 100,
            color: colors[i % colors.length]
          });
        }
      } else if (variant === 'clay') {
        blobs = [];
        const blobCount = 6;
        const colors = [
          '#6C5CE7', '#00CEC9', '#FD79A8', '#74B9FF',
        ];
        
        for (let i = 0; i < blobCount; i++) {
          blobs.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            radius: Math.random() * 60 + 40,
            color: colors[i % colors.length]
          });
        }
      } else if (variant === 'antidesign') {
        antiElements = [];
        const words = ["ERROR", "UNDEFINED", "NULL", "404", "VOID", "?", "X"];
        const count = 15;
        
        for (let i = 0; i < count; i++) {
            antiElements.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 10, // Very fast
                vy: (Math.random() - 0.5) * 10,
                text: words[Math.floor(Math.random() * words.length)],
                size: Math.random() * 40 + 20
            });
        }
      } else if (variant === 'hyperminimal') {
        hyperDot = { x: width / 2, y: height / 2 };
      } else if (variant === 'grain') {
        scratches = [];
      } else if (variant === 'lux') {
        spotlight = { x: width / 2, y: height / 2 };
      }
    };

    const drawRetro = () => {
      ctx.clearRect(0, 0, width, height);

      const rect = canvas.getBoundingClientRect();
      const relativeMouseX = mouse.x - rect.left;
      const relativeMouseY = mouse.y - rect.top;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        const dx = relativeMouseX - p.x;
        const dy = relativeMouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;

        let alpha = 0.1;
        let scale = 1;

        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          const moveStrength = force * 15;
          
          p.x += (Math.cos(angle) * moveStrength - (p.x - p.originX)) * 0.1;
          p.y += (Math.sin(angle) * moveStrength - (p.y - p.originY)) * 0.1;

          alpha = 0.1 + (force * 0.5);
          scale = 1 + (force * 1.5);
          
          if (dist < 50) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(relativeMouseX, relativeMouseY);
            ctx.strokeStyle = `rgba(255, 0, 0, ${force * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        } else {
          p.x += (p.originX - p.x) * 0.1;
          p.y += (p.originY - p.y) * 0.1;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(p.x - (p.size * scale) / 2, p.y - (p.size * scale) / 2, p.size * scale, p.size * scale);
      }
    };

    const drawGlass = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'screen'; 

      for (let i = 0; i < blobs.length; i++) {
        const b = blobs[i];
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < -b.radius) b.x = width + b.radius;
        if (b.x > width + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = height + b.radius;
        if (b.y > height + b.radius) b.y = -b.radius;

        const dx = mouse.x - b.x;
        const dy = mouse.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 400;

        if (dist < interactionRadius) {
           const force = (interactionRadius - dist) / interactionRadius;
           b.x -= (dx / dist) * force * 4;
           b.y -= (dy / dist) * force * 4;
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.globalAlpha = 0.8; 
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
      ctx.globalCompositeOperation = 'source-over';
    };
    
    const drawClay = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < blobs.length; i++) {
        const b = blobs[i];
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < b.radius) { b.x = b.radius; b.vx *= -1; }
        if (b.x > width - b.radius) { b.x = width - b.radius; b.vx *= -1; }
        if (b.y < b.radius) { b.y = b.radius; b.vy *= -1; }
        if (b.y > height - b.radius) { b.y = height - b.radius; b.vy *= -1; }

        const dx = mouse.x - b.x;
        const dy = mouse.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 200;

        if (dist < interactionRadius) {
           const force = (interactionRadius - dist) / interactionRadius;
           b.vx -= (dx / dist) * force * 0.5;
           b.vy -= (dy / dist) * force * 0.5;
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(b.x + b.radius * 0.2, b.y + b.radius * 0.2, b.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fill();
      }
    };

    const drawAnti = () => {
        if (Math.random() > 0.9) ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < antiElements.length; i++) {
            const el = antiElements[i];
            el.x += el.vx;
            el.y += el.vy;
            
            if (el.x < 0 || el.x > width) el.vx *= -1;
            if (el.y < 0 || el.y > height) el.vy *= -1;

            ctx.font = `bold ${el.size}px "Times New Roman"`;
            ctx.fillStyle = Math.random() > 0.5 ? 'blue' : 'black';
            ctx.fillText(el.text, el.x, el.y);
            
            if (Math.random() > 0.95) {
                ctx.strokeStyle = 'red';
                ctx.strokeRect(el.x - 10, el.y - 10, el.size + 20, el.size + 10);
            }
        }
    }

    const drawHyper = () => {
      ctx.clearRect(0, 0, width, height);
      // Simple laggy follower
      hyperDot.x += (mouse.x - hyperDot.x) * 0.1;
      hyperDot.y += (mouse.y - hyperDot.y) * 0.1;

      ctx.beginPath();
      ctx.arc(hyperDot.x, hyperDot.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.fill();
    }

    const drawGrain = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      
      // Random Dust
      if (Math.random() > 0.7) {
        const dustCount = Math.floor(Math.random() * 5);
        for(let i=0; i<dustCount; i++) {
           const x = Math.random() * width;
           const y = Math.random() * height;
           const size = Math.random() * 2;
           ctx.fillStyle = 'rgba(40, 40, 40, 0.4)';
           ctx.fillRect(x, y, size, size);
        }
      }

      // Vertical Scratches
      if (time > nextScratchTime) {
         scratches.push({
            x: Math.random() * width,
            h: Math.random() * height,
            opacity: Math.random() * 0.5 + 0.2
         });
         nextScratchTime = time + Math.random() * 200 + 100;
      }

      // Draw and clean scratches
      for (let i = scratches.length - 1; i >= 0; i--) {
         const s = scratches[i];
         ctx.beginPath();
         ctx.moveTo(s.x, 0);
         ctx.lineTo(s.x + (Math.random() - 0.5) * 2, height); // Slightly jittery line
         ctx.strokeStyle = `rgba(100, 100, 100, ${s.opacity})`;
         ctx.lineWidth = 1;
         ctx.stroke();
         
         s.opacity -= 0.05;
         if (s.opacity <= 0) scratches.splice(i, 1);
      }
    };

    const drawLux = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Smooth spotlight lerp
      spotlight.x += (mouse.x - spotlight.x) * 0.08;
      spotlight.y += (mouse.y - spotlight.y) * 0.08;

      const gradient = ctx.createRadialGradient(spotlight.x, spotlight.y, 0, spotlight.x, spotlight.y, 600);
      gradient.addColorStop(0, 'rgba(30, 30, 40, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    const loop = (time: number) => {
      if (variant === 'glass') {
        drawGlass();
      } else if (variant === 'clay') {
        drawClay();
      } else if (variant === 'antidesign') {
        drawAnti();
      } else if (variant === 'hyperminimal') {
        drawHyper();
      } else if (variant === 'grain') {
        drawGrain(time);
      } else if (variant === 'lux') {
        drawLux();
      } else {
        drawRetro();
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  const blurClass = variant === 'glass' ? 'blur-[80px]' : '';
  const opacityClass = variant === 'clay' ? 'opacity-30' : variant === 'antidesign' ? 'opacity-10' : '';

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 z-0 pointer-events-none ${blurClass} ${opacityClass} ${className}`}
    />
  );
};

export default InteractiveBackground;