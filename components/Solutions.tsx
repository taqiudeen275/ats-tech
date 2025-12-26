import React, { useState } from 'react';
import { Solution } from '../types';
import { useSound } from '../hooks/useSound';
import { useTheme } from '../context/ThemeContext';

const solutions: Solution[] = [
  {
    id: 'sol-01',
    name: 'CORE_OS.exe',
    version: 'v4.2.0',
    description: 'A centralized operating dashboard for enterprise resource management.',
    specs: ['React Based', 'Real-time Sync', 'Encrypted DB'],
    image: 'https://picsum.photos/600/400?grayscale&blur=2'
  },
  {
    id: 'sol-02',
    name: 'NEURAL_NET.dat',
    version: 'v1.0.9',
    description: 'AI-driven predictive analytics engine tailored for financial markets.',
    specs: ['TensorFlow', 'Python API', 'Low Latency'],
    image: 'https://picsum.photos/600/401?grayscale&blur=2'
  },
  {
    id: 'sol-03',
    name: 'SECURE_GATE.bin',
    version: 'v9.9.1',
    description: 'Zero-trust authentication gateway for remote workforce access.',
    specs: ['OAuth2', 'Biometric', 'Audit Logs'],
    image: 'https://picsum.photos/600/402?grayscale&blur=2'
  }
];

