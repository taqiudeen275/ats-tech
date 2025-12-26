import React, { useState } from 'react';
import { Send } from 'lucide-react';
import InteractiveBackground from './InteractiveBackground';
import { useSound } from '../hooks/useSound';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT'>('IDLE');
  const { playHover, playClick } = useSound();
  const { isNeu, isGlass, isRetro, isClay, isAnti, isHyper, isGrain, isLux } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setStatus('SENDING');
    setTimeout(() => {
      setStatus('SENT');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('IDLE'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className={`py-24 relative overflow-hidden transition-colors ${isNeu ? 'bg-neu-pink' : isGlass || isClay ? 'bg-transparent' : isAnti ? 'bg-white' : isHyper ? 'bg-hyper-gray' : isGrain ? 'bg-grain-beige' : isLux ? 'bg-lux-black' : 'bg-ats-dark'}`}>
      {isRetro && <InteractiveBackground />}
      {/* Background decoration */}
      <div className={`absolute right-0 top-0 h-full w-1/3 skew-x-12 hidden lg:block pointer-events-none z-0 
         ${isNeu ? 'bg-black/10' : isGlass ? 'bg-white/5' : isClay ? 'bg-white/30 blur-2xl' : isAnti ? 'bg-red-600 w-full opacity-10' : isHyper ? 'hidden' : isGrain ? 'bg-gray-400 opacity-5' : isLux ? 'bg-white/5 blur-3xl' : 'bg-white/5'}`} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className={`relative shadow-2xl transition-all
           ${isNeu 
             ? 'bg-white border-4 border-black shadow-neu' 
             : isGlass
               ? 'glass-panel rounded-2xl border-white/20'
               : isClay
                 ? 'clay-card border-none'
                 : isAnti
                   ? 'bg-anti-yellow border-8 border-double border-black'
                   : isHyper
                     ? 'bg-transparent shadow-none'
                     : isGrain
                       ? 'bg-[#F8F7F4] border border-gray-400 shadow-xl'
                       : isLux
                         ? 'bg-transparent border-none'
               : 'border border-white/20 bg-black/80 backdrop-blur-md'}`}>
          
          {/* Terminal Header */}
          <div className={`p-2 flex items-center border-b ${isNeu ? 'bg-neu-yellow border-black border-b-4' : isGlass ? 'bg-white/10 border-white/10 rounded-t-2xl' : isClay ? 'bg-transparent border-gray-100' : isAnti ? 'bg-white border-black' : isHyper || isLux ? 'hidden' : isGrain ? 'border-gray-300 bg-[#EFECE5] px-4' : 'bg-white/10 border-white/10'}`}>
             <div className={`w-3 h-3 rounded-full mr-2 ${isNeu ? 'bg-black' : isGlass ? 'bg-red-400' : isClay ? 'bg-clay-pink shadow-inner' : isAnti ? 'bg-black rounded-none' : isGrain ? 'bg-gray-400' : 'bg-red-500'}`}></div>
             <div className={`w-3 h-3 rounded-full mr-2 ${isNeu ? 'bg-black' : isGlass ? 'bg-yellow-400' : isClay ? 'bg-yellow-300 shadow-inner' : isAnti ? 'bg-black rounded-none' : isGrain ? 'bg-gray-400' : 'bg-yellow-500'}`}></div>
             <div className={`w-3 h-3 rounded-full mr-4 ${isNeu ? 'bg-black' : isGlass ? 'bg-green-400' : isClay ? 'bg-clay-teal shadow-inner' : isAnti ? 'bg-black rounded-none' : isGrain ? 'bg-gray-400' : 'bg-green-500'}`}></div>
             <div className={`text-xs font-mono ${isNeu ? 'text-black font-bold' : isGlass ? 'text-white/60' : isClay ? 'text-gray-400' : isAnti ? 'text-black font-serif' : isGrain ? 'text-gray-500 font-courier' : 'text-gray-400'}`}>root@ats-tech:~/contact-form</div>
          </div>

          <div className={`${isHyper ? 'p-0 py-12' : 'p-8 md:p-12'}`}>
            <h2 className={`text-2xl font-mono font-bold mb-8 ${isNeu ? 'text-black' : isClay ? 'text-gray-800' : isAnti ? 'text-black font-serif uppercase tracking-[1em]' : isHyper ? 'font-sans text-black font-light text-4xl' : isGrain ? 'font-courier text-grain-dark' : isLux ? 'font-outfit text-white text-6xl uppercase' : 'text-white'}`}>
              {isHyper ? 'Contact.' : isLux ? 'Get In Touch' : 'INITIALIZE_TRANSMISSION'}
            </h2>

            <form onSubmit={handleSubmit} className={`space-y-6 ${isHyper ? 'font-sans' : isGrain ? 'font-courier' : isLux ? 'font-outfit' : 'font-mono'}`}>
              <div className="space-y-2">
                <label className={`block text-xs uppercase tracking-widest ${isNeu ? 'text-black font-bold' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-blue font-bold ml-2' : isAnti ? 'text-black bg-white inline-block' : isHyper ? 'hidden' : isGrain ? 'text-grain-red' : isLux ? 'text-gray-500' : 'text-ats-red'}`}>Identify User</label>
                <div className={`flex items-center border-b focus-within:border-white transition-colors ${isNeu ? 'border-black' : isGlass ? 'border-white/30' : isClay ? 'border-none p-0' : isAnti ? 'border-2 border-black bg-white' : isHyper ? 'border-gray-300 focus-within:border-black' : isGrain ? 'border-gray-400 focus-within:border-grain-dark' : isLux ? 'border-white/10 focus-within:border-white' : 'border-gray-700'}`}>
                  <span className={`mr-2 ${isNeu ? 'text-black' : isGlass ? 'text-white/50' : isClay ? 'hidden' : isAnti ? 'text-black font-serif font-bold p-2' : isHyper || isLux ? 'hidden' : isGrain ? 'text-gray-400' : 'text-gray-500'}`}>{'>'}</span>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder={isHyper ? "Name" : isLux ? "Your Name" : "ENTER_NAME"}
                    className={`w-full bg-transparent py-2 placeholder-gray-700 focus:outline-none 
                      ${isNeu 
                        ? 'text-black placeholder-gray-500 font-bold' 
                        : isGlass 
                          ? 'text-white placeholder-white/30'
                          : isClay
                            ? 'clay-input px-4 py-3 text-gray-700 placeholder-gray-400'
                            : isAnti
                              ? 'text-black font-serif placeholder-black bg-white p-2 w-full'
                              : isHyper
                                ? 'text-black placeholder-gray-300 font-light text-xl py-4'
                                : isGrain
                                  ? 'text-grain-dark placeholder-gray-400'
                                  : isLux
                                    ? 'text-white placeholder-gray-600 text-xl py-4'
                          : 'text-white'}`}
                    onFocus={playHover}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`block text-xs uppercase tracking-widest ${isNeu ? 'text-black font-bold' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-blue font-bold ml-2' : isAnti ? 'text-black bg-white inline-block' : isHyper ? 'hidden' : isGrain ? 'text-grain-red' : isLux ? 'text-gray-500' : 'text-ats-red'}`}>Return Address</label>
                <div className={`flex items-center border-b focus-within:border-white transition-colors ${isNeu ? 'border-black' : isGlass ? 'border-white/30' : isClay ? 'border-none p-0' : isAnti ? 'border-2 border-black bg-white' : isHyper ? 'border-gray-300 focus-within:border-black' : isGrain ? 'border-gray-400 focus-within:border-grain-dark' : isLux ? 'border-white/10 focus-within:border-white' : 'border-gray-700'}`}>
                  <span className={`mr-2 ${isNeu ? 'text-black' : isGlass ? 'text-white/50' : isClay ? 'hidden' : isAnti ? 'text-black font-serif font-bold p-2' : isHyper || isLux ? 'hidden' : isGrain ? 'text-gray-400' : 'text-gray-500'}`}>{'>'}</span>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder={isHyper ? "Email" : isLux ? "Your Email" : "ENTER_EMAIL"}
                    className={`w-full bg-transparent py-2 placeholder-gray-700 focus:outline-none 
                      ${isNeu 
                        ? 'text-black placeholder-gray-500 font-bold' 
                        : isGlass
                          ? 'text-white placeholder-white/30'
                          : isClay
                            ? 'clay-input px-4 py-3 text-gray-700 placeholder-gray-400'
                            : isAnti
                              ? 'text-black font-serif placeholder-black bg-white p-2 w-full'
                              : isHyper
                                ? 'text-black placeholder-gray-300 font-light text-xl py-4'
                                : isGrain
                                  ? 'text-grain-dark placeholder-gray-400'
                                  : isLux
                                    ? 'text-white placeholder-gray-600 text-xl py-4'
                          : 'text-white'}`}
                    onFocus={playHover}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`block text-xs uppercase tracking-widest ${isNeu ? 'text-black font-bold' : isGlass ? 'text-cyan-300' : isClay ? 'text-clay-blue font-bold ml-2' : isAnti ? 'text-black bg-white inline-block' : isHyper ? 'hidden' : isGrain ? 'text-grain-red' : isLux ? 'text-gray-500' : 'text-ats-red'}`}>Payload Data</label>
                <div className={`flex items-start border-b focus-within:border-white transition-colors ${isNeu ? 'border-black' : isGlass ? 'border-white/30' : isClay ? 'border-none p-0' : isAnti ? 'border-2 border-black bg-white' : isHyper ? 'border-gray-300 focus-within:border-black' : isGrain ? 'border-gray-400 focus-within:border-grain-dark' : isLux ? 'border-white/10 focus-within:border-white' : 'border-gray-700'}`}>
                  <span className={`mr-2 mt-2 ${isNeu ? 'text-black' : isGlass ? 'text-white/50' : isClay ? 'hidden' : isAnti ? 'text-black font-serif font-bold p-2' : isHyper || isLux ? 'hidden' : isGrain ? 'text-gray-400' : 'text-gray-500'}`}>{'>'}</span>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder={isHyper ? "Message" : isLux ? "Your Message" : "ENTER_MESSAGE_CONTENT..."}
                    className={`w-full bg-transparent py-2 placeholder-gray-700 focus:outline-none resize-none 
                      ${isNeu 
                        ? 'text-black placeholder-gray-500 font-bold' 
                        : isGlass
                          ? 'text-white placeholder-white/30'
                          : isClay
                            ? 'clay-input px-4 py-3 text-gray-700 placeholder-gray-400'
                            : isAnti
                              ? 'text-black font-serif placeholder-black bg-white p-2 w-full'
                              : isHyper
                                ? 'text-black placeholder-gray-300 font-light text-xl py-4'
                                : isGrain
                                  ? 'text-grain-dark placeholder-gray-400'
                                  : isLux
                                    ? 'text-white placeholder-gray-600 text-xl py-4'
                          : 'text-white'}`}
                    onFocus={playHover}
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status !== 'IDLE'}
                  onMouseEnter={playHover}
                  className={`
                    w-full py-4 font-bold transition-all duration-200 flex items-center justify-center gap-2
                    ${status === 'SENDING' ? 'opacity-75 cursor-wait' : ''}
                    ${isNeu 
                       ? `border-2 border-black bg-black text-white hover:bg-white hover:text-black shadow-neu ${status === 'SENT' ? 'bg-neu-green border-black text-black' : ''}` 
                       : isGlass
                         ? `border border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-xl shadow-lg backdrop-blur ${status === 'SENT' ? 'bg-green-400/20 border-green-400/50' : ''}`
                       : isClay
                         ? `clay-button-colored bg-clay-blue text-white rounded-2xl hover:bg-clay-blue/90 ${status === 'SENT' ? 'bg-green-500' : ''}`
                       : isAnti
                         ? `bg-blue-700 text-white font-serif border-4 border-black hover:bg-red-600 ${status === 'SENT' ? 'bg-green-700' : ''}`
                         : isHyper
                           ? `bg-transparent text-black font-sans font-normal border border-gray-300 hover:border-black rounded-full w-auto px-12 mx-auto ${status === 'SENT' ? 'text-gray-400 border-gray-100' : ''}`
                           : isGrain
                             ? `bg-grain-dark text-white font-courier border border-transparent hover:bg-white hover:text-grain-dark hover:border-grain-dark ${status === 'SENT' ? 'bg-white text-grain-dark border-grain-dark' : ''}`
                             : isLux
                               ? `bg-white text-black font-outfit uppercase tracking-widest hover:bg-gray-200 rounded-full w-auto px-10 ${status === 'SENT' ? 'bg-green-500 text-white' : ''}`
                       : `border border-white text-white hover:bg-white hover:text-black hover:animate-glitch ${status === 'SENT' ? 'bg-green-500 border-green-500 text-black' : ''}`}
                  `}
                >
                  {status === 'IDLE' && (
                    <>
                      {isHyper ? 'Send' : isLux ? 'SEND MESSAGE' : '[SEND_PACKET]'} {!isHyper && !isLux && <Send size={16} />}
                    </>
                  )}
                  {status === 'SENDING' && (isHyper ? 'Sending...' : 'UPLOADING...')}
                  {status === 'SENT' && (isHyper ? 'Sent' : 'TRANSMISSION COMPLETE')}
                </button>
              </div>
            </form>
            
            {status === 'SENT' && (
               <div className={`mt-4 text-xs font-mono ${isNeu ? 'text-black font-bold' : isGlass ? 'text-green-300' : isClay ? 'text-green-600 font-bold' : isAnti ? 'text-black bg-white border border-black p-1' : isHyper || isLux ? 'hidden' : isGrain ? 'text-grain-dark font-courier' : 'text-green-500'}`}>
                  {'>'} Packet verified. Checksum OK.
                  <br />
                  {'>'} Awaiting operator response...
               </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;