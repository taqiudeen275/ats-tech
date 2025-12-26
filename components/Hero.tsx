import React from 'react';
import Typewriter from './Typewriter';
import { ArrowRight } from 'lucide-react';
import InteractiveBackground from './InteractiveBackground';
import { useSound } from '../hooks/useSound';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { playHover, playClick } = useSound();
  const { isNeu, isGlass, isRetro, isClay, isAnti, isHyper, isGrain, isLux } = useTheme();

  let sectionClass = "min-h-screen flex items-center justify-center relative pt-16 overflow-hidden transition-colors duration-300 ";
  if (isNeu) sectionClass += "bg-white bg-neu-pattern";
  else if (isGlass) sectionClass += "bg-transparent"; 
  else if (isClay) sectionClass += "bg-transparent";
  else if (isAnti) sectionClass += "bg-anti-yellow";
  else if (isHyper) sectionClass += "bg-hyper-gray";
  else if (isGrain) sectionClass += "bg-grain-beige";
  else if (isLux) sectionClass += "bg-lux-black";
  else sectionClass += "bg-dot-pattern border-b border-white/10";

  return (
    <section id="hero" className={sectionClass}>
      
      {(isRetro || isAnti || isHyper || isGrain || isLux) && <InteractiveBackground variant={isAnti ? 'antidesign' : isHyper ? 'hyperminimal' : isGrain ? 'grain' : isLux ? 'lux' : 'retro'} />}
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className={`space-y-8 ${isAnti ? 'bg-white border-4 border-black p-4 -rotate-1' : ''}`}>
          <div className={`inline-block font-mono mb-4 text-xs px-3 py-1
            ${isNeu 
              ? 'bg-neu-pink border-2 border-black text-black font-bold shadow-neu transform -rotate-2' 
              : isGlass
                ? 'bg-white/10 border border-white/20 text-white rounded-full backdrop-blur-md'
                : isClay
                  ? 'bg-clay-pink text-white font-bold rounded-full shadow-md clay-text-shadow'
                  : isAnti
                    ? 'bg-black text-white font-serif text-lg p-0 transform rotate-2'
                    : isHyper
                      ? 'hidden'
                      : isGrain
                        ? 'bg-transparent border border-grain-dark text-grain-dark font-courier'
                        : isLux
                          ? 'hidden'
                  : 'border border-ats-red/50 bg-ats-red/10 text-ats-red'}`}>
            {isGrain ? 'REPORT_STATUS:' : 'SYSTEM_STATUS:'} {isNeu ? 'CHAOS_MODE' : isGlass ? 'ETHEREAL' : isClay ? 'PLAYFUL' : isAnti ? 'BROKEN' : isGrain ? 'ARCHIVED' : 'ONLINE'}
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold font-mono leading-tight tracking-tight
             ${isNeu 
                ? 'text-black drop-shadow-[4px_4px_0_rgba(255,222,0,1)]' 
                : isClay
                   ? 'text-gray-800 drop-shadow-sm'
                   : isAnti
                     ? 'text-black font-serif italic tracking-tighter'
                     : isHyper
                       ? 'text-black font-sans font-light tracking-tighter text-6xl md:text-8xl'
                       : isGrain
                         ? 'text-grain-dark font-courier tracking-tighter'
                         : isLux
                           ? 'text-white font-outfit uppercase tracking-tight text-7xl md:text-9xl leading-[0.8]'
                   : 'text-white'}`}>
            {isHyper ? 'We build the' : 'WE BUILD THE'} <br />
            <span className={isNeu 
              ? 'bg-black text-white px-2' 
              : isGlass 
                ? 'text-transparent bg-clip-text linear-gradient-to-r from-cyan-300 to-purple-400'
                : isClay
                  ? 'text-clay-blue'
                  : isAnti
                    ? 'bg-blue-700 text-white px-4 transform skew-x-12 inline-block'
                    : isHyper
                      ? 'text-black font-normal'
                      : isGrain
                        ? 'text-grain-dark border-b-4 border-grain-dark'
                        : isLux
                          ? 'text-transparent bg-clip-text linear-gradient-to-r from-white via-white to-gray-500'
                  : 'text-transparent bg-clip-text linear-gradient-to-r from-white to-gray-500'}>
              {isHyper ? 'future.' : 'FUTURE'}
              <span className={isNeu ? 'text-neu-yellow' : isGlass ? 'text-purple-300' : isClay ? 'text-clay-teal' : isAnti ? 'text-red-600' : isHyper ? 'hidden' : isGrain ? 'text-grain-red' : isLux ? 'text-white' : 'text-ats-red animate-blink'}>{isLux ? '.' : '_'}</span>
            </span>
          </h1>

          <div className={`font-mono text-sm md:text-base space-y-2 
             ${isNeu 
               ? 'bg-neu-blue border-2 border-black p-4 shadow-neu text-black font-bold' 
               : isGlass
                 ? 'bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md shadow-glass text-white/90'
                 : isClay
                   ? 'clay-card p-6 text-gray-600 font-medium'
                   : isAnti
                     ? 'bg-transparent text-black font-serif text-xl'
                     : isHyper
                       ? 'font-sans text-gray-500 text-lg font-light pt-4 border-none pl-0'
                       : isGrain
                         ? 'font-courier text-gray-700 text-lg border-l-4 border-gray-400 pl-4 italic'
                         : isLux
                           ? 'font-outfit text-gray-400 text-xl font-light tracking-wide pt-4 border-none pl-0'
                   : 'text-gray-400 border-l-2 border-white/20 pl-4'}`}>
            <p className={isAnti ? 'bg-red-200 inline-block px-1' : ''}>{isAnti ? 'WARNING:' : isHyper || isLux ? '' : '>'} {isHyper || isLux ? 'Initializing systems.' : 'Initializing ATS Tech systems...'}</p>
            <p className={isAnti ? 'bg-green-200 inline-block px-1 transform rotate-1' : ''}>{isAnti ? 'ERROR:' : isHyper || isLux ? '' : '>'} {isHyper || isLux ? 'Loading solutions.' : 'Loading advanced solutions...'}</p>
            <p className={isAnti ? 'bg-blue-200 inline-block px-1' : ''}>{isAnti ? 'FATAL:' : isHyper || isLux ? '' : '>'} <Typewriter text={isHyper || isLux ? "Ready." : "Ready to transform your business infrastructure."} startDelay={1000} cursor={!isHyper && !isLux} /></p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#solutions" 
              className={`group relative inline-flex items-center justify-center px-8 py-3 font-mono font-bold transition-all duration-200 focus:outline-none
                ${isNeu 
                  ? 'bg-neu-yellow border-2 border-black text-black shadow-neu hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]' 
                  : isGlass
                    ? 'bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-lg backdrop-blur shadow-lg'
                    : isClay
                      ? 'bg-clay-blue text-white clay-button-colored rounded-[30px] hover:scale-105'
                      : isAnti
                        ? 'bg-white border-2 border-blue-700 text-blue-700 underline font-serif rounded-none hover:bg-blue-700 hover:text-white'
                        : isHyper
                          ? 'bg-black text-white font-sans font-normal text-sm px-10 rounded-full hover:bg-gray-800'
                          : isGrain
                            ? 'bg-grain-dark text-white font-courier border-2 border-transparent hover:bg-transparent hover:text-grain-dark hover:border-grain-dark'
                            : isLux
                              ? 'bg-white text-black font-outfit font-bold rounded-full px-8 hover:bg-gray-200'
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black hover:animate-glitch'}`}
              onMouseEnter={playHover}
              onClick={playClick}
            >
              <span className="mr-2">{isNeu ? 'EXPLORE SOLUTIONS' : isClay ? 'Explore Solutions' : isAnti ? 'CLICK ME NOW' : isHyper ? 'Explore' : isGrain ? 'View Files' : isLux ? 'EXPLORE' : '[EXECUTE: SOLUTIONS]'}</span>
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isHyper || isLux ? 'hidden' : ''}`} />
            </a>
            <a 
              href="#about"
              className={`inline-flex items-center justify-center px-8 py-3 font-mono transition-all duration-200
                ${isNeu 
                  ? 'bg-white border-2 border-black text-black shadow-neu hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]' 
                  : isGlass
                     ? 'hover:bg-white/10 text-white border border-transparent hover:border-white/20 rounded-lg'
                     : isClay
                       ? 'bg-white text-gray-600 clay-button rounded-[30px] hover:text-clay-blue'
                       : isAnti
                         ? 'text-black border-b-4 border-red-600 bg-transparent hover:bg-red-600 hover:text-white'
                         : isHyper
                           ? 'text-gray-500 font-sans font-normal text-sm hover:text-black'
                           : isGrain
                             ? 'text-grain-dark font-courier underline underline-offset-4 hover:no-underline'
                             : isLux
                               ? 'text-white font-outfit font-bold hover:text-gray-300'
                       : 'bg-transparent border border-white/20 text-gray-400 hover:border-white hover:text-white hover:animate-glitch'}`}
              onMouseEnter={playHover}
              onClick={playClick}
            >
              {isNeu ? 'READ ABOUT US' : isClay ? 'Read About Us' : isAnti ? 'IGNORE THIS' : isHyper ? 'About' : isGrain ? 'Read Dossier' : isLux ? 'ABOUT US' : '[READ: ABOUT]'}
            </a>
          </div>
        </div>

        {/* Visual Element */}
        <div className={`hidden md:flex items-center justify-center relative ${isHyper || isLux ? 'opacity-0' : ''}`}>
          <div className={`w-80 h-80 relative grid grid-cols-8 grid-rows-8 gap-1 p-2 transition-all
             ${isNeu 
               ? 'bg-white border-4 border-black shadow-neu rotate-3' 
               : isGlass
                 ? 'bg-white/5 border border-white/20 rounded-2xl backdrop-blur-sm shadow-glass animate-float rotate-0 gap-2'
                 : isClay
                   ? 'bg-white/30 rounded-[3rem] shadow-[inset_4px_4px_8px_rgba(255,255,255,0.5)] gap-3 p-4 animate-bounce-gentle'
                   : isAnti
                     ? 'bg-white border border-black p-0 gap-0 rotate-12 scale-110'
                     : isGrain
                       ? 'bg-[#F0EEE6] border border-gray-400 shadow-md rotate-1 p-4 gap-0'
                   : 'border-2 border-white/10 bg-black/50 backdrop-blur-sm'}`}>
             {/* Abstract Grid Art */}
             {Array.from({ length: 64 }).map((_, i) => (
               <div 
                key={i} 
                className={`
                  transition-all duration-500
                  ${isNeu 
                    ? `border border-black ${i % 3 === 0 ? 'bg-neu-yellow' : i % 5 === 0 ? 'bg-neu-pink' : 'bg-white'}` 
                    : isGlass
                      ? `rounded-full ${i % 7 === 0 ? 'bg-white/30' : 'bg-white/5'}`
                      : isClay
                        ? `rounded-full ${i % 7 === 0 ? 'bg-clay-blue shadow-[2px_2px_4px_rgba(0,0,0,0.1)]' : 'bg-white shadow-[inset_2px_2px_4px_rgba(163,177,198,0.3)]'}`
                        : isAnti
                          ? `border border-black ${i % 2 === 0 ? 'bg-white' : 'bg-black'}`
                          : isGrain
                            ? `border border-gray-300 ${i % 11 === 0 ? 'bg-grain-dark' : 'bg-transparent'}`
                        : `bg-white/5 hover:bg-ats-red/80 ${i % 9 === 0 ? 'bg-ats-red/20' : ''}`}
                  ${!isNeu && !isAnti && !isGrain && (i === 27 || i === 28 || i === 35 || i === 36) ? (isGlass ? 'bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : isClay ? 'bg-clay-pink shadow-md' : 'bg-white/80 animate-pulse') : ''}
                `} 
                onMouseEnter={playHover}
              />
             ))}
             {/* Decorative Corners for Retro */}
             {isRetro && (
               <>
                 <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-ats-red"></div>
                 <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-ats-red"></div>
               </>
             )}
          </div>
          
          {/* Floating Data Window */}
          <div className={`absolute -bottom-10 -left-10 font-mono text-xs w-64 transition-all
             ${isNeu 
               ? 'bg-neu-pink border-2 border-black p-4 shadow-neu text-black -rotate-2' 
               : isGlass
                 ? 'glass-card p-6 rounded-xl text-white backdrop-blur-xl animate-float'
                 : isClay
                   ? 'clay-card p-6 animate-float text-gray-600'
                   : isAnti
                     ? 'bg-white border-2 border-blue-700 p-2 text-black shadow-[10px_10px_0px_0px_rgba(0,0,255,1)] rotate-3'
                     : isGrain
                       ? 'bg-[#F8F7F4] border border-gray-400 p-4 shadow-lg text-grain-dark font-courier -rotate-1'
                   : 'bg-black border border-white/20 p-4 shadow-2xl'}`}>
             <div className={`flex justify-between pb-2 mb-2 ${isNeu ? 'border-b-2 border-black font-bold' : isGlass ? 'border-b border-white/20' : isClay ? 'border-b border-gray-200' : isAnti ? 'border-b border-blue-700' : isGrain ? 'border-b border-gray-300' : 'border-b border-white/10'}`}>
               <span>{isNeu ? 'STATS_DUMP' : isClay ? 'Systems' : isAnti ? 'ALERT' : isGrain ? 'METRICS_LOG' : 'SYS_MONITOR'}</span>
               <div className="flex gap-1">
                 <div className={`w-2 h-2 rounded-full ${isNeu ? 'bg-black' : isGlass ? 'bg-red-400' : isClay ? 'bg-clay-pink' : isAnti ? 'bg-red-600 rounded-none' : isGrain ? 'bg-gray-400' : 'bg-ats-red'}`}></div>
                 <div className={`w-2 h-2 rounded-full ${isNeu ? 'bg-black' : isGlass ? 'bg-yellow-400' : isClay ? 'bg-yellow-300' : isAnti ? 'bg-red-600 rounded-none' : isGrain ? 'bg-gray-400' : 'bg-yellow-500'}`}></div>
                 <div className={`w-2 h-2 rounded-full ${isNeu ? 'bg-black' : isGlass ? 'bg-green-400' : isClay ? 'bg-clay-teal' : isAnti ? 'bg-red-600 rounded-none' : isGrain ? 'bg-gray-400' : 'bg-green-500'}`}></div>
               </div>
             </div>
             <div className="space-y-1">
               <div className="flex justify-between"><span>CPU</span><span className={isNeu ? 'font-bold' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-blue font-bold' : isAnti ? 'text-red-600 blink' : 'text-white'}>{isAnti ? 'OVERLOAD' : '12%'}</span></div>
               <div className="flex justify-between"><span>RAM</span><span className={isNeu ? 'font-bold' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-blue font-bold' : isAnti ? 'text-red-600 blink' : 'text-white'}>{isAnti ? 'LEAKING' : '4.2GB'}</span></div>
               <div className="flex justify-between"><span>NET</span><span className={isNeu ? 'font-bold' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-teal font-bold' : isAnti ? 'text-red-600 line-through' : 'text-green-500'}>CONNECTED</span></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;