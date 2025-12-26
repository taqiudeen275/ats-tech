import React from 'react';
import { Testimonial } from '../types';
import InteractiveBackground from './InteractiveBackground';
import { useSound } from '../hooks/useSound';
import { useTheme } from '../context/ThemeContext';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'SARAH_CONNOR',
    company: 'CYBERDYNE',
    quote: 'ATS Tech re-engineered our entire neural net architecture. Efficiency increased by 400%.',
    project: 'AI_OPTIMIZATION',
    rating: 5
  },
  {
    id: 2,
    name: 'KEVIN_FLYNN',
    company: 'ENCOM_INT',
    quote: 'The most robust grid infrastructure we have ever deployed. Truly next level.',
    project: 'GRID_EXPANSION',
    rating: 5
  },
  {
    id: 3,
    name: 'GORDON_FREEMAN',
    company: 'BLACK_MESA',
    quote: 'Critical system failures are a thing of the past. Their support protocol is instantaneous.',
    project: 'LAB_SECURITY',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const { playHover } = useSound();
  const { isNeu, isGlass, isRetro, isClay, isAnti, isHyper, isGrain, isLux } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden transition-colors ${isNeu ? 'bg-neu-yellow' : isGlass || isClay ? 'bg-transparent' : isAnti ? 'bg-blue-700' : isHyper ? 'bg-white' : isGrain ? 'bg-transparent' : isLux ? 'bg-lux-black' : 'bg-black border-t border-white/10'}`}>
      {isRetro && <InteractiveBackground />}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className={`text-3xl font-mono font-bold mb-12 text-center ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-white font-serif uppercase animate-pulse' : isHyper ? 'font-sans text-black font-light' : isGrain ? 'font-courier text-grain-dark' : isLux ? 'font-outfit text-white uppercase text-5xl font-bold' : 'text-white'}`}>
          <span className={`${isNeu ? 'bg-black text-white px-2 mr-2' : isGlass ? 'bg-white/10 px-3 py-1 rounded-full mr-2' : isClay ? 'bg-clay-blue text-white px-4 py-1 rounded-full mr-2 shadow-inner' : isAnti ? 'bg-white text-blue-700 px-2' : isHyper ? 'hidden' : isGrain ? 'bg-grain-dark text-white px-2 mr-2 font-normal' : isLux ? 'hidden' : 'bg-white text-black px-2 mr-2'}`}>USER_LOGS</span> 
          {isHyper ? 'Feedback' : isLux ? 'TESTIMONIALS' : 'RECENT_FEEDBACK'}
        </h2>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isAnti ? 'gap-0' : isHyper ? 'gap-12' : ''}`}>
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className={`font-mono text-sm py-2 transition-all duration-300
                ${isNeu 
                   ? 'bg-white border-4 border-black p-4 shadow-neu hover:rotate-1' 
                   : isGlass
                     ? 'glass-card p-6 rounded-2xl hover:bg-white/20'
                     : isClay
                       ? 'clay-card p-6 text-gray-700 hover:scale-105'
                       : isAnti
                         ? 'bg-white text-black border-2 border-black p-4 m-2 transform rotate-1 hover:-rotate-1'
                         : isHyper
                           ? 'font-sans text-center'
                           : isGrain
                             ? 'bg-[#F8F7F4] p-6 border border-gray-300 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] -rotate-1 hover:rotate-0'
                             : isLux
                               ? 'bg-[#0f0f0f] p-8 border-l border-white/20 hover:border-white/50 hover:bg-[#111]'
                     : 'border-l-2 border-gray-800 pl-4 hover:border-ats-red bg-black/50 backdrop-blur-sm'}`}
              onMouseEnter={playHover}
            >
              <div className={`${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/50' : isClay ? 'text-gray-400 font-bold' : isAnti ? 'text-blue-700 font-serif' : isHyper ? 'hidden' : isGrain ? 'font-courier text-gray-400' : isLux ? 'hidden' : 'text-gray-500'} mb-2`}>
                [{new Date().getFullYear()}-05-{t.id.toString().padStart(2, '0')} 14:00:{t.id * 10}]
              </div>
              <div className={`${isNeu ? 'text-neu-blue font-black text-base' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-blue text-base font-bold' : isAnti ? 'text-black font-serif text-xl underline' : isHyper ? 'text-black font-medium mb-4' : isGrain ? 'text-grain-dark font-courier font-bold text-lg' : isLux ? 'font-outfit text-white text-xl font-bold mb-4' : 'text-ats-red'} mb-1`}>
                {isHyper ? t.name.replace('_', ' ').toLowerCase() : isLux ? t.name : `${t.name}@${t.company} ~$`}
              </div>
              <div className={`${isNeu ? 'text-black font-medium text-lg not-italic' : isGlass ? 'text-white font-light text-lg italic' : isClay ? 'text-gray-600 text-lg italic' : isAnti ? 'text-black font-serif italic bg-yellow-100 p-1' : isHyper ? 'text-gray-600 font-light text-xl italic' : isGrain ? 'text-gray-700 font-courier leading-relaxed' : isLux ? 'font-outfit text-gray-300 text-lg font-light leading-relaxed' : 'text-white italic'} mb-4`}>
                "{t.quote}"
              </div>
              <div className={`space-y-1 text-xs pt-2 ${isNeu ? 'border-t-2 border-black text-black font-bold' : isGlass ? 'border-t border-white/20 text-white/70' : isClay ? 'border-t border-gray-200 text-gray-500 font-bold' : isAnti ? 'border-t border-black text-black' : isHyper ? 'hidden' : isGrain ? 'border-t border-gray-300 text-gray-500 font-courier mt-4 pt-3' : isLux ? 'border-t border-white/10 pt-4 font-outfit text-gray-500 uppercase tracking-widest' : 'border-t border-gray-900 text-gray-500'}`}>
                <div className="flex justify-between">
                  <span>PROJECT:</span>
                  <span className={isNeu ? 'text-black' : isGlass ? 'text-white/90' : isClay ? 'text-clay-teal' : isAnti ? 'font-serif' : isGrain ? 'text-grain-red' : isLux ? 'text-white' : 'text-gray-300'}>{t.project}</span>
                </div>
                <div className={`flex justify-between ${isLux ? 'hidden' : ''}`}>
                   <span>RATING:</span>
                   <span className={isNeu ? 'text-black text-base' : isGlass ? 'text-yellow-300' : isClay ? 'text-yellow-400 text-lg' : isAnti ? 'text-red-600' : isGrain ? 'text-grain-dark text-base' : 'text-ats-green'}>
                     {'★'.repeat(t.rating)}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;