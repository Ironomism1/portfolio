
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="engineering" className="py-24 bg-black/50 scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
             <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-cyan-500 mb-4">The Mindset</h2>
             <p className="text-2xl font-black text-white leading-tight">Systems thinking over buzzwords.</p>
          </div>
          <div className="md:col-span-2 space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I don't just build applications; I design autonomous systems. My focus lies at the intersection of <span className="text-white font-semibold">Agentic AI Orchestration</span> and <span className="text-white font-semibold">Secure-by-Default Engineering</span>. 
            </p>
            <p>
              With a background rooted in full-stack development and a deep curiosity for multi-agent architectures, I specialize in bridging the gap between cutting-edge LLM capabilities and production-ready, resilient software infrastructure. 
            </p>
            <p>
              I prioritize high-velocity learning and observability, ensuring that the AI systems I deploy are not only intelligent but also scalable, auditable, and secure against modern threat vectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
