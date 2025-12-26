'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import About from '@/components/About';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BootSequence from '@/components/BootSequence';
import Scanlines from '@/components/Scanlines';
import CustomCursor from '@/components/CustomCursor';
import InteractiveBackground from '@/components/InteractiveBackground';
import {  useTheme } from '@/context/ThemeContext';

const AppContent: React.FC = () => {
  const [booting, setBooting] = useState(true);
  const { isRetro, isNeu, isGlass, isClay, isAnti, isHyper, isGrain, isLux } = useTheme();

  useEffect(() => {
    // Skip boot sequence if not in retro mode
    if (!isRetro) {
      setBooting(false);
    }
  }, [isRetro]);

  // Dynamic base classes for the main content wrapper
  let mainClasses = "min-h-screen transition-colors duration-500 relative z-10";
  
  // Note: Most backgrounds are now handled by the .theme-X classes in globals.css applied to document.body
  // However, we still apply utility-like classes here if needed for consistency or overriding.
  if (isRetro) mainClasses += " bg-black text-white";
  else if (isAnti) mainClasses += " bg-anti-yellow text-black";
  else if (isHyper) mainClasses += " bg-hyper-gray text-black";
  else if (isGrain) mainClasses += " bg-grain-beige text-grain-dark";
  else if (isLux) mainClasses += " bg-lux-black text-white";

  return (
    <>
      {isRetro && <Scanlines />}
      {(isRetro || isLux) && <CustomCursor />}
      
      {/* Global Interactive Background for Glass Theme */}
      {isGlass && (
        <div className="fixed inset-0 z-0">
          <InteractiveBackground variant="glass" className="w-full h-full opacity-60" />
        </div>
      )}

      {/* Global Interactive Background for Clay Theme */}
      {isClay && (
        <div className="fixed inset-0 z-0">
          <InteractiveBackground variant="clay" className="w-full h-full opacity-40" />
        </div>
      )}

      {/* Global Interactive Background for Anti Theme */}
      {isAnti && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <InteractiveBackground variant="antidesign" className="w-full h-full" />
        </div>
      )}
      
      {/* Global Interactive Background for Hyperminimal Theme */}
      {isHyper && (
        <div className="fixed inset-0 z-0 pointer-events-none">
           <InteractiveBackground variant="hyperminimal" className="w-full h-full opacity-50" />
        </div>
      )}

      {/* Global Interactive Background for Grain Theme */}
      {isGrain && (
        <div className="fixed inset-0 z-0 pointer-events-none">
           <InteractiveBackground variant="grain" className="w-full h-full" />
        </div>
      )}

      {/* Global Interactive Background for Lux Theme */}
      {isLux && (
        <div className="fixed inset-0 z-0 pointer-events-none">
           <InteractiveBackground variant="lux" className="w-full h-full" />
        </div>
      )}
      
      {booting && isRetro && <BootSequence onComplete={() => setBooting(false)} />}
      
      {(!booting || !isRetro) && (
        <main className={mainClasses}>
          <Navbar />
          <Hero />
          <Services />
          <Solutions />
          <About />
          <Process />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
};
  

export default AppContent;