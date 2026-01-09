
import React from 'react';
import { Brain, Network, Cpu, Database, Globe } from 'lucide-react';

const AppliedAI: React.FC = () => {
  const highlights = [
    { icon: <Network size={20} />, label: 'Agentic Architectures', value: 'Autonomous logic' },
    { icon: <Database size={20} />, label: 'Context Windows', value: 'Vector memory' },
    { icon: <Globe size={20} />, label: 'Edge Inference', value: 'Local LLMs' }
  ];

  return (
    <section id="applied-ai" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-xs uppercase tracking-[0.6em] font-black text-cyan-500 mb-8">Applied Intelligence</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
              AI System <br /><span className="text-slate-500">Orchestration.</span>
            </h3>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-xl">
              Engineering the intelligence layer. I specialize in building agents that don't just process text, but reason and execute within complex software environments.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="p-5 rounded-3xl bg-slate-900/20 border border-white/5 backdrop-blur-sm">
                  <div className="text-cyan-400 mb-3">{h.icon}</div>
                  <p className="text-[9px] uppercase tracking-widest text-slate-500 font-black mb-1">{h.label}</p>
                  <p className="text-xs text-white font-bold tracking-tight">{h.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-lg">
            <div className="p-8 md:p-12 bg-[#0a0a0a] border border-cyan-500/40 rounded-[48px] shadow-[0_0_80px_-20px_rgba(34,211,238,0.15)] relative group transition-all duration-700 hover:border-cyan-400 hover:shadow-[0_0_100px_-20px_rgba(34,211,238,0.25)]">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
               
               <div className="mb-10 w-full p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/40 flex items-center justify-center">
                 <Brain className="text-cyan-400 w-12 h-12 animate-pulse" />
               </div>

               <h4 className="text-2xl font-black mb-10 uppercase tracking-[0.25em] text-cyan-400">
                 APPLIED AI & ML
               </h4>

               <ul className="space-y-6">
                 {[
                   'Neural Network Fundamentals',
                   'CNNs for Computer Vision',
                   'Supervised/Unsupervised Learning',
                   'LLM Integration & Prompting',
                   'Agentic Systems (LangChain)',
                   'Local Inference (Ollama)',
                   'ML Data Pipelines'
                 ].map((skill, idx) => (
                   <li key={idx} className="flex items-center gap-5 group/item">
                     <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] transition-transform group-hover/item:scale-125 flex-shrink-0" />
                     <span className="text-slate-300 text-lg font-medium tracking-tight group-hover/item:text-white transition-colors duration-300">
                       {skill}
                     </span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppliedAI;
