
import React from 'react';
import { Share2, Zap, BarChart, Terminal, Cpu } from 'lucide-react';

const DSAFoundations: React.FC = () => {
  return (
    <section id="dsa" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-xs uppercase tracking-[0.3em] font-black text-amber-500 mb-4">Core Foundations</h2>
            <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Computational Efficiency</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              AI engineering is fundamentally rooted in optimized data structures and algorithmic precision. Systems are built around minimizing time and space complexity.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <Zap size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">O(log n) Thinking</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <Share2 size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Graph Theory Mastery</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <BarChart size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Resource Optimization</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            <div className="p-10 bg-slate-900/20 border border-slate-800/60 rounded-[32px] hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/5 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 transition-colors">
                <Cpu className="text-amber-500" size={24} />
              </div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-[0.2em] text-amber-500">Data Structures in AI</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Leveraging priority queues for agentic task scheduling and tree-based structures for hierarchical decision trees. Utilizing vector embeddings for context retrieval in RAG architectures.
              </p>
            </div>
            <div className="p-10 bg-slate-900/20 border border-slate-800/60 rounded-[32px] hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/5 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 transition-colors">
                <Terminal className="text-amber-500" size={24} />
              </div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-[0.2em] text-amber-500">Complexity Analysis</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Rigorous Big-O auditing of backend microservices to maintain low-latency responses. Optimization of database indexing strategies and memory management for high-concurrency environments.
              </p>
            </div>
            <div className="col-span-full p-10 bg-gradient-to-r from-amber-500/5 to-transparent border border-amber-500/20 rounded-[32px]">
               <p className="text-slate-300 text-sm leading-relaxed font-medium">
                 "Algorithmic precision is the difference between a system that runs and a system that scales. I prioritize the implementation of efficient graph traversals and memory-safe concurrency patterns."
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSAFoundations;
