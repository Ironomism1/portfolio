
import React from 'react';
import { Shield, Eye, AlertTriangle, Zap, Terminal } from 'lucide-react';

const ProjectSentinel: React.FC = () => {
  return (
    <section id="sentinel" className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Zap size={12} /> Active Research Project
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Project Sentinel</h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed font-light">
              A specialized security agent designed to bridge the gap between traditional system observability and AI-driven threat reasoning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: <Eye size={18} />, label: 'Real-time Monitoring', desc: 'Ingesting system logs for anomaly detection.' },
                { icon: <AlertTriangle size={18} />, label: 'Threat Reasoning', desc: 'LLM-powered analysis of attack vectors.' },
                { icon: <Terminal size={18} />, label: 'Remediation Assist', desc: 'Generating context-aware patching scripts.' },
                { icon: <Shield size={18} />, label: 'Observability', desc: 'Centralized view of AI/System health.' }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="text-red-400 mb-2">{item.icon}</div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
             <div className="bg-black/80 rounded-2xl border border-red-500/20 p-8 font-mono text-xs text-slate-400 shadow-2xl shadow-red-500/5">
                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <span className="text-red-400 font-bold uppercase tracking-widest text-[10px]">Sentinel Engine v0.1</span>
                </div>
                <div className="space-y-3">
                  <p className="text-slate-500">>> Initializing Log Stream: /var/log/syslog</p>
                  <p className="text-slate-500">>> Context Buffer: 4096 tokens allocated</p>
                  <p className="text-emerald-400">>> HEURISTICS: Normal baseline established.</p>
                  <div className="py-2 px-3 bg-red-500/10 border-l-2 border-red-500 rounded my-4">
                    <p className="text-red-400 font-bold">[ALERT] Rapid API access spikes from IP: 192.168.1.45</p>
                    <p className="text-slate-300 mt-1">SENTINEL_REASONING: Pattern suggests potential credential stuffing. Initiating adaptive rate-limiting.</p>
                  </div>
                  <p className="text-slate-500">>> ACTION: Policy ID 492 deployed to Edge Gateway.</p>
                  <p className="animate-pulse">_</p>
                </div>
             </div>
             <p className="mt-8 text-slate-500 text-sm italic">
               Sentinel is built using FastAPI and specialized LLM agents configured for low-hallucination security auditing.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSentinel;