const Solutions: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState<Solution>(solutions[0]);
  const { playHover, playClick } = useSound();
  const { isNeu, isGlass, isRetro, isClay, isAnti, isHyper, isGrain, isLux } = useTheme();

  return (
    <section id="solutions" className={`py-24 border-y transition-colors duration-300
      ${isNeu 
        ? 'bg-neu-pink border-black' 
        : isGlass
          ? 'bg-transparent border-white/10'
          : isClay
            ? 'bg-transparent border-transparent'
            : isAnti
              ? 'bg-blue-800 border-none'
              : isHyper
                ? 'bg-white border-none'
                : isGrain
                  ? 'bg-transparent border-gray-300'
                  : isLux
                    ? 'bg-lux-black border-none'
            : 'border-white/10 bg-ats-dark bg-dot-pattern'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar / File List */}
          <div className="w-full md:w-1/3">
            <h2 className={`text-3xl font-mono font-bold mb-8 flex items-center ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-white font-serif bg-black p-2' : isHyper ? 'text-black font-sans font-light' : isGrain ? 'text-grain-dark font-courier' : isLux ? 'text-white font-outfit uppercase tracking-tighter text-5xl' : 'text-white'}`}>
              <span className={`mr-2 block ${isNeu ? 'bg-black w-6 h-6' : isGlass ? 'bg-white/50 w-4 h-4 rounded-full' : isClay ? 'bg-clay-blue w-6 h-6 rounded-full clay-button' : isAnti ? 'bg-white w-4 h-4 rounded-none' : isHyper ? 'hidden' : isGrain ? 'bg-grain-dark w-2 h-2 rounded-full' : isLux ? 'hidden' : 'animate-pulse bg-ats-red w-3 h-3'}`}></span> 
              {isHyper ? 'Solutions' : isGrain ? 'File_Directory' : isLux ? 'Projects' : '/bin/solutions'}
            </h2>
            
            <div className={`flex flex-col space-y-2 ${isAnti ? 'space-y-0' : isHyper ? 'gap-4 space-y-0' : ''}`}>
              {solutions.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => {
                    setActiveSolution(sol);
                    playClick();
                  }}
                  onMouseEnter={playHover}
                  className={`
                    w-full text-left font-mono px-4 py-3 transition-all duration-200 flex justify-between items-center group hover:animate-glitch
                    ${isNeu
                      ? activeSolution.id === sol.id
                        ? 'bg-black text-white border-2 border-black shadow-neu hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
                        : 'bg-white text-black border-2 border-black shadow-sm hover:bg-neu-yellow'
                      : isGlass
                        ? activeSolution.id === sol.id
                          ? 'glass-card border-l-4 border-l-cyan-400 bg-white/20'
                          : 'bg-transparent hover:bg-white/10 rounded-lg'
                        : isClay
                          ? activeSolution.id === sol.id
                            ? 'bg-white text-clay-blue clay-card border-l-[6px] border-l-clay-blue translate-x-2'
                            : 'bg-transparent text-gray-500 hover:bg-white/50 hover:text-gray-700 rounded-xl'
                          : isAnti
                             ? activeSolution.id === sol.id
                               ? 'bg-yellow-300 text-black border-4 border-black font-serif translate-x-4 skew-y-2'
                               : 'bg-white text-blue-700 border border-blue-700 font-serif underline'
                             : isHyper
                               ? activeSolution.id === sol.id
                                 ? 'bg-transparent text-black font-sans font-semibold border-l-2 border-black pl-4'
                                 : 'bg-transparent text-gray-400 font-sans font-light hover:text-black pl-0'
                               : isGrain
                                 ? activeSolution.id === sol.id
                                   ? 'bg-white border border-gray-400 shadow-sm text-grain-dark font-courier -translate-x-1'
                                   : 'text-gray-500 font-courier hover:text-grain-dark'
                                 : isLux
                                   ? activeSolution.id === sol.id
                                     ? 'bg-white text-black font-outfit font-bold text-xl pl-6'
                                     : 'text-gray-500 font-outfit text-xl hover:text-white pl-0'
                          : activeSolution.id === sol.id 
                            ? 'bg-ats-red text-white border border-ats-red' 
                            : 'bg-transparent border border-white/20 text-gray-400 hover:border-white hover:text-white'
                    }
                  `}
                >
                  <span className={isNeu ? 'font-bold' : ''}>{isHyper ? sol.name.split('.')[0].toLowerCase() : sol.name}</span>
                  <span className={`text-xs ${isNeu ? 'text-black font-bold' : activeSolution.id === sol.id ? (isClay ? 'text-clay-blue font-bold' : isAnti ? 'text-black' : isHyper ? 'hidden' : isGrain ? 'text-gray-400' : isLux ? 'text-black' : 'text-white') : 'text-gray-600 group-hover:text-gray-400'}`}>
                    {sol.version}
                  </span>
                </button>
              ))}
            </div>
            
            <div className={`mt-8 p-4 text-xs font-mono 
               ${isNeu 
                 ? 'bg-white border-2 border-black text-black shadow-neu' 
                 : isGlass
                   ? 'bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm text-white/70'
                   : isClay
                     ? 'clay-input text-gray-500'
                     : isAnti
                       ? 'bg-black text-white font-serif p-0 text-lg'
                       : isHyper || isLux
                         ? 'hidden'
                         : isGrain
                           ? 'border-t border-b border-gray-400 py-4 text-gray-600 font-courier'
                     : 'border border-white/10 bg-black/50 text-gray-500'}`}>
              <p>TOTAL_FILES: {solutions.length}</p>
              <p>DISK_USAGE: 402MB</p>
              <p>PERMISSION: READ_ONLY</p>
            </div>
          </div>

          {/* Main Content / File Viewer */}
          <div className={`w-full md:w-2/3 p-1 relative min-h-[500px] transition-colors
             ${isNeu 
               ? 'bg-white border-4 border-black shadow-neu' 
               : isGlass
                 ? 'glass-panel rounded-2xl'
                 : isClay
                   ? 'clay-card border-none'
                   : isAnti
                     ? 'bg-white border-8 border-double border-red-600'
                     : isHyper
                       ? 'bg-transparent border-none'
                       : isGrain
                         ? 'bg-[#F8F7F4] border border-gray-300 shadow-md rotate-1'
                         : isLux
                           ? 'bg-transparent border-none'
                   : 'border border-white/20 bg-black'}`}>
            
            {/* Window Controls */}
            <div className={`p-2 flex justify-between items-center mb-1
               ${isNeu 
                 ? 'bg-neu-yellow border-b-4 border-black' 
                 : isGlass
                   ? 'bg-white/5 border-b border-white/10 rounded-t-xl'
                   : isClay
                     ? 'bg-transparent px-6 pt-4'
                     : isAnti
                       ? 'bg-red-600 border-b-4 border-black'
                       : isHyper || isLux
                         ? 'hidden'
                         : isGrain
                           ? 'border-b border-gray-300 bg-[#EFECE5] px-4'
                     : 'bg-white/10'}`}>
               <span className={`text-xs font-mono px-2 ${isNeu ? 'text-black font-bold' : isClay ? 'text-gray-400' : isAnti ? 'text-white font-serif uppercase' : isGrain ? 'font-courier text-gray-500' : ''}`}>VIEWER: {activeSolution.name}</span>
               <div className="flex gap-1">
                 {isNeu ? (
                    <div className="w-4 h-4 bg-black border border-white"></div>
                 ) : isGlass ? (
                    <>
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </>
                 ) : isClay ? (
                    <>
                      <div className="w-4 h-4 rounded-full bg-clay-pink shadow-inner"></div>
                      <div className="w-4 h-4 rounded-full bg-yellow-300 shadow-inner"></div>
                      <div className="w-4 h-4 rounded-full bg-clay-teal shadow-inner"></div>
                    </>
                 ) : isAnti ? (
                    <div className="w-6 h-6 bg-white border-2 border-black text-black flex items-center justify-center font-bold">X</div>
                 ) : isGrain ? (
                    <div className="text-gray-400 font-courier text-xs">[x]</div>
                 ) : (
                    <>
                      <div className="w-3 h-3 border border-white/50"></div>
                      <div className="w-3 h-3 border border-white/50 relative">
                          <div className="absolute top-0.5 left-0.5 right-0.5 h-px bg-white/50"></div>
                      </div>
                      <div 
                        className="w-3 h-3 border border-white/50 relative group cursor-pointer hover:bg-ats-red"
                        onMouseEnter={playHover}
                      >
                          <div className="absolute inset-0 flex items-center justify-center text-[8px] leading-none">x</div>
                      </div>
                    </>
                 )}
               </div>
            </div>

            <div className={`${isHyper || isLux ? 'p-0' : 'p-6 md:p-8'} h-full flex flex-col relative overflow-hidden`}>
               {/* Background Grid */}
               <div className={`absolute inset-0 bg-size-[40px_40px] pointer-events-none opacity-20
                  ${isNeu 
                    ? 'bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)]' 
                    : isClay
                      ? 'bg-[radial-gradient(#6C5CE7_1px,transparent_1px)] opacity-10 bg-size-[20px_20px]'
                      : isAnti || isHyper || isGrain || isLux
                        ? 'hidden'
                      : 'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]'}`}></div>
               
               <div className="relative z-10 flex-1">
                  <div className="flex flex-col md:flex-row gap-8 mb-8">
                     <div className="w-full md:w-1/2 relative group">
                        <img 
                          src={activeSolution.image} 
                          alt={activeSolution.name}
                          className={`w-full h-auto transition-all duration-500
                            ${isNeu 
                              ? 'border-4 border-black shadow-neu grayscale-0' 
                              : isGlass
                                ? 'rounded-lg border border-white/20 shadow-lg'
                                : isClay
                                  ? 'rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),8px_8px_16px_rgba(163,177,198,0.4)]'
                                  : isAnti
                                    ? 'border-0 filter sepia contrast-200'
                                    : isHyper
                                      ? 'grayscale contrast-125'
                                      : isGrain
                                        ? 'sepia-[0.3] contrast-[0.9] brightness-110 border-4 border-white shadow-md rotate-1'
                                        : isLux
                                          ? 'rounded-sm brightness-75 hover:brightness-100'
                                : 'border border-white/20 filter grayscale contrast-125 group-hover:grayscale-0'}`}
                        />
                        {/* Corner Accents (Retro) */}
                        {isRetro && (
                          <>
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></div>
                          </>
                        )}
                     </div>
                     
                     <div className="w-full md:w-1/2">
                        <h3 className={`text-2xl font-bold font-mono mb-4 ${isNeu ? 'text-black uppercase' : isClay ? 'text-gray-800' : isAnti ? 'text-black font-serif underline decoration-blue-700' : isHyper ? 'font-sans text-black font-light text-4xl' : isGrain ? 'font-courier text-grain-dark' : isLux ? 'font-outfit text-white text-5xl uppercase' : 'text-white'}`}>
                          {isHyper ? activeSolution.name.split('.')[0].toLowerCase() : activeSolution.name}
                        </h3>
                        <p className={`font-mono mb-6 text-sm ${isNeu ? 'text-black font-medium' : isGlass ? 'text-white/80' : isClay ? 'text-gray-600' : isAnti ? 'text-black font-serif text-lg leading-none' : isHyper ? 'font-sans text-gray-500 font-light' : isGrain ? 'font-courier text-gray-600' : isLux ? 'font-outfit text-gray-400 text-lg font-light' : 'text-gray-400'}`}>
                          {activeSolution.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className={`text-xs font-bold mb-2 tracking-widest ${isNeu ? 'text-black bg-neu-yellow inline-block px-1' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-blue' : isAnti ? 'text-black bg-yellow-300 inline-block border border-black p-1' : isHyper ? 'hidden' : isGrain ? 'text-grain-dark font-courier uppercase' : isLux ? 'hidden' : 'text-ats-red'}`}>
                            SPECIFICATIONS:
                          </h4>
                          <ul className={`space-y-1 ${isAnti ? 'list-disc pl-4' : ''}`}>
                            {activeSolution.specs.map((spec, i) => (
                              <li key={i} className={`text-sm font-mono flex items-center ${isNeu ? 'text-black' : isGlass ? 'text-white/90' : isClay ? 'text-gray-600' : isAnti ? 'text-blue-900 font-serif' : isHyper ? 'font-sans text-gray-400 font-light' : isGrain ? 'font-courier text-gray-600' : isLux ? 'font-outfit text-white' : 'text-gray-300'}`}>
                                <span className={`mr-2 ${isNeu ? 'text-black font-bold' : isGlass ? 'text-cyan-400' : isClay ? 'text-clay-teal font-bold' : isAnti || isHyper ? 'hidden' : isGrain ? 'text-grain-dark' : isLux ? 'text-white' : 'text-ats-red'}`}>{isLux ? '+' : '>'}</span> {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                     </div>
                  </div>
                  
                  <div className={`mt-auto pt-6 flex justify-end 
                    ${isNeu 
                      ? 'border-t-4 border-black' 
                      : isGlass
                        ? 'border-t border-white/10'
                        : isClay
                          ? 'border-none'
                          : isAnti
                            ? 'border-t-2 border-black border-dashed'
                            : isHyper || isLux
                              ? 'border-none'
                              : isGrain
                                ? 'border-t border-gray-300'
                        : 'border-t border-dashed border-white/20'}`}>
                     <button 
                       className={`font-mono font-bold py-2 px-6 transition-colors hover:animate-glitch
                          ${isNeu 
                            ? 'bg-black text-white hover:bg-white hover:text-black border-2 border-black shadow-neu' 
                            : isGlass
                              ? 'bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-lg shadow-lg backdrop-blur'
                              : isClay
                                ? 'bg-clay-blue text-white clay-button-colored rounded-2xl hover:bg-clay-blue/90'
                                : isAnti
                                  ? 'bg-blue-700 text-white hover:bg-red-600 rounded-none border-2 border-white  outline-2 outline-black'
                                  : isHyper
                                    ? 'bg-black text-white font-sans rounded-full font-normal hover:bg-gray-700 text-sm px-8'
                                    : isGrain
                                      ? 'bg-transparent border border-grain-dark text-grain-dark font-courier hover:bg-grain-dark hover:text-white'
                                      : isLux
                                        ? 'bg-white text-black font-outfit font-bold text-sm px-8 py-3 rounded-full hover:bg-gray-200'
                              : 'bg-white text-black hover:bg-ats-red hover:text-white'}`}
                       onMouseEnter={playHover}
                       onClick={playClick}
                     >
                        {isHyper ? 'Demo' : isLux ? 'VIEW PROJECT' : '[INITIATE_DEMO]'}
                     </button>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;