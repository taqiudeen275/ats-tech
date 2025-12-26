import React from 'react';
import { Code, Cloud, Cpu, Lock, Terminal as TerminalIcon, BarChart } from 'lucide-react';
import { Service } from '../types';
import InteractiveBackground from './InteractiveBackground';
import { useSound } from '../hooks/useSound';
import { useTheme } from '../context/ThemeContext';

const services: Service[] = [
  {
    id: 'dev',
    title: 'SOFTWARE_DEV',
    description: 'Custom binaries and executables tailored to your specific parameters.',
    icon: Code,
    command: 'run build'
  },
  {
    id: 'cloud',
    title: 'CLOUD_ARCH',
    description: 'Scalable infrastructure solutions deployed on distributed networks.',
    icon: Cloud,
    command: 'deploy --global'
  },
  {
    id: 'hardware',
    title: 'HARDWARE_INT',
    description: 'Physical layer integration and IoT sensor networks.',
    icon: Cpu,
    command: 'init hardware'
  },
  {
    id: 'security',
    title: 'CYBER_SEC',
    description: 'Advanced encryption and firewall protection systems.',
    icon: Lock,
    command: 'secure --lock'
  },
  {
    id: 'automation',
    title: 'AUTO_MATION',
    description: 'Scripting and AI-driven process optimization.',
    icon: TerminalIcon,
    command: 'cron start'
  },
  {
    id: 'analytics',
    title: 'DATA_ANALYTICS',
    description: 'Visualizing complex data streams for actionable intelligence.',
    icon: BarChart,
    command: 'analyze --deep'
  }
];

