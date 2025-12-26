import { useCallback } from 'react';
import { useSoundContext } from '../context/SoundContext';
import { useTheme } from '../context/ThemeContext';

export const useSound = () => {
  const { soundEnabled } = useSoundContext();
  const { theme } = useTheme();

  const playHover = useCallback(() => {
    if (!soundEnabled) return;

    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (theme === 'neubrutalism') {
        // Neubrutalism: Harsh, mechanical buzz (Sawtooth)
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.05);
        
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        
        osc.start();
        osc.stop(now + 0.05);

      } else if (theme === 'glassmorphism') {
        // Glassmorphism: Ethereal, high-pitch crystal ting (Sine with harmonics)
        osc.type = 'sine';
        // Primary tone
        osc.frequency.setValueAtTime(2000, now);
        osc.frequency.exponentialRampToValueAtTime(2500, now + 0.1);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.03, now + 0.02); // Softer attack
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3); // Longer decay

        // Add a second oscillator for harmony (bell-like)
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(3000, now);
        gain2.gain.setValueAtTime(0, now);
        gain2.gain.linearRampToValueAtTime(0.01, now + 0.02);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        
        osc.start();
        osc2.start();
        osc.stop(now + 0.3);
        osc2.stop(now + 0.3);

      } else if (theme === 'claymorphism') {
        // Claymorphism: Soft pop/bloop (Sine sweep up quickly)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
        
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        
        osc.start();
        osc.stop(now + 0.1);

      } else if (theme === 'antidesign') {
        // Anti-design: Static Noise Burst
        const bufferSize = ctx.sampleRate * 0.1; // 0.1 seconds
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.connect(gain);
        
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        
        noise.start();

      } else if (theme === 'hyperminimal') {
        // Hyperminimal: Tiny, sharp tick
        osc.type = 'sine';
        osc.frequency.setValueAtTime(4000, now);
        
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.01);
        
        osc.start();
        osc.stop(now + 0.01);

      } else if (theme === 'grain') {
        // Grain: Paper shuffle (Pink noise burst with filter)
        const bufferSize = ctx.sampleRate * 0.15;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        var lastOut = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (lastOut + (0.02 * white)) / 1.02;
          lastOut = data[i];
          data[i] *= 3.5; 
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;

        noise.connect(filter);
        filter.connect(gain);
        
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.15);
        
        noise.start();

      } else if (theme === 'lux') {
        // Lux: Deep, cinematic low hum
        osc.type = 'sine';
        osc.frequency.setValueAtTime(60, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.2);
        
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        
        osc.start();
        osc.stop(now + 0.2);

      } else {
        // Retro: Classic Tech Chirp (Sine sweep)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, now);
        osc.frequency.exponentialRampToValueAtTime(2000, now + 0.05);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.05, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.start();
        osc.stop(now + 0.05);
      }

      osc.onended = () => {
        ctx.close();
      };
    } catch (e) {
      console.error("Audio playback failed", e);
    }
  }, [soundEnabled, theme]);

  const playClick = useCallback(() => {
    if (!soundEnabled) return;

    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (theme === 'neubrutalism') {
        // Neubrutalism: Heavy, distorted thud/zap (Square)
        osc.type = 'square';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.1);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        
        osc.start();
        osc.stop(now + 0.1);

      } else if (theme === 'glassmorphism') {
        // Glassmorphism: Water drop / Bubble pop (Sine drop)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.15);

        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        osc.start();
        osc.stop(now + 0.15);

      } else if (theme === 'claymorphism') {
        // Claymorphism: Deeper, squashy click (Triangle)
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.linearRampToValueAtTime(200, now + 0.1);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        
        osc.start();
        osc.stop(now + 0.15);

      } else if (theme === 'antidesign') {
        // Anti-design: Error Buzzer (Square)
        osc.type = 'square';
        osc.frequency.setValueAtTime(100, now);
        
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.setValueAtTime(0, now + 0.1);
        
        osc.start();
        osc.stop(now + 0.1);

      } else if (theme === 'hyperminimal') {
        // Hyperminimal: Low, barely audible thud
        osc.type = 'sine';
        osc.frequency.setValueAtTime(100, now);
        
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        
        osc.start();
        osc.stop(now + 0.05);

      } else if (theme === 'grain') {
        // Grain: Typewriter Clack
        const oscThud = ctx.createOscillator();
        const gainThud = ctx.createGain();
        oscThud.connect(gainThud);
        gainThud.connect(ctx.destination);
        
        oscThud.frequency.setValueAtTime(200, now);
        oscThud.frequency.exponentialRampToValueAtTime(50, now + 0.05);
        gainThud.gain.setValueAtTime(0.15, now);
        gainThud.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        oscThud.start();
        oscThud.stop(now + 0.05);

      } else if (theme === 'lux') {
        // Lux: Rich, bassy impact
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.3);
        
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        
        // Add a subtle high-end sheen
        const oscHigh = ctx.createOscillator();
        const gainHigh = ctx.createGain();
        oscHigh.connect(gainHigh);
        gainHigh.connect(ctx.destination);
        
        oscHigh.type = 'triangle';
        oscHigh.frequency.setValueAtTime(800, now);
        gainHigh.gain.setValueAtTime(0.01, now);
        gainHigh.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        
        oscHigh.start();
        oscHigh.stop(now + 0.1);
        
        osc.start();
        osc.stop(now + 0.3);

      } else {
        // Retro: Mechanical Click (Square)
        osc.type = 'square';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.05);

        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.start();
        osc.stop(now + 0.05);
      }

      osc.onended = () => {
        ctx.close();
      };
    } catch (e) {
      console.error("Audio playback failed", e);
    }
  }, [soundEnabled, theme]);

  return { playHover, playClick };
};