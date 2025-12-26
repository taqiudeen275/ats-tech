import React, { useState } from 'react';
import { Code, Cloud, Cpu, Lock, Terminal as TerminalIcon, BarChart, CreditCard, Calendar, Video, GraduationCap, Utensils, ShoppingBag, MapPin, Wrench, PlayCircle, X } from 'lucide-react';
import { Service } from '@/types';
import InteractiveBackground from './InteractiveBackground';
import { useSound } from '@/hooks/useSound';
import { useTheme } from '@/context/ThemeContext';

const services: Service[] = [
  // --- LIVE PROJECTS ---
  {
    id: 'pos',
    title: 'SALE_SAFE',
    description: 'Offline/Online Point of Sale system for Windows & Android.',
    icon: CreditCard,
    command: 'exec sale_safe',
    status: 'LIVE',
    details: 'Sale Safe is a robust Point of Sale application designed to work in environments with unstable internet. It supports full offline mode, synchronizing data when connection is restored. Features include inventory management, sales tracking, and multi-platform support (Desktop & Mobile).'
  },
  {
    id: 'events',
    title: 'EVENT_WEAVE',
    description: 'Complete event management, ticketing, and voting suite.',
    icon: Calendar,
    command: 'init event_sys',
    status: 'LIVE',
    details: 'Event Weave handles everything from ticketing to live scanning and verification. It includes a secure Voting System for organizations and awards, supporting both web-based and USSD voting for maximum accessibility.'
  },


  // --- PLANNED PROJECTS ---
  {
    id: 'edu',
    title: 'MY_ESCHOOL',
    description: 'Comprehensive School Management System for all education levels.',
    icon: GraduationCap,
    command: 'init education',
    status: 'PLANNED',
    details: 'A standard school management system for basic and tertiary institutions. Features student portals, staff management, parent dashboards, and grade tracking, aimed at digitizing the educational sector in the north.'
  },
  {
    id: 'food',
    title: 'FOOD_ECOMMERCE',
    description: 'Multi-vendor food ordering and delivery marketplace.',
    icon: Utensils,
    command: 'order --deploy',
    status: 'PLANNED',
    details: 'A platform connecting food vendors, riders, and customers. Allows local restaurants to go digital instantly with order tracking, rider dispatch, and seamless payment integration.'
  },
  {
    id: 'shop',
    title: 'GEN_ECOMMERCE',
    description: 'Universal ecommerce platform with integrated delivery.',
    icon: ShoppingBag,
    command: 'shop --open',
    status: 'PLANNED',
    details: 'A general-purpose ecommerce solution for local businesses. Comes with built-in delivery logistics management, inventory tracking, and a user-friendly storefront for non-technical merchants.'
  },
  {
    id: 'ride',
    title: 'RIDERS_APP',
    description: 'On-demand ride-hailing and delivery request platform.',
    icon: MapPin,
    command: 'ride request',
    status: 'PLANNED',
    details: 'An app for requesting rides or custom deliveries. Open registration for drivers allows anyone to become a rider, creating job opportunities while solving logistics challenges.'
  },
  {
    id: 'tuma',
    title: 'TUMA_REQUEST',
    description: 'Service marketplace for instant task hiring (painters, etc).',
    icon: Wrench,
    command: 'task --new',
    status: 'PLANNED',
    details: 'A "TaskRabbit" style application where individuals can broadcast requests for services (plumbing, painting, cleaning) and skilled workers can accept and fulfill them instantly.'
  },
  {
    id: 'media',
    title: 'MEDIA_STREAM',
    description: 'Regional movie subscription platform for indie creators.',
    icon: PlayCircle,
    command: 'stream play',
    status: 'PLANNED',
    details: 'A Netflix-style streaming service dedicated to Northern Ghana\'s movie industry and indie creators. Provides a platform for local talent to monetize their content and reach a wider audience.'
  }
];

