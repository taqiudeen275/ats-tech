import React from 'react';
import InteractiveBackground from './InteractiveBackground';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { isNeu, isGlass, isRetro, isClay, isAnti, isHyper, isGrain, isLux } = useTheme();

  return (
    <section id="about" className={`py-24 relative overflow-hidden transition-colors ${isNeu ? 'bg-neu-blue' : isGlass ? 'bg-transparent' : isClay ? 'bg-transparent' : isAnti ? 'bg-yellow-100' : isHyper ? 'bg-white' : isGrain ? 'bg-grain-beige' : isLux ? 'bg-lux-black' : 'bg-black text-white'}`}>
      {isRetro && <InteractiveBackground />}
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Decorative ASCII Header */}
        <div className={`font-mono text-xs md:text-sm mb-8 whitespace-pre overflow-x-hidden select-none opacity-50 ${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/50' : isClay ? 'text-gray-400 font-bold' : isAnti ? 'text-black bg-white border border-black' : isHyper || isLux ? 'hidden' : isGrain ? 'text-gray-500 font-courier opacity-70' : 'text-gray-600'}`}>
{`
    ___    ____  ____  __  ________
   /   |  / __ )/ __ \\/ / / /_  __/
  / /| | / __  / / / / / / / / /   
 / ___ |/ /_/ / /_/ / /_/ / / /    
/_/  |_/_____/\\____/\\____/ /_/     
`}
        </div>

        <div className={`p-8 md:p-12 relative transition-all
          ${isNeu 
            ? 'bg-white border-4 border-black shadow-neu rotate-1' 
            : isGlass
              ? 'glass-panel rounded-2xl text-white'
              : isClay
                ? 'clay-card text-gray-700'
                : isAnti
                  ? 'bg-white border-4 border-black text-black'
                  : isHyper
                    ? 'bg-transparent p-0 border-none text-black'
                    : isGrain
                      ? 'bg-white border border-gray-300 shadow-sm'
                      : isLux
                        ? 'bg-transparent p-0 border-none text-white'
              : 'border border-white/20 bg-ats-dark/90 backdrop-blur-sm'}`}>
          
          <div className={`absolute -top-3 left-4 px-2 font-mono text-sm
             ${isNeu 
               ? 'bg-neu-yellow text-black border-2 border-black font-bold' 
               : isGlass
                 ? 'bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full'
                 : isClay
                   ? 'bg-clay-teal text-white font-bold rounded-2xl shadow-sm px-4 py-1'
                   : isAnti
                     ? 'bg-red-600 text-white font-serif uppercase tracking-widest'
                     : isHyper || isLux
                       ? 'hidden'
                       : isGrain
                         ? 'bg-grain-red text-white font-courier uppercase tracking-wider'
                 : 'bg-black text-ats-red border border-ats-red'}`}>
            README.md
          </div>

          <article className={`prose prose-mono max-w-none ${isNeu ? 'prose-black' : isGlass ? 'prose-invert' : isClay ? 'prose-gray' : isAnti ? 'prose-black font-serif' : isHyper ? 'font-sans' : isGrain ? 'font-courier text-grain-dark' : isLux ? 'font-outfit text-white' : 'prose-invert'}`}>
            <h3 className={`text-2xl font-bold mb-6 pb-2 ${isNeu ? 'text-black border-b-4 border-black' : isGlass ? 'text-white border-b border-white/20' : isClay ? 'text-gray-800 border-b border-gray-200' : isAnti ? 'text-blue-700 bg-yellow-200 inline-block p-2' : isHyper ? 'text-black font-light text-4xl mb-12 border-none' : isGrain ? 'text-grain-dark border-b border-gray-400' : isLux ? 'text-white font-bold text-5xl mb-8 border-none' : 'text-white border-b border-gray-700'}`}>
              {isHyper ? 'Mission.' : isLux ? 'Our Mission' : '## Mission_Statement'}
            </h3>
            <p className={`mb-6 leading-relaxed ${isNeu ? 'text-black font-medium' : isGlass ? 'text-white/80 font-light' : isClay ? 'text-gray-600 font-medium' : isAnti ? 'text-black text-xl leading-tight' : isHyper ? 'text-gray-500 font-light text-xl leading-relaxed' : isGrain ? 'text-gray-700' : isLux ? 'text-gray-300 text-2xl font-light leading-relaxed' : 'text-gray-300'}`}>
              At ATS Tech, we do not simply write code. We architect the digital backbone of the future. 
              Born from the underground demo-scene and raised in enterprise server rooms, we fuse 
              old-school efficiency with avant-garde innovation.
            </p>
            <p className={`mb-8 leading-relaxed ${isNeu ? 'text-black font-medium' : isGlass ? 'text-white/80 font-light' : isClay ? 'text-gray-600 font-medium' : isAnti ? 'text-black text-xl leading-tight' : isHyper ? 'text-gray-500 font-light text-xl leading-relaxed' : isGrain ? 'text-gray-700' : isLux ? 'text-gray-300 text-2xl font-light leading-relaxed' : 'text-gray-300'}`}>
              We believe technology should be transparent, powerful, and aesthetically uncompromising. 
              Our "Nothing" design philosophy strips away the bloat, leaving only pure functionality 
              wrapped in industrial elegance.
            </p>

            <h3 className={`text-2xl font-bold mb-6 pb-2 ${isNeu ? 'text-black border-b-4 border-black' : isGlass ? 'text-white border-b border-white/20' : isClay ? 'text-gray-800 border-b border-gray-200' : isAnti ? 'text-blue-700 bg-yellow-200 inline-block p-2' : isHyper ? 'text-black font-light text-4xl mb-12 border-none' : isGrain ? 'text-grain-dark border-b border-gray-400' : isLux ? 'text-white font-bold text-5xl mb-8 border-none mt-16' : 'text-white border-b border-gray-700'}`}>
              {isHyper ? 'Values.' : isLux ? 'Core Values' : '## System_Values'}
            </h3>
            <ul className={`list-none space-y-4 pl-0 ${isAnti ? 'border border-black p-4' : ''}`}>
              <li className="flex items-start">
                <span className={`mr-4 font-bold ${isNeu ? 'text-black bg-neu-pink px-1' : isGlass ? 'text-cyan-300 bg-white/10 px-2 rounded' : isClay ? 'text-white bg-clay-pink px-2 rounded-lg shadow-sm' : isAnti ? 'bg-black text-white p-1' : isHyper ? 'text-gray-300 font-light' : isGrain ? 'text-grain-dark' : isLux ? 'hidden' : 'text-ats-red'}`}>{isHyper ? '01' : '[01]'}</span>
                <span><strong className={isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-red-600 font-black' : isHyper ? 'text-black font-normal' : isGrain ? 'text-grain-dark font-normal underline decoration-wavy' : isLux ? 'text-white text-xl font-bold block mb-2' : 'text-white'}>Radical Transparency{isHyper ? '.' : isLux ? '' : ':'}</strong> {isHyper ? <span className="text-gray-500 font-light block mt-1">No black boxes.</span> : isLux ? <span className="text-gray-400 text-lg font-light">No black boxes. We build open, documented, and verifiable systems.</span> : 'No black boxes. We build open, documented, and verifiable systems.'}</span>
              </li>
              <li className="flex items-start">
                <span className={`mr-4 font-bold ${isNeu ? 'text-black bg-neu-pink px-1' : isGlass ? 'text-cyan-300 bg-white/10 px-2 rounded' : isClay ? 'text-white bg-clay-pink px-2 rounded-lg shadow-sm' : isAnti ? 'bg-black text-white p-1' : isHyper ? 'text-gray-300 font-light' : isGrain ? 'text-grain-dark' : isLux ? 'hidden' : 'text-ats-red'}`}>{isHyper ? '02' : '[02]'}</span>
                <span><strong className={isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-red-600 font-black' : isHyper ? 'text-black font-normal' : isGrain ? 'text-grain-dark font-normal underline decoration-wavy' : isLux ? 'text-white text-xl font-bold block mb-2' : 'text-white'}>Performance First{isHyper ? '.' : isLux ? '' : ':'}</strong> {isHyper ? <span className="text-gray-500 font-light block mt-1">Optimization is the foundation.</span> : isLux ? <span className="text-gray-400 text-lg font-light">Optimization is not an afterthought; it is the foundation.</span> : 'Optimization is not an afterthought; it is the foundation.'}</span>
              </li>
              <li className="flex items-start">
                <span className={`mr-4 font-bold ${isNeu ? 'text-black bg-neu-pink px-1' : isGlass ? 'text-cyan-300 bg-white/10 px-2 rounded' : isClay ? 'text-white bg-clay-pink px-2 rounded-lg shadow-sm' : isAnti ? 'bg-black text-white p-1' : isHyper ? 'text-gray-300 font-light' : isGrain ? 'text-grain-dark' : isLux ? 'hidden' : 'text-ats-red'}`}>{isHyper ? '03' : '[03]'}</span>
                <span><strong className={isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-red-600 font-black' : isHyper ? 'text-black font-normal' : isGrain ? 'text-grain-dark font-normal underline decoration-wavy' : isLux ? 'text-white text-xl font-bold block mb-2' : 'text-white'}>Aesthetic Utility{isHyper ? '.' : isLux ? '' : ':'}</strong> {isHyper ? <span className="text-gray-500 font-light block mt-1">Beauty in function.</span> : isLux ? <span className="text-gray-400 text-lg font-light">Beauty in function. Code that looks as good as it runs.</span> : 'Beauty in function. Code that looks as good as it runs.'}</span>
              </li>
            </ul>

            <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 ${isNeu ? 'border-t-4 border-black' : isGlass ? 'border-t border-white/10' : isClay ? 'border-t border-gray-200' : isAnti ? 'bg-blue-100 p-4 border-2 border-dashed border-blue-500' : isHyper || isLux ? 'border-none' : isGrain ? 'border-t border-gray-300' : 'border-t border-white/10'}`}>
              <div>
                <div className={`text-3xl font-bold font-pixel ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-blue-700 font-serif' : isHyper ? 'font-sans text-black font-light' : isGrain ? 'font-courier text-grain-dark' : isLux ? 'font-outfit text-white text-5xl' : 'text-white'}`}>10+</div>
                <div className={`text-xs ${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/60' : isClay ? 'text-gray-500 font-bold' : isAnti ? 'text-black' : isHyper ? 'font-sans text-gray-400' : isGrain ? 'text-gray-500 font-courier' : isLux ? 'font-outfit text-gray-500 mt-2' : 'text-gray-500'}`}>YEARS</div>
              </div>
              <div>
                <div className={`text-3xl font-bold font-pixel ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-blue-700 font-serif' : isHyper ? 'font-sans text-black font-light' : isGrain ? 'font-courier text-grain-dark' : isLux ? 'font-outfit text-white text-5xl' : 'text-white'}`}>500+</div>
                <div className={`text-xs ${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/60' : isClay ? 'text-gray-500 font-bold' : isAnti ? 'text-black' : isHyper ? 'font-sans text-gray-400' : isGrain ? 'text-gray-500 font-courier' : isLux ? 'font-outfit text-gray-500 mt-2' : 'text-gray-500'}`}>PROJECTS</div>
              </div>
              <div>
                <div className={`text-3xl font-bold font-pixel ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-blue-700 font-serif' : isHyper ? 'font-sans text-black font-light' : isGrain ? 'font-courier text-grain-dark' : isLux ? 'font-outfit text-white text-5xl' : 'text-white'}`}>99.9%</div>
                <div className={`text-xs ${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/60' : isClay ? 'text-gray-500 font-bold' : isAnti ? 'text-black' : isHyper ? 'font-sans text-gray-400' : isGrain ? 'text-gray-500 font-courier' : isLux ? 'font-outfit text-gray-500 mt-2' : 'text-gray-500'}`}>SLA</div>
              </div>
              <div>
                <div className={`text-3xl font-bold font-pixel ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-blue-700 font-serif' : isHyper ? 'font-sans text-black font-light' : isGrain ? 'font-courier text-grain-dark' : isLux ? 'font-outfit text-white text-5xl' : 'text-white'}`}>24/7</div>
                <div className={`text-xs ${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/60' : isClay ? 'text-gray-500 font-bold' : isAnti ? 'text-black' : isHyper ? 'font-sans text-gray-400' : isGrain ? 'text-gray-500 font-courier' : isLux ? 'font-outfit text-gray-500 mt-2' : 'text-gray-500'}`}>SUPPORT</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;