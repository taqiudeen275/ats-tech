import React from 'react';
import { ProcessStep } from '../types';
import InteractiveBackground from './InteractiveBackground';
import { useSound } from '../hooks/useSound';
import { useTheme } from '../context/ThemeContext';

const steps: ProcessStep[] = [
  { id: 1, title: 'DISCOVERY', status: 'COMPLETE', description: 'Analyzing requirements and system mapping.' },
  { id: 2, title: 'ARCHITECTURE', status: 'COMPLETE', description: 'Designing scalable blueprints and database schemas.' },
  { id: 3, title: 'DEVELOPMENT', status: 'IN_PROGRESS', description: 'Writing clean, efficient, and documented code.' },
  { id: 4, title: 'TESTING', status: 'PENDING', description: 'Rigorous QA automation and stress testing.' },
  { id: 5, title: 'DEPLOYMENT', status: 'PENDING', description: 'Seamless CI/CD rollout to production environments.' },
  { id: 6, title: 'MAINTENANCE', status: 'PENDING', description: '24/7 monitoring and active patch management.' },
];

const Process: React.FC = () => {
  const { playHover } = useSound();
  const { isNeu, isGlass, isRetro, isClay, isAnti, isHyper, isGrain, isLux } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden transition-colors ${isNeu ? 'bg-white' : isGlass || isClay ? 'bg-transparent' : isAnti ? 'bg-anti-yellow' : isHyper ? 'bg-hyper-gray' : isGrain ? 'bg-grain-beige' : isLux ? 'bg-lux-black' : 'bg-ats-dark border-t border-white/10'}`}>
      {isRetro && <InteractiveBackground />}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className={`text-4xl font-mono font-bold mb-16 text-center ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-black font-serif uppercase tracking-widest' : isHyper ? 'font-sans text-black font-light' : isGrain ? 'text-grain-dark font-courier' : isLux ? 'font-outfit text-white uppercase text-5xl tracking-tight' : 'text-white'}`}>
          <span className={isNeu ? 'text-black' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-blue' : isAnti ? 'bg-black text-white' : isHyper || isLux ? 'hidden' : isGrain ? 'text-grain-red' : 'text-ats-red'}>./</span> {isHyper ? 'Process' : isGrain ? 'Work_Log' : isLux ? 'OUR PROCESS' : 'EXECUTION_LOG'}
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 md:translate-x-0 ${isNeu ? 'bg-black w-1' : isGlass ? 'bg-white/20' : isClay ? 'bg-gray-300 w-2 rounded-full' : isAnti ? 'bg-black w-2' : isHyper ? 'bg-gray-200' : isGrain ? 'bg-gray-400 border-l border-dashed border-gray-600 w-0' : isLux ? 'bg-white/5' : 'bg-white/20'}`}></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Connector Dot */}
                <div className={`absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full -translate-x-[calc(50%+0.5px)] translate-y-1/2 z-10 flex items-center justify-center
                   ${isNeu 
                     ? 'bg-black border-2 border-white w-6 h-6' 
                     : isGlass
                       ? 'bg-white/50 backdrop-blur border border-white/40 shadow-glass'
                       : isClay
                         ? 'bg-clay-blue w-6 h-6 border-4 border-white shadow-md'
                         : isAnti
                           ? 'bg-white w-8 h-8 border-4 border-black rounded-none'
                           : isHyper
                             ? 'bg-white w-3 h-3 ring-4 ring-hyper-gray'
                             : isGrain
                               ? 'bg-grain-dark w-2 h-2 rounded-full outline outline-4 outline-grain-beige'
                               : isLux
                                 ? 'bg-black border border-white/50 w-3 h-3'
                       : 'bg-black border-2 border-white'}`}>
                   <div className={`rounded-full ${isNeu ? 'bg-neu-yellow w-2 h-2' : isGlass ? 'bg-white w-2 h-2' : isClay ? 'hidden' : isAnti ? 'hidden' : isHyper ? 'hidden' : isGrain ? 'hidden' : isLux ? 'hidden' : `w-1.5 h-1.5 ${index < 3 ? 'bg-ats-red' : 'bg-gray-700'}`}`}></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0">
                  <div 
                    className={`p-6 transition-all group relative
                      ${isNeu 
                        ? 'bg-neu-yellow border-4 border-black shadow-neu hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none' 
                        : isGlass
                          ? 'glass-card rounded-xl hover:bg-white/20'
                          : isClay
                            ? 'clay-card border-none hover:scale-[1.02]'
                            : isAnti
                              ? 'bg-white border-2 border-black hover:bg-black hover:text-white'
                              : isHyper
                                ? 'bg-transparent p-0'
                                : isGrain
                                  ? 'bg-[#F5F2EA] border border-gray-300 shadow-sm'
                                  : isLux
                                    ? 'bg-[#0a0a0a] border border-white/5 p-8 hover:bg-[#111]'
                          : 'bg-black/90 backdrop-blur-sm border border-white/10 hover:border-ats-red'}`}
                    onMouseEnter={playHover}
                  >
                     {/* Step Number Badge */}
                     <div className={`absolute -top-3 right-4 font-mono px-2 py-0.5 border transition-colors
                        ${isNeu 
                           ? 'bg-black text-white border-black font-bold' 
                           : isGlass
                             ? 'bg-white/10 backdrop-blur border-white/20 text-white rounded-full'
                             : isClay
                               ? 'bg-clay-pink text-white border-transparent font-bold rounded-xl shadow-md'
                               : isAnti
                                 ? 'bg-blue-700 text-white rounded-none border-0'
                                 : isHyper
                                   ? 'hidden'
                                   : isGrain
                                     ? 'bg-grain-dark text-white font-courier text-xs'
                                     : isLux
                                       ? 'text-white/20 font-outfit text-4xl top-4 right-4 border-none bg-transparent'
                             : 'bg-ats-gray text-xs border-white/20 group-hover:border-ats-red group-hover:text-ats-red'}`}>
                        {isLux ? `0${step.id}` : `[${step.id.toString().padStart(2, '0')}]`}
                     </div>

                     <h3 className={`text-xl font-bold font-mono mb-2 transition-colors ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'font-serif' : isHyper ? 'font-sans text-black font-normal' : isGrain ? 'font-courier text-grain-dark' : isLux ? 'font-outfit text-white text-2xl' : 'text-white group-hover:text-ats-red'}`}>{isHyper ? step.title.toLowerCase() : step.title}</h3>
                     <p className={`font-mono text-sm mb-3 ${isNeu ? 'text-black font-medium' : isGlass ? 'text-white/80' : isClay ? 'text-gray-600' : isAnti ? 'font-serif' : isHyper ? 'font-sans text-gray-400 font-light' : isGrain ? 'font-courier text-gray-600' : isLux ? 'font-outfit text-gray-400' : 'text-gray-400'}`}>{step.description}</p>
                     
                     <div className="flex items-center gap-2 font-mono text-xs">
                        <span className={isNeu ? 'text-black font-bold' : isGlass ? 'text-white/70' : isClay ? 'text-gray-500 font-bold' : isAnti ? 'font-serif font-black' : isHyper || isLux ? 'hidden' : 'text-gray-600'}>STATUS:</span>
                        <span className={`${
                           isNeu ? 'text-black bg-white px-1 border border-black' :
                           isGlass ? 'text-white px-2 py-0.5 rounded-full bg-white/10' :
                           isClay ? 'text-white px-3 py-1 rounded-full ' + (index < 2 ? 'bg-green-400' : index === 2 ? 'bg-yellow-400' : 'bg-gray-300') :
                           isAnti ? 'bg-black text-white px-1' :
                           isHyper || isLux ? 'hidden' :
                           isGrain ? 'text-grain-dark underline decoration-dotted' :
                           index < 2 ? 'text-green-500' : 
                           index === 2 ? 'text-yellow-500 animate-pulse' : 'text-gray-600'
                        }`}>
                           {index < 2 ? 'DONE' : index === 2 ? 'PROCESSING...' : 'WAITING'}
                        </span>
                     </div>
                  </div>
                </div>
                
                {/* Empty Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;