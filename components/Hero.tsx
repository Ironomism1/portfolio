
import React, { useEffect, useRef } from 'react';
import { Terminal, Github, Linkedin, ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const particleCount = 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.5)';
        ctx.fill();

        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.25 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="engineering" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-50" />
      
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 mb-8 rounded-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] animate-fade-in-down shadow-2xl">
          <Terminal size={16} className="animate-pulse" />
          <span>Intelligent Systems Engineering</span>
        </div>
        
        <div className="mb-6 animate-fade-in">
          <h2 className="text-xl md:text-3xl font-black text-slate-400 uppercase tracking-[0.6em] mb-2">
            Shriyansh Mishra
          </h2>
          <div className="h-0.5 w-24 bg-cyan-500 mx-auto rounded-full" />
        </div>
        
        <h1 className="text-7xl md:text-9xl lg:text-[140px] font-black tracking-tighter mb-12 select-none leading-[0.8]">
          <span className="block text-white transition-transform hover:scale-[1.02] duration-700">Architecting</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent py-4">
            Systems & Infra
          </span>
        </h1>
        
        <p className="text-xl md:text-3xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
          Engineering <span className="text-white font-medium">autonomous agents</span> and <span className="text-white font-medium">secure-by-design infrastructure</span> for the next generation of scalable intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a href="#projects" className="group relative px-14 py-6 bg-white text-black font-black uppercase tracking-[0.25em] text-[11px] rounded-full flex items-center gap-4 hover:bg-cyan-400 transition-all duration-500 shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] active:scale-95">
            View System Builds
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/Ironomism1/ironomism1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-6 bg-slate-900/60 backdrop-blur-3xl border border-white/10 hover:border-cyan-400 hover:bg-cyan-400/10 text-white rounded-3xl transition-all duration-500 shadow-2xl group flex items-center justify-center transform hover:-translate-y-1"
              title="GitHub Profile"
            >
              <Github size={36} className="group-hover:scale-110 transition-transform text-slate-200 group-hover:text-cyan-400" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shriyansh-mishra-378a14324/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-6 bg-slate-900/60 backdrop-blur-3xl border border-white/10 hover:border-blue-400 hover:bg-blue-400/10 text-white rounded-3xl transition-all duration-500 shadow-2xl group flex items-center justify-center transform hover:-translate-y-1"
              title="LinkedIn Profile"
            >
              <Linkedin size={36} className="group-hover:scale-110 transition-transform text-slate-200 group-hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-slate-700 animate-bounce hidden md:block opacity-60">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