const Services: React.FC = () => {
  const { playHover, playClick } = useSound();
  const { isNeu, isGlass, isRetro, isClay, isAnti, isHyper, isGrain, isLux } = useTheme();

  return (
    <section id="services" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isNeu ? 'bg-neu-yellow' : isGlass || isClay ? 'bg-transparent' : isAnti ? 'bg-white' : isHyper ? 'bg-hyper-gray' : isGrain ? 'bg-transparent' : isLux ? 'bg-lux-black' : 'bg-black'}`}>
      {isRetro && <InteractiveBackground />}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className={`text-4xl font-mono font-bold mb-4 flex items-center gap-4 ${isNeu ? 'text-black uppercase tracking-black' : isClay ? 'text-gray-800' : isAnti ? 'text-black font-serif italic' : isHyper ? 'text-black font-sans font-light' : isGrain ? 'text-grain-dark font-courier' : isLux ? 'font-outfit font-bold uppercase text-6xl' : 'text-white'}`}>
            <span className={isNeu ? 'bg-black text-white px-2' : isGlass ? 'text-cyan-300' : isClay ? 'bg-clay-blue text-white rounded-full px-2 shadow-inner' : isAnti ? 'text-blue-700 bg-yellow-300 p-2' : isHyper ? 'hidden' : isGrain ? 'text-grain-dark bg-transparent border border-grain-dark rounded-full px-3 py-1 text-sm' : isLux ? 'hidden' : 'text-ats-red'}>#</span> {isHyper ? 'Services' : isGrain ? 'Department_Services' : 'SERVICES'}
          </h2>
          {isNeu ? (
            <div className="h-2 w-full bg-black"></div>
          ) : isGlass ? (
            <div className="h-px w-full bg-gradient-to-r from-cyan-400 to-transparent opacity-50"></div>
          ) : isClay ? (
            <div className="h-2 w-full bg-white rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]"></div>
          ) : isAnti ? (
            <div className="h-4 w-full bg-blue-700 border-t-2 border-b-2 border-black"></div>
          ) : isHyper || isLux ? (
            <div className="h-0 w-full"></div>
          ) : isGrain ? (
            <div className="h-px w-full bg-gray-400 border-b border-gray-300"></div>
          ) : (
            <div className="h-px w-full bg-gradient-to-r from-ats-red to-transparent opacity-50"></div>
          )}
          <p className={`font-mono mt-4 text-sm max-w-2xl ${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/70' : isClay ? 'text-gray-500' : isAnti ? 'text-black font-serif text-xl bg-gray-200' : isHyper ? 'font-sans text-gray-400 font-light' : isGrain ? 'font-courier text-gray-600' : isLux ? 'font-outfit text-xl text-gray-400' : 'text-gray-500'}`}>
            {isHyper ? 'Capabilities.' : isGrain ? 'Index of available capabilities.' : isLux ? 'Explore our core competencies.' : `${'>'} Accessing service capabilities database...`}
            {!isHyper && !isLux && <br/>}
            {!isHyper && !isGrain && !isLux && `${'>'} 6 Modules found.`}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isAnti ? 'gap-0 space-y-4 md:space-y-0' : isHyper ? 'gap-12' : isLux ? 'gap-8' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative transition-all duration-300 overflow-hidden cursor-pointer
                ${isNeu 
                  ? 'bg-white border-4 border-black shadow-neu hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]' 
                  : isGlass
                    ? 'glass-card hover:bg-white/20 rounded-xl'
                    : isClay
                      ? 'clay-card p-0 hover:scale-[1.02] transition-transform'
                      : isAnti
                        ? 'bg-white border-4 border-blue-700 hover:bg-blue-100 hover:rotate-1'
                        : isHyper
                          ? 'hyper-card'
                          : isGrain
                            ? 'bg-[#F5F2EA] border border-[#D1CDC5] shadow-[2px_2px_5px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1'
                            : isLux
                              ? 'bg-[#111] hover:bg-[#161616] border border-white/5 hover:border-white/10 p-8 rounded-none'
                      : 'bg-ats-dark/80 backdrop-blur-sm border border-white/10 hover:border-ats-red/50'}`}
              onMouseEnter={playHover}
              onClick={playClick}
              style={isNeu ? { transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})` } : isAnti ? { transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`, margin: '-10px' } : {}}
            >
              {/* Card Header */}
              <div className={`p-2 flex justify-between items-center 
                 ${isNeu 
                   ? 'bg-neu-pink border-b-4 border-black' 
                   : isGlass
                     ? 'bg-white/5 border-b border-white/10'
                     : isClay
                       ? 'bg-transparent border-b border-gray-100 px-6 pt-6 pb-2'
                       : isAnti
                         ? 'bg-yellow-300 border-b-4 border-blue-700'
                         : isHyper || isLux
                           ? 'hidden'
                           : isGrain
                             ? 'bg-transparent border-b border-[#D1CDC5] px-6 pt-4 pb-2'
                       : 'bg-white/5 border-b border-white/10'}`}>
                <span className={`text-xs font-mono ${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/60' : isClay ? 'text-clay-blue font-bold bg-white px-2 py-1 rounded-lg shadow-sm' : isAnti ? 'text-black font-serif font-bold text-lg' : isGrain ? 'font-courier text-gray-500 uppercase tracking-widest' : 'text-gray-500'}`}>{service.command}</span>
                <div className="flex gap-1">
                  <div className={`w-2 h-2 ${isNeu ? 'bg-black rounded-full' : isGlass ? 'bg-white/30 rounded-full' : isClay ? 'bg-clay-pink rounded-full' : isAnti ? 'bg-black w-3 h-3 rounded-none' : isGrain ? 'bg-gray-300 rounded-full' : 'bg-white/20'}`}></div>
                  <div className={`w-2 h-2 ${isNeu ? 'bg-black rounded-full' : isGlass ? 'bg-white/30 rounded-full' : isClay ? 'bg-clay-teal rounded-full' : isAnti ? 'bg-black w-3 h-3 rounded-none' : isGrain ? 'bg-gray-300 rounded-full' : 'bg-white/20'}`}></div>
                  <div className={`w-2 h-2 ${isNeu ? 'bg-black rounded-full' : isGlass ? 'bg-cyan-400 rounded-full' : isClay ? 'bg-clay-blue rounded-full' : isAnti ? 'bg-black w-3 h-3 rounded-none' : isGrain ? 'bg-gray-300 rounded-full' : 'bg-ats-red'}`}></div>
                </div>
              </div>

              {/* Card Content */}
              <div className={`${isHyper || isLux ? 'p-0' : 'p-6'}`}>
                <service.icon className={`w-10 h-10 mb-4 transition-colors group-hover:animate-glitch
                   ${isNeu ? 'text-black' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-blue' : isAnti ? 'text-blue-700 w-16 h-16' : isHyper ? 'text-black w-6 h-6 stroke-1' : isGrain ? 'text-grain-dark w-8 h-8 opacity-80' : isLux ? 'text-white w-12 h-12 mb-8' : 'text-white group-hover:text-ats-red'}`} />
                <h3 className={`text-xl font-bold font-mono mb-2 transition-colors ${isNeu ? 'text-black' : isClay ? 'text-gray-700' : isAnti ? 'text-black font-serif uppercase underline decoration-wavy' : isHyper ? 'font-sans text-black font-medium text-lg' : isGrain ? 'font-courier text-grain-dark font-bold' : isLux ? 'font-outfit text-white text-3xl mb-4 font-bold tracking-tight' : 'group-hover:text-ats-red text-white'}`}>
                  {isHyper ? service.title.replace('_', ' ').toLowerCase() : service.title}
                </h3>
                <p className={`text-sm font-mono leading-relaxed ${isNeu ? 'text-black font-medium' : isGlass ? 'text-white/80' : isClay ? 'text-gray-500' : isAnti ? 'text-black font-serif' : isHyper ? 'font-sans text-gray-500 font-light' : isGrain ? 'font-courier text-gray-600' : isLux ? 'font-outfit text-gray-400 text-lg leading-relaxed' : 'text-gray-400'}`}>
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Overlay (Retro only) */}
              {isRetro && (
                <>
                  <div className="absolute inset-0 bg-ats-red/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-pixel text-ats-red animate-blink">[ENTER]</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;