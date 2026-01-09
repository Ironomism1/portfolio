
import React from 'react';
import { Shield, Lock, Globe, Terminal, Cpu, Zap, Activity, ShieldCheck, LucideIcon } from 'lucide-react';

interface Pillar {
  title: string;
  concepts: string[];
  Icon: LucideIcon;
}

const Cybersecurity: React.FC = () => {
  const conceptualPillars: Pillar[] = [
    { 
      title: "Application Security", 
      concepts: ["OWASP Top 10", "Input Validation", "Cross-Site Scripting (XSS)", "SQL Injection Mitigation"],
      Icon: Terminal 
    },
    { 
      title: "Cryptographic Architecture", 
      concepts: ["Secure Hashing (SHA-256)", "Asymmetric Encryption (RSA/ECC)", "TLS/SSL Protocols", "JWT & OAuth2 Security"],
      Icon: Lock 
    },
    { 
      title: "Network Hardening", 
      concepts: ["Zero Trust Architecture", "Firewall Orchestration", "Protocol Auditing", "Intrusion Detection Systems"],
      Icon: Globe 
    },
    { 
      title: "Secure AI Orchestration", 
      concepts: ["Prompt Injection Defense", "Output Sanitization", "Adversarial Attack Mitigation", "Agentic Guardrails"],
      Icon: Cpu 
    }
  ];

  return (
    <section id="security" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-red-500 mb-6">Security Engineering</h2>
            <h3 className="text-5xl font-black text-white mb-8 uppercase tracking-tighter">Defensive Systems</h3>
            <p className="text-slate-400 text-xl leading-relaxed mb-12 font-light">
              Security is treated as a mandatory engineering layer. I build systems by adopting a <span className="text-white font-medium">zero-trust mindset</span>, ensuring resilience from the application layer down to the network infrastructure.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
               {conceptualPillars.map((pillar, i) => (
                 <div key={i} className="group p-8 rounded-[32px] bg-slate-900/10 border border-slate-800/40 hover:border-red-500/30 transition-all duration-500">
                   <div className="mb-6 p-4 inline-block rounded-2xl bg-red-500/5 group-hover:bg-red-500/10 transition-colors">
                     <pillar.Icon className="text-red-500" size={24} />
                   </div>
                   <h4 className="text-lg font-bold text-white mb-4">{pillar.title}</h4>
                   <ul className="space-y-2">
                     {pillar.concepts.map((concept, idx) => (
                       <li key={idx} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                         <div className="w-1 h-1 rounded-full bg-red-500/40" />
                         {concept}
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            <div className="relative group p-10 rounded-[40px] bg-slate-900/20 border border-white/5 backdrop-blur-sm overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
               <ShieldCheck className="text-red-500 mb-8" size={48} />
               <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">The Secure Builder Philosophy</h4>
               <ul className="space-y-6">
                 <li className="flex gap-4 group/item">
                   <div className="mt-1.5 p-1 rounded-full bg-red-500/10 text-red-500 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                     <Zap size={14} />
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm mb-1">CI/CD Integrated Security</p>
                     <p className="text-slate-400 text-sm leading-relaxed">Security as a gated prerequisite in the automated delivery pipeline, not a final audit step.</p>
                   </div>
                 </li>
                 <li className="flex gap-4 group/item">
                   <div className="mt-1.5 p-1 rounded-full bg-red-500/10 text-red-500 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                     <Activity size={14} />
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm mb-1">Defense in Depth</p>
                     <p className="text-slate-400 text-sm leading-relaxed">Implementing multiple layers of redundancy to protect critical data and system state.</p>
                   </div>
                 </li>
                 <li className="flex gap-4 group/item">
                   <div className="mt-1.5 p-1 rounded-full bg-red-500/10 text-red-500 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                     <Lock size={14} />
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm mb-1">Least Privilege Protocol</p>
                     <p className="text-slate-400 text-sm leading-relaxed">Ensuring every agent and system component operates with the minimum required permissions.</p>
                   </div>
                 </li>
               </ul>
            </div>

            <div className="p-10 rounded-[40px] bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-red-500/60 mb-2">Technical Observability</p>
                <p className="text-slate-400 text-sm font-light italic leading-relaxed">"System security is derived from visibility. If you cannot observe it, you cannot secure it."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cybersecurity;
