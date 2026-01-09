
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Heart } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import AISystems from './components/AISystems';
import AppliedAI from './components/AppliedAI';
import Cybersecurity from './components/Cybersecurity';
import Skills from './components/Skills';
import GithubSection from './components/Github';
import Education from './components/Education';
import Contact from './components/Contact';
import { PROJECTS, NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        
        if (!targetId || targetId === "") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setMobileMenuOpen(false);
          return;
        }

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-cyan-500/30 overflow-x-hidden text-slate-200">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.5),rgba(5,5,5,1))]" />
        <div className="absolute inset-0 opacity-[0.05] animate-grid-move bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full animate-float" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full animate-float" style={{ animationDelay: '-5s' }} />
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-white/5 py-5 shadow-2xl' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter text-white group flex items-center gap-1">
            SHRIYANSH<span className="text-cyan-500 group-hover:text-white transition-colors duration-500">_</span>MISHRA
          </a>
          
          <div className="hidden md:flex gap-12">
            {NAV_ITEMS.map(item => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 hover:text-cyan-400 transition-all duration-500"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <button className="md:hidden text-white hover:text-cyan-400 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/5 p-10 flex flex-col gap-10 animate-fade-in shadow-2xl backdrop-blur-3xl">
             {NAV_ITEMS.map(item => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-xs uppercase tracking-[0.4em] font-black text-slate-300 hover:text-cyan-400 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10">
        <Hero />
        <About />
        
        <section id="projects" className="py-32 bg-transparent relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
              <div className="max-w-2xl">
                <h2 className="text-xs uppercase tracking-[0.5em] font-black text-cyan-500 mb-8">Engineering Portfolio</h2>
                <h3 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">Built for Scale.</h3>
                <p className="text-slate-400 text-xl font-light leading-relaxed">
                  A selection of projects emphasizing multi-agent autonomy, computer vision, and high-performance software engineering.
                </p>
              </div>
              <div className="flex gap-5 items-center text-[10px] font-black tracking-[0.3em] text-slate-400 bg-white/5 backdrop-blur-2xl px-8 py-4 rounded-2xl border border-white/5 shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,1)]" />
                <span>ENVIRONMENT: PRODUCTION_READY</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {PROJECTS.map(project => (
                <div key={project.id} className="project-card-glow">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <AppliedAI />
        <AISystems />
        <Cybersecurity />
        <Skills />
        <GithubSection />
        <Education />
        <Contact />
      </main>

      <footer className="pt-32 pb-16 bg-[#030303] border-t border-white/5 relative z-10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-cyan-400 mb-6 tracking-tight">
            Shriyansh's Portfolio
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            Architecting autonomous systems and secure-by-design software for the next generation of intelligence.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            {[
              { icon: <Github size={20} />, href: "https://github.com/Ironomism1/ironomism1", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shriyansh-mishra-378a14324/", label: "LinkedIn" },
              { icon: <Mail size={20} />, href: "mailto:shriyanshmishra2006@gmail.com", label: "Email" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all text-slate-400 hover:text-cyan-400 shadow-xl"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16 border-b border-white/5 pb-16">
            {NAV_ITEMS.map(item => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-xs uppercase tracking-[0.2em] font-black text-slate-500 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-slate-500 text-sm font-medium tracking-wide">
              &copy; {new Date().getFullYear()} Shriyansh Mishra. All rights reserved. • Made with <Heart size={14} className="inline text-red-500 animate-pulse mx-0.5" /> using React & TypeScript
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes grid-move { from { background-position: 0 0; } to { background-position: 50px 50px; } }
        @keyframes float { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, 30px); } }
        
        .animate-fade-in { animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-down { animation: fade-in-down 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-grid-move { animation: grid-move 5s linear infinite; }
        .animate-float { animation: float 15s ease-in-out infinite; }
        
        section { scroll-margin-top: 100px; }
        
        .project-card-glow {
          position: relative;
        }
        .project-card-glow::after {
          content: "";
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle at center, rgba(34, 211, 238, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
        }
        .project-card-glow:hover::after {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default App;
