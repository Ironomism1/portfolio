
import React from 'react';
import { Brain, Network, Database, Layers, Repeat, Eye } from 'lucide-react';

const AISystems: React.FC = () => {
  const pillars = [
    { icon: <Network className="text-cyan-400" />, title: 'Multi-Agent Orchestration', desc: 'Decentralized agents working in specialized hierarchies for complex task decomposition.' },
    { icon: <Database className="text-purple-400" />, title: 'Context & Memory', desc: 'Implementing RAG with hybrid search and long-term vector memory for persistent state.' },
    { icon: <Layers className="text-emerald-400" />, title: 'Tool Integration', desc: 'Autonomous capability for agents to interface with APIs, file systems, and databases.' },
    { icon: <Repeat className="text-amber-400" />, title: 'Evaluation Loops', desc: 'Rigorous LLM-as-a-judge patterns for continuous performance monitoring and guardrails.' },
    { icon: <Eye className="text-red-400" />, title: 'Responsible AI', desc: 'Embedding security guardrails and hallucination detection at the prompt-engineering layer.' },
  ];

  return (
    <section id="ai-systems" className="py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-black text-white mb-6">Agentic AI Architecture</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Moving beyond single-prompt completion into autonomous reasoning systems. My architecture patterns focus on creating agents that plan, execute, and reflect.
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
               <Brain size={40} className="text-cyan-400 mb-4" />
               <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">Core Philosophy</p>
               <p className="text-slate-400 text-xs italic">"Intelligence is only as good as the systems it operates within. Secure agents are built on observability."</p>
            </div>
          </div>
          
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {pillars.map((p, idx) => (
              <div key={idx} className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-slate-700 transition-all">
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISystems;
