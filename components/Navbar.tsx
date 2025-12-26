import React, { useState } from 'react';
import { Menu, X, Terminal, Volume2, VolumeX, Eye, Zap, Sparkles, Circle, Triangle, Minus, FileText, Aperture } from 'lucide-react';
import { NavItem } from '@/types';
import { useSound } from '@/hooks/useSound';
import { useSoundContext } from '@/context/SoundContext';
import { useTheme } from '@/context/ThemeContext';

const navItems: NavItem[] = [
  { label: 'HOME', href: '#hero' },
  { label: 'SERVICES', href: '#services' },
  { label: 'SOLUTIONS', href: '#solutions' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { playHover, playClick } = useSound();
  const { soundEnabled, toggleSound } = useSoundContext();
  const { theme, toggleTheme, isNeu, isGlass, isRetro, isClay, isAnti, isHyper, isGrain, isLux } = useTheme();

  // Determine container classes based on theme
  let navClasses = "fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between px-6 md:px-12 font-mono transition-all duration-300 ";
  if (isNeu) {
    navClasses += "bg-neu-yellow border-b-4 border-black";
  } else if (isGlass) {
    navClasses += "bg-white/5 backdrop-blur-md border-b border-white/20 shadow-glass";
  } else if (isClay) {
    navClasses += "bg-transparent top-4 mx-4 md:mx-12 rounded-[40px] shadow-[8px_8px_16px_rgba(163,177,198,0.4),-8px_-8px_16px_rgba(255,255,255,0.8)] border border-white/60 bg-white/40 backdrop-blur-sm";
  } else if (isAnti) {
    navClasses += "bg-white border-b-2 border-black font-serif h-auto py-2";
  } else if (isHyper) {
    navClasses += "bg-transparent h-24 font-sans";
  } else if (isGrain) {
    navClasses += "bg-grain-beige border-b border-gray-400 font-courier shadow-sm";
  } else if (isLux) {
    navClasses += "bg-black/80 backdrop-blur-lg border-b border-white/5 font-outfit h-20";
  } else {
    // Retro
    navClasses += "bg-black/90 backdrop-blur-sm border-b border-white/10";
  }

  return (
    <nav className={navClasses}>
      
      {/* Logo */}
      <a 
        href="#" 
        className={`flex items-center gap-2 group ${isAnti ? 'border border-blue-700 p-1 bg-yellow-300 -rotate-1' : ''}`}
        onMouseEnter={playHover}
        onClick={playClick}
      >
        {!isHyper && !isLux && (
          <Terminal className={`w-6 h-6 transition-colors 
            ${isNeu ? 'text-black' : isGlass ? 'text-white' : isClay ? 'text-clay-blue' : isAnti ? 'text-black' : isGrain ? 'text-grain-dark' : 'text-ats-red group-hover:text-white'} 
            group-hover:animate-glitch`} 
          />
        )}
        <span className={`text-xl font-bold tracking-tighter group-hover:animate-glitch 
          ${isAnti ? 'font-serif italic' : ''}
          ${isHyper ? 'font-sans font-semibold tracking-normal text-sm' : ''}
          ${isGrain ? 'font-courier font-normal tracking-tight text-grain-dark' : ''}
          ${isLux ? 'font-outfit text-2xl tracking-wide uppercase' : ''}
          `}>
          ATS<span className={`transition-colors 
            ${isNeu ? 'text-black' : isGlass ? 'text-white/70' : isClay ? 'text-gray-500' : isAnti ? 'text-blue-700 underline' : isHyper ? 'text-gray-400 font-normal' : isGrain ? 'text-gray-500' : isLux ? 'text-white' : 'text-ats-red group-hover:text-white'}`}>
              {isHyper ? ' tech' : '_TECH'}
            </span>
        </span>
      </a>

      {/* Desktop Nav */}
      <div className={`hidden md:flex items-center gap-8 ${isAnti ? 'gap-0 space-x-0' : ''}`}>
        {!isHyper && navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`relative text-sm py-1 group hover:animate-glitch transition-colors
              ${isNeu 
                ? 'text-black font-bold hover:bg-black hover:text-white px-2' 
                : isGlass 
                  ? 'text-white/80 hover:text-white font-medium hover:bg-white/10 rounded px-2'
                  : isClay
                    ? 'text-gray-600 hover:text-clay-blue font-bold px-3 py-1 hover:bg-white rounded-2xl transition-all'
                    : isAnti
                      ? 'text-blue-800 underline hover:bg-blue-800 hover:text-white font-serif text-lg px-2 border-r border-black'
                      : isGrain
                        ? 'text-grain-dark hover:underline underline-offset-4 decoration-1 font-courier'
                        : isLux
                          ? 'text-gray-400 hover:text-white font-outfit uppercase tracking-widest text-xs font-bold'
                      : 'text-gray-400 hover:text-white'
              }`}
            onMouseEnter={playHover}
            onClick={playClick}
          >
            {isRetro && <span className="absolute -left-3 opacity-0 group-hover:opacity-100 text-ats-red transition-opacity text-xs top-1.5">{'>'}</span>}
            {isNeu ? item.label : isGlass ? item.label : isClay ? item.label : isAnti ? item.label.toLowerCase() : isGrain ? item.label.toLowerCase() : isLux ? item.label : `[${item.label}]`}
          </a>
        ))}
        
        <div className={`flex items-center gap-4 pl-4 border-l ${isNeu ? 'border-black' : isClay ? 'border-gray-300' : isAnti ? 'border-black gap-0 pl-0' : isHyper ? 'border-none' : isGrain ? 'border-gray-400' : isLux ? 'border-white/10' : 'border-white/20'}`}>
          {/* Theme Toggle */}
          <button
            onClick={() => {
              toggleTheme();
              playClick();
            }}
            onMouseEnter={playHover}
            className={`transition-colors focus:outline-none flex items-center gap-2 font-bold text-xs
              ${isNeu 
                ? 'bg-black text-white px-3 py-1 shadow-neu hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none' 
                : isGlass
                  ? 'bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full hover:bg-white/20'
                  : isClay
                    ? 'bg-white text-clay-blue px-3 py-1.5 rounded-full clay-button hover:text-white hover:bg-clay-blue'
                    : isAnti
                      ? 'bg-red-600 text-white font-serif border-2 border-black px-2 py-2 hover:bg-red-700 rounded-none'
                      : isHyper
                        ? 'text-black font-sans text-[10px] tracking-widest uppercase hover:text-gray-500'
                      : isGrain
                        ? 'text-grain-dark border border-grain-dark px-2 py-1 hover:bg-grain-dark hover:text-white font-courier'
                        : isLux
                          ? 'text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black font-outfit uppercase tracking-widest text-[10px]'
                      : 'text-gray-400 hover:text-ats-red'}`}
            title="Toggle Theme"
          >
            {isNeu ? <Zap size={16} /> : isGlass ? <Sparkles size={16} /> : isClay ? <Circle size={16} /> : isAnti ? <Triangle size={16} /> : isHyper ? <Minus size={16} /> : isGrain ? <FileText size={16} /> : isLux ? <Aperture size={16} /> : <Eye size={16} />}
            {isNeu ? 'BRUTAL' : isGlass ? 'GLASS' : isClay ? 'CLAY' : isAnti ? 'UGLY' : isHyper ? 'MINIMAL' : isGrain ? 'GRAIN' : isLux ? 'LUX' : 'RETRO'}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              toggleSound();
              playClick();
            }}
            onMouseEnter={playHover}
            className={`transition-colors focus:outline-none
              ${isNeu 
                ? 'text-black hover:text-white hover:bg-black p-1 rounded-none' 
                : isGlass
                  ? 'text-white/70 hover:text-white p-1'
                  : isClay
                    ? 'text-gray-500 hover:text-clay-blue p-1'
                    : isAnti
                      ? 'text-black border-2 border-black p-1 bg-white hover:invert'
                      : isHyper
                        ? 'text-gray-300 hover:text-black p-1'
                      : isGrain
                        ? 'text-gray-600 hover:text-black p-1'
                        : isLux
                          ? 'text-gray-500 hover:text-white p-1'
                      : 'text-gray-400 hover:text-ats-red'}`}
            title={soundEnabled ? "Mute Audio" : "Enable Audio"}
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>

          {isHyper && (
             <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-gray-500 transition-colors ml-4 font-sans text-xs"
             >
                {isOpen ? 'CLOSE' : 'MENU'}
             </button>
          )}
        </div>
      </div>

      {/* Mobile Controls / Hyperminimal Toggle */}
      <div className={`md:hidden flex items-center gap-4 ${isHyper ? 'md:flex' : ''}`}>
        {!isHyper && (
          <>
            <button
               onClick={toggleTheme}
               className={`${isNeu || isAnti || isHyper || isGrain ? 'text-black' : isClay ? 'text-gray-700' : 'text-white'}`}
            >
               {isNeu ? <Zap size={20} /> : isGlass ? <Sparkles size={20} /> : isClay ? <Circle size={20} /> : isAnti ? <Triangle size={20} /> : isHyper ? <Minus size={20} /> : isGrain ? <FileText size={20} /> : isLux ? <Aperture size={20} /> : <Eye size={20} />}
            </button>

            <button
              onClick={() => {
                toggleSound();
                playClick();
              }}
              className={`${isNeu || isAnti || isHyper || isGrain ? 'text-black' : isClay ? 'text-gray-700' : 'text-white'} hover:text-ats-red transition-colors`}
            >
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </>
        )}

        <button 
          className={`${isNeu || isAnti || isHyper || isGrain ? 'text-black' : isClay ? 'text-gray-700' : 'text-white'} hover:text-ats-red transition-colors hover:animate-glitch`}
          onClick={() => {
            setIsOpen(!isOpen);
            playClick();
          }}
          onMouseEnter={playHover}
        >
          {isOpen ? <X /> : isHyper ? <span className="font-sans text-xs tracking-widest hidden md:block">MENU</span> : <Menu />}
          {isHyper && <span className="md:hidden"><Menu /></span>}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className={`absolute top-16 left-0 right-0 p-6 flex flex-col gap-4 md:hidden border-b transition-colors
          ${isNeu 
            ? 'bg-neu-yellow border-black' 
            : isGlass 
              ? 'bg-black/60 backdrop-blur-xl border-white/10'
              : isClay
                ? 'bg-clay-bg border-white rounded-b-3xl shadow-xl'
                : isAnti
                  ? 'bg-yellow-300 border-black'
                  : isHyper
                    ? 'bg-white h-screen fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-8 text-2xl font-sans'
                    : isGrain
                      ? 'bg-grain-beige border-gray-400'
                      : isLux
                        ? 'bg-black border-white/10'
                : 'bg-black border-white/20'}`}>
          
          {isHyper && (
            <button 
              className="absolute top-8 right-8 text-black"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>
          )}

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-lg p-2 block border-l-2 transition-all hover:animate-glitch
                ${isNeu 
                  ? 'border-black text-black font-bold hover:bg-black hover:text-white' 
                  : isGlass
                    ? 'border-transparent text-white/90 hover:bg-white/10 rounded-r hover:border-white/50'
                    : isClay
                      ? 'border-transparent text-gray-700 hover:text-clay-blue hover:bg-white rounded-xl'
                      : isAnti
                        ? 'text-blue-800 underline font-serif bg-white border border-black'
                        : isHyper
                          ? 'border-none text-black hover:text-gray-400 font-light tracking-tight text-4xl text-center'
                          : isGrain
                            ? 'border-transparent text-grain-dark hover:underline font-courier'
                            : isLux
                              ? 'border-transparent text-white font-outfit font-bold uppercase tracking-widest hover:text-gray-400'
                      : 'border-transparent text-gray-400 hover:text-ats-red hover:bg-white/5 hover:border-ats-red'}`}
              onClick={() => {
                setIsOpen(false);
                playClick();
              }}
              onMouseEnter={playHover}
            >
              {isNeu || isClay || isAnti || isHyper || isGrain || isLux ? item.label : `> ${item.label}`}
            </a>
          ))}
        </div>
      )}
      
      {/* Hyperminimal Desktop Fullscreen Menu */}
      {isHyper && isOpen && (
         <div className="hidden md:flex fixed inset-0 bg-white z-50 flex-col items-center justify-center gap-6">
            <button 
              className="absolute top-8 right-12 text-black hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CLOSE
            </button>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-4xl font-sans font-light text-black hover:text-gray-400 transition-colors tracking-tight"
                onClick={() => {
                  setIsOpen(false);
                  playClick();
                }}
              >
                {item.label.toLowerCase()}
              </a>
            ))}
         </div>
      )}
    </nav>
  );
};

export default Navbar;