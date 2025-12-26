import React from 'react';
import { Github, Twitter, Linkedin, Terminal } from 'lucide-react';
import { useSound } from '../hooks/useSound';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { playHover, playClick } = useSound();
  const { isNeu, isGlass, isRetro, isClay, isAnti, isHyper, isGrain, isLux } = useTheme();

  return (
    <footer className={`pt-16 pb-8 font-mono transition-colors 
      ${isNeu 
        ? 'bg-white text-black border-t-4 border-black' 
        : isGlass
          ? 'bg-transparent border-t border-white/10 text-white'
          : isClay
            ? 'bg-transparent text-gray-600'
            : isAnti
              ? 'bg-anti-yellow text-black border-t-8 border-black border-dotted'
              : isHyper
                ? 'bg-white text-gray-400 font-sans'
                : isGrain
                  ? 'bg-transparent text-grain-dark border-t border-gray-400'
                  : isLux
                    ? 'bg-lux-black text-white border-t border-white/10 font-outfit'
          : 'bg-black border-t border-white/20 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 ${isHyper ? 'hidden' : ''}`}>
          
          <div className="col-span-1 md:col-span-2">
            <div 
              className="flex items-center gap-2 mb-4 group cursor-pointer"
              onMouseEnter={playHover}
              onClick={playClick}
            >
              {!isLux && <Terminal className={`w-8 h-8 group-hover:animate-glitch ${isNeu ? 'text-black' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-blue' : isAnti ? 'text-black w-24 h-24 absolute opacity-10' : isGrain ? 'text-grain-dark' : 'text-ats-red'}`} />}
              <span className={`text-2xl font-bold group-hover:animate-glitch ${isAnti ? 'font-serif text-5xl italic' : isGrain ? 'font-courier' : isLux ? 'text-3xl tracking-tight' : ''}`}>ATS_TECH</span>
            </div>
            <p className={`text-sm max-w-sm mb-6 ${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/70' : isClay ? 'text-gray-500' : isAnti ? 'font-serif text-lg leading-tight' : isGrain ? 'font-courier text-gray-600' : isLux ? 'text-gray-400 font-light' : 'text-gray-500'}`}>
              Building the digital infrastructure of tomorrow with code, precision, and zero compromise.
            </p>
            <div className={`flex gap-4 ${isAnti ? 'flex-col space-y-2' : ''}`}>
               {[Twitter, Github, Linkedin].map((Icon, i) => (
                 <a 
                   key={i} 
                   href="#" 
                   onMouseEnter={playHover} 
                   onClick={playClick} 
                   className={`w-10 h-10 flex items-center justify-center transition-colors hover:animate-glitch
                     ${isNeu 
                       ? 'border-2 border-black bg-neu-yellow hover:bg-black hover:text-white shadow-sm' 
                       : isGlass
                         ? 'glass-card rounded-full hover:bg-white/20 text-white'
                         : isClay
                           ? 'bg-white text-clay-blue clay-button rounded-full hover:bg-clay-blue hover:text-white'
                           : isAnti
                             ? 'w-full h-auto bg-white border border-black text-blue-800 p-2'
                             : isGrain
                               ? 'text-grain-dark border border-grain-dark rounded-full hover:bg-grain-dark hover:text-white'
                               : isLux
                                 ? 'text-white hover:text-gray-400'
                       : 'border border-white/20 hover:bg-white hover:text-black'}`}
                 >
                   <Icon size={18} />
                   {isAnti && <span className="ml-2 font-serif">LINK_{i}</span>}
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className={`font-bold mb-4 uppercase text-sm tracking-wider ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'bg-black text-white inline-block p-1' : isGrain ? 'text-grain-dark font-courier' : isLux ? 'text-gray-500' : 'text-white'}`}>[SITEMAP]</h4>
            <ul className={`space-y-2 text-sm ${isNeu ? 'text-black font-medium' : isGlass ? 'text-white/70' : isClay ? 'text-gray-500' : isAnti ? 'space-y-0' : isGrain ? 'font-courier text-gray-600' : isLux ? 'font-outfit' : 'text-gray-500'}`}>
              {['Home', 'Services', 'Solutions', 'About'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onMouseEnter={playHover} onClick={playClick} className={`inline-block transition-colors hover:animate-glitch ${isNeu ? 'hover:bg-black hover:text-white px-1' : isGlass ? 'hover:text-cyan-300' : isClay ? 'hover:text-clay-blue' : isAnti ? 'text-blue-700 underline font-serif text-lg' : isGrain ? 'hover:text-grain-red decoration-dotted underline' : isLux ? 'text-white hover:text-gray-400' : 'hover:text-ats-red'}`}>
                    {isLux ? item : `> ${item}`}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-4 uppercase text-sm tracking-wider ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'bg-black text-white inline-block p-1' : isGrain ? 'text-grain-dark font-courier' : isLux ? 'text-gray-500' : 'text-white'}`}>[LEGAL]</h4>
            <ul className={`space-y-2 text-sm ${isNeu ? 'text-black font-medium' : isGlass ? 'text-white/70' : isClay ? 'text-gray-500' : isAnti ? 'space-y-0' : isGrain ? 'font-courier text-gray-600' : isLux ? 'font-outfit' : 'text-gray-500'}`}>
              {['Privacy_Policy', 'Terms_of_Use', 'SLA'].map((item) => (
                <li key={item}>
                  <a href="#" onMouseEnter={playHover} onClick={playClick} className={`inline-block transition-colors hover:animate-glitch ${isNeu ? 'hover:bg-black hover:text-white px-1' : isGlass ? 'hover:text-cyan-300' : isClay ? 'hover:text-clay-blue' : isAnti ? 'text-blue-700 underline font-serif text-lg' : isGrain ? 'hover:text-grain-red decoration-dotted underline' : isLux ? 'text-white hover:text-gray-400' : 'hover:text-ats-red'}`}>
                    {isLux ? item.replace(/_/g, ' ') : `> ${item}`}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className={`pt-8 flex flex-col md:flex-row justify-between items-center text-xs 
          ${isNeu 
            ? 'border-t-2 border-black text-black font-bold' 
            : isGlass
              ? 'border-t border-white/10 text-white/50'
              : isClay
                ? 'border-t border-gray-300 text-gray-500 font-bold'
                : isAnti
                  ? 'border-t-4 border-double border-black w-full text-black font-serif text-lg'
                  : isHyper
                    ? 'border-none w-full justify-center text-gray-300 tracking-wide'
                    : isGrain
                      ? 'border-t border-gray-300 text-gray-500 font-courier'
                      : isLux
                        ? 'border-t border-white/10 text-gray-600'
              : 'border-t border-white/10 text-gray-600'}`}>
          <div>
            {isHyper || isLux ? '© ATS Tech' : `© ${new Date().getFullYear()} ATS TECH // ALL SYSTEMS OPERATIONAL`}
          </div>
          <div className={`mt-4 md:mt-0 ${isHyper || isLux ? 'hidden' : ''}`}>
            LOCATION: 37.7749° N, 122.4194° W
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;