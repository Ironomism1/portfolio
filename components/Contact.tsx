
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const contactLinks = [
    { icon: <Mail size={22} />, label: 'Direct Email', value: 'shriyanshmishra2006@gmail.com', href: 'mailto:shriyanshmishra2006@gmail.com', color: 'cyan' },
    { icon: <Linkedin size={22} />, label: 'Professional Networking', value: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/shriyansh-mishra-378a14324/', color: 'blue' },
    { icon: <Github size={22} />, label: 'Source Repositories', value: 'GitHub / ironomism1', href: 'https://github.com/Ironomism1/ironomism1', color: 'slate' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] font-black text-cyan-500 mb-6">Connect</h2>
              <h3 className="text-5xl font-black text-white mb-8 tracking-tighter">Let's build the <br/><span className="text-slate-500">future together.</span></h3>
              <p className="text-slate-400 text-xl leading-relaxed max-w-lg font-light">
                I'm actively seeking opportunities to apply my AI and software engineering skills in high-stakes environments.
              </p>
            </div>

            <div className="space-y-6">
              {contactLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 rounded-3xl bg-slate-900/30 border border-slate-800/40 hover:border-cyan-500/40 hover:bg-slate-900/50 transition-all group"
                >
                  <span className={`p-4 rounded-2xl bg-slate-900 text-slate-400 group-hover:text-cyan-400 transition-all group-hover:scale-110 shadow-lg`}>
                    {link.icon}
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black mb-1">{link.label}</p>
                    <p className="text-lg text-slate-200 group-hover:text-white transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-8 pt-6">
              <div className="flex items-center gap-3">
                 <MapPin size={18} className="text-cyan-500" />
                 <span className="text-sm font-bold text-slate-400">UP, India</span>
              </div>
              <div className="flex items-center gap-3">
                 <Globe size={18} className="text-emerald-500" />
                 <span className="text-sm font-bold text-slate-400">Open to Relocation</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-[40px] blur-2xl opacity-50" />
            
            <div className="relative bg-[#0a0a0a] border border-white/5 rounded-[32px] p-10 md:p-14 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[11px] uppercase font-black text-slate-500 tracking-[0.2em] px-1">Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-slate-900/40 border border-white/5 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900 transition-all placeholder:text-slate-700 font-medium"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[11px] uppercase font-black text-slate-500 tracking-[0.2em] px-1">Email</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full bg-slate-900/40 border border-white/5 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900 transition-all placeholder:text-slate-700 font-medium"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] uppercase font-black text-slate-500 tracking-[0.2em] px-1">Message</label>
                  <textarea 
                    required 
                    rows={6} 
                    placeholder="Tell me about your project or opportunity..." 
                    className="w-full bg-slate-900/40 border border-white/5 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900 transition-all resize-none placeholder:text-slate-700 font-medium"
                  />
                </div>

                <button 
                  disabled={formState !== 'idle'}
                  className={`group w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-xl
                    ${formState === 'success' ? 'bg-emerald-500 text-black' : 'bg-white text-black hover:bg-cyan-400'}`}
                >
                  {formState === 'idle' && (
                    <>Send Transmission <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                  {formState === 'sending' && (
                    <><Loader2 size={16} className="animate-spin" /> Transmitting...</>
                  )}
                  {formState === 'success' && (
                    <><CheckCircle size={16} /> Transmission Complete</>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