const Services: React.FC = () => {
  const { playHover, playClick } = useSound();
  const { isNeu, isGlass, isRetro, isClay, isAnti, isHyper, isGrain, isLux } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Service | null>(null);

  const openModal = (project: Service) => {
    playClick();
    setSelectedProject(project);
  };

  const closeModal = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedProject(null);
  };

  return (
    <section id="services" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isNeu ? 'bg-neu-yellow' : isGlass || isClay ? 'bg-transparent' : isAnti ? 'bg-white' : isHyper ? 'bg-hyper-gray' : isGrain ? 'bg-transparent' : isLux ? 'bg-lux-black' : 'bg-black'}`}>
      {isRetro && <InteractiveBackground />}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className={`text-4xl font-mono font-bold mb-4 flex items-center gap-4 ${isNeu ? 'text-black uppercase tracking-black' : isClay ? 'text-gray-800' : isAnti ? 'text-black font-serif italic' : isHyper ? 'text-black font-sans font-light' : isGrain ? 'text-grain-dark font-courier' : isLux ? 'font-outfit font-bold uppercase text-6xl' : 'text-white'}`}>
            <span className={isNeu ? 'bg-black text-white px-2' : isGlass ? 'text-cyan-300' : isClay ? 'bg-clay-blue text-white rounded-full px-2 shadow-inner' : isAnti ? 'text-blue-700 bg-yellow-300 p-2' : isHyper ? 'hidden' : isGrain ? 'text-grain-dark bg-transparent border border-grain-dark rounded-full px-3 py-1 text-sm' : isLux ? 'hidden' : 'text-ats-red'}>#</span> {isHyper ? 'Roadmap' : isGrain ? 'Full_Roadmap' : 'PROJECT_ROADMAP'}
          </h2>
          {isNeu ? (
            <div className="h-2 w-full bg-black"></div>
          ) : isGlass ? (
            <div className="h-px w-full bg-linear-to-r from-cyan-400 to-transparent opacity-50"></div>
          ) : isClay ? (
            <div className="h-2 w-full bg-white rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]"></div>
          ) : isAnti ? (
            <div className="h-4 w-full bg-blue-700 border-t-2 border-b-2 border-black"></div>
          ) : isHyper || isLux ? (
            <div className="h-0 w-full"></div>
          ) : isGrain ? (
            <div className="h-px w-full bg-gray-400 border-b border-gray-300"></div>
          ) : (
            <div className="h-px w-full bg-linear-to-r from-ats-red to-transparent opacity-50"></div>
          )}
          <p className={`font-mono mt-4 text-sm max-w-2xl ${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/70' : isClay ? 'text-gray-500' : isAnti ? 'text-black font-serif text-xl bg-gray-200' : isHyper ? 'font-sans text-gray-400 font-light' : isGrain ? 'font-courier text-gray-600' : isLux ? 'font-outfit text-xl text-gray-400' : 'text-gray-500'}`}>
            {isHyper ? 'All Projects.' : isGrain ? 'Master_Index of all operations.' : isLux ? 'Our complete portfolio.' : `${'>'} Accessing master project database...`}
            {!isHyper && !isLux && <br/>}
            {!isHyper && !isGrain && !isLux && `${'>'} ${services.length} Modules found.`}
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
              onClick={() => openModal(service)}
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
                <span className={`text-xs font-mono flex items-center gap-2 ${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/60' : isClay ? 'text-clay-blue font-bold bg-white px-2 py-1 rounded-lg shadow-sm' : isAnti ? 'text-black font-serif font-bold text-lg' : isGrain ? 'font-courier text-gray-500 uppercase tracking-widest' : 'text-gray-500'}`}>
                  {service.command}
                </span>

                {/* Status Badge */}
                 <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ml-auto mr-2
                   ${service.status === 'LIVE' 
                      ? (isNeu ? 'bg-green-300 text-black border border-black' : isGlass ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-green-500 text-white')
                      : (isNeu ? 'bg-gray-200 text-gray-500 border border-black' : isGlass ? 'bg-white/10 text-white/50' : 'bg-gray-600 text-gray-300')
                   } ${isHyper || isLux ? 'hidden' : ''}`}>
                   {service.status}
                 </span>
                 
                <div className={`flex gap-1 ${isHyper ? 'hidden' : ''}`}>
                  <div className={`w-2 h-2 ${isNeu ? 'bg-black rounded-full' : isGlass ? 'bg-white/30 rounded-full' : isClay ? 'bg-clay-pink rounded-full' : isAnti ? 'bg-black w-3 h-3 rounded-none' : isGrain ? 'bg-gray-300 rounded-full' : 'bg-white/20'}`}></div>
                  <div className={`w-2 h-2 ${isNeu ? 'bg-black rounded-full' : isGlass ? 'bg-white/30 rounded-full' : isClay ? 'bg-clay-teal rounded-full' : isAnti ? 'bg-black w-3 h-3 rounded-none' : isGrain ? 'bg-gray-300 rounded-full' : 'bg-white/20'}`}></div>
                  <div className={`w-2 h-2 ${isNeu ? 'bg-black rounded-full' : isGlass ? 'bg-cyan-400 rounded-full' : isClay ? 'bg-clay-blue rounded-full' : isAnti ? 'bg-black w-3 h-3 rounded-none' : isGrain ? 'bg-gray-300 rounded-full' : 'bg-ats-red'}`}></div>
                </div>
              </div>

              {/* Card Content */}
              <div className={`${isHyper || isLux ? 'p-0' : 'p-6'}`}>
                <div className="flex justify-between items-start mb-4">
                  <service.icon className={`w-10 h-10 transition-colors group-hover:animate-glitch
                     ${isNeu ? 'text-black' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-blue' : isAnti ? 'text-blue-700 w-16 h-16' : isHyper ? 'text-black w-6 h-6 stroke-1' : isGrain ? 'text-grain-dark w-8 h-8 opacity-80' : isLux ? 'text-white w-12 h-12 mb-8' : 'text-white group-hover:text-ats-red'}`} />
                   
                   {/* Hyper Minimal Status Indicator */}
                   {(isHyper || isLux) && (
                     <span className={`text-xs font-sans tracking-widest uppercase ${service.status === 'LIVE' ? 'text-black font-bold' : 'text-gray-300'}`}>
                       {service.status === 'LIVE' ? '• Active' : '• Coming Soon'}
                     </span>
                   )}
                </div>
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

      
      {/* "Window" Style Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={closeModal}>
          <div className={`absolute inset-0 ${isNeu ? 'bg-black/50' : isGlass ? 'bg-black/60 backdrop-blur-md' : 'bg-black/80 backdrop-blur-sm'}`}></div>
          
          <div 
            className={`relative w-full max-w-2xl transform transition-all overflow-hidden flex flex-col
              ${isNeu 
                ? 'bg-white border-4 border-black shadow-[12px_12px_0_0_#000]' 
                : isGlass
                  ? 'glass-panel border border-white/20 rounded-2xl shadow-2xl backdrop-blur-xl' 
                  : isClay 
                    ? 'clay-card bg-white p-0 rounded-3xl'
                    : isAnti
                      ? 'bg-yellow-300 border-8 border-double border-blue-700 -rotate-1'
                      : isHyper
                        ? 'bg-white rounded-3xl shadow-2xl'
                        : isGrain
                          ? 'bg-[#F2EFE9] border-2 border-gray-400 shadow-xl'
                          : isLux
                            ? 'bg-[#0a0a0a] border border-white/10 rounded-none'
                    : 'bg-ats-dark border-2 border-white/20 shadow-[0_0_50px_rgba(255,51,51,0.2)]'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Window Title Bar */}
            <div className={`flex items-center justify-between px-6 py-3 select-none
               ${isNeu 
                 ? 'bg-neu-pink border-b-4 border-black' 
                 : isGlass
                   ? 'border-b border-white/10 bg-white/5' 
                   : isClay 
                     ? 'bg-clay-blue text-white px-8 py-4'
                     : isAnti
                       ? 'bg-blue-700 text-white border-b-4 border-black'
                       : isHyper
                         ? 'bg-transparent pt-8 px-8 pb-0'
                         : isGrain
                           ? 'bg-[#EFECE5] border-b border-gray-400'
                           : isLux
                             ? 'bg-transparent border-b border-white/5'
                     : 'bg-white/10 border-b border-white/10'
               }`}>
               
               <div className="flex items-center gap-2">
                 {/* Retro Window Controls */}
                 {!isNeu && !isHyper && !isLux && !isAnti && !isClay && !isGlass && !isGrain && (
                    <div className="flex gap-1.5 mr-2">
                      <div className="w-3 h-3 rounded-full border border-white/50"></div>
                      <div className="w-3 h-3 rounded-full border border-white/50"></div>
                      <div className="w-3 h-3 rounded-full bg-ats-red border border-ats-red"></div>
                    </div>
                 )}
                 {/* Neu/Anti Title */}
                 <span className={`font-mono font-bold tracking-wider
                   ${isNeu ? 'text-black text-lg' : isAnti ? 'text-white font-serif italic text-xl' : isHyper ? 'text-black font-sans text-2xl' : isClay ? 'text-white' : isLux ? 'text-white/50 font-outfit uppercase tracking-widest text-xs' : isGrain ? 'text-grain-dark font-courier uppercase' : 'text-gray-400 text-xs'}`}>
                   {isHyper ? selectedProject.title.replace('_', ' ').toLowerCase() : isLux ? 'PROJECT DETAILS' : selectedProject.command}
                 </span>
               </div>

               <button 
                 onClick={closeModal}
                 className={`transition-all p-1
                   ${isNeu ? 'bg-black text-white hover:bg-white hover:text-black border-2 border-black' 
                   : isGlass ? 'text-white/50 hover:text-white hover:bg-white/10 rounded-full' 
                   : isClay ? 'bg-white/20 text-white rounded-full hover:bg-white/30'
                   : isAnti ? 'bg-red-600 text-white border-2 border-white hover:bg-black'
                   : isHyper ? 'bg-gray-100 rounded-full text-black hover:bg-gray-200'
                   : isGrain ? 'text-grain-dark hover:text-grain-red'
                   : isLux ? 'text-white/30 hover:text-white'
                   : 'text-ats-red hover:text-white border border-transparent hover:border-white/20'}`}
               >
                 <X className="w-5 h-5" />
               </button>
            </div>

            {/* Window Content */}
            <div className={`p-8 ${isHyper ? 'pt-4' : ''}`}>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Icon Column */}
                <div className="shrink-0">
                  <div className={`w-24 h-24 flex items-center justify-center
                    ${isNeu ? 'bg-neu-yellow border-4 border-black box-shadow-neu' 
                    : isGlass ? 'bg-white/5 rounded-2xl border border-white/10' 
                    : isClay ? 'bg-clay-teal text-white rounded-[2rem] shadow-inner' 
                    : isAnti ? 'bg-black text-white -rotate-3 border-4 border-white' 
                    : isHyper ? 'bg-transparent p-0' 
                    : isGrain ? 'bg-transparent border border-grain-dark rounded-full' 
                    : isLux ? 'bg-white/5 rounded-full border border-white/10' 
                    : 'bg-black/50 border border-ats-red/30'}`}>
                    <selectedProject.icon className={`w-12 h-12 
                      ${isNeu ? 'text-black' : isGlass ? 'text-cyan-300' : isClay ? 'text-white' : isAnti ? 'text-white' : isHyper ? 'text-black' : isGrain ? 'text-grain-dark' : isLux ? 'text-white' : 'text-ats-red'}`} 
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                   <div className="flex flex-col gap-2 mb-6">
                     <h2 className={`text-3xl font-bold font-mono ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-black font-serif italic' : isHyper ? 'text-black font-sans' : isGrain ? 'text-grain-dark font-courier' : isLux ? 'text-white font-outfit uppercase' : 'text-white'}`}>
                       {isHyper ? selectedProject.title.replace('_', ' ').toLowerCase() : selectedProject.title}
                     </h2>
                     <span className={`self-start text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest
                       ${selectedProject.status === 'LIVE' 
                          ? (isNeu ? 'bg-green-300 text-black border-2 border-black' : isClay ? 'bg-green-100 text-green-600' : 'bg-green-900/50 text-green-400 border border-green-500/30')
                          : (isNeu ? 'bg-gray-200 text-black border-2 border-black' : isClay ? 'bg-gray-100 text-gray-400' : 'bg-white/5 text-gray-500 border border-white/10')
                       }`}>
                       Status: {selectedProject.status.replace('_', ' ')}
                     </span>
                   </div>

                   <div className={`prose max-w-none ${isNeu ? 'prose-neutral' : isGlass || isLux ? 'prose-invert' : 'prose-invert'}`}>
                      <p className={`text-lg leading-relaxed ${isNeu ? 'text-black font-medium' : isClay ? 'text-gray-600' : isAnti ? 'text-black font-serif text-xl border-l-4 border-blue-700 pl-4' : isHyper ? 'text-gray-900 font-sans font-light' : isGrain ? 'text-gray-700 font-courier' : isLux ? 'text-gray-400 font-outfit font-light' : 'text-gray-300'}`}>
                        {selectedProject.details || selectedProject.description}
                      </p>
                   </div>
                </div>
              </div>

              {/* Window Footer (Actions) */}
              <div className={`mt-8 pt-6 flex justify-end gap-4
                 ${isNeu ? 'border-t-4 border-black' : isGlass ? 'border-t border-white/10' : isHyper ? '' : isGrain ? 'border-t border-gray-300' : isLux ? 'border-t border-white/5' : 'border-t border-white/10'}`}>
                 <button 
                   onClick={closeModal}
                   className={`font-mono font-bold py-3 px-8 transition-all
                      ${isNeu ? 'bg-neu-blue text-black hover:bg-black hover:text-white border-2 border-black shadow-[4px_4px_0_0_#000] hover:translate-1 hover:shadow-none' 
                      : isGlass ? 'bg-white/10 text-white hover:bg-white/20 rounded-lg border border-white/10' 
                      : isClay ? 'bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200'
                      : isAnti ? 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white font-serif'
                      : isHyper ? 'text-gray-400 hover:text-black font-sans'
                      : isGrain ? 'text-grain-dark border border-grain-dark hover:bg-grain-dark hover:text-white'
                      : isLux ? 'text-white/50 hover:text-white border border-white/10 hover:border-white'
                      : 'text-gray-400 hover:text-white border border-transparent hover:border-white/20'}`}
                 >
                   {isHyper ? 'Close' : isLux ? 'CLOSE' : 'CANCEL'}
                 </button>
                 
                 {selectedProject.status === 'LIVE' && (
                    <button 
                      className={`font-mono font-bold py-3 px-8 transition-all
                         ${isNeu ? 'bg-neu-yellow text-black hover:bg-black hover:text-neu-yellow border-2 border-black shadow-[4px_4px_0_0_#000] hover:translate-1 hover:shadow-none' 
                         : isGlass ? 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 rounded-lg border border-cyan-500/30' 
                         : isClay ? 'bg-clay-blue text-white rounded-xl shadow-lg hover:bg-clay-blue/90'
                         : isAnti ? 'bg-blue-700 text-white border-2 border-blue-700 hover:bg-white hover:text-blue-700 font-serif'
                         : isHyper ? 'bg-black text-white rounded-full font-sans px-8 hover:bg-gray-800'
                         : isGrain ? 'bg-grain-red text-white hover:bg-red-800'
                         : isLux ? 'bg-white text-black hover:bg-gray-200'
                         : 'bg-ats-red text-white hover:bg-white hover:text-black'}`}
                    >
                      {isHyper ? 'Visit' : isLux ? 'LAUNCH' : 'EXECUTE'}
                    </button>
                 )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;