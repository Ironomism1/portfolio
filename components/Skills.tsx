
import React from 'react';
import { SKILL_CATEGORIES_DATA } from '../constants';

const Skills: React.FC = () => {
  const colorMap: Record<string, { border: string, text: string, bg: string, dot: string, shadow: string }> = {
    cyan: { border: 'border-cyan-500/40', text: 'text-cyan-400', bg: 'bg-cyan-500/5', dot: 'bg-cyan-400', shadow: 'shadow-[0_0_12px_rgba(34,211,238,0.8)]' },
    red: { border: 'border-red-500/40', text: 'text-red-400', bg: 'bg-red-500/5', dot: 'bg-red-400', shadow: 'shadow-[0_0_12px_rgba(248,113,113,0.8)]' },
    purple: { border: 'border-purple-500/40', text: 'text-purple-400', bg: 'bg-purple-500/5', dot: 'bg-purple-400', shadow: 'shadow-[0_0_12px_rgba(192,132,252,0.8)]' },
    emerald: { border: 'border-emerald-500/40', text: 'text-emerald-400', bg: 'bg-emerald-500/5', dot: 'bg-emerald-400', shadow: 'shadow-[0_0_12px_rgba(52,211,153,0.8)]' },
    blue: { border: 'border-blue-500/40', text: 'text-blue-400', bg: 'bg-blue-500/5', dot: 'bg-blue-400', shadow: 'shadow-[0_0_12px_rgba(96,165,250,0.8)]' }
  };

  return (
    <section id="skills" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-xs uppercase tracking-[0.5em] font-black text-cyan-500 mb-4">Technical Core</h2>
          <h3 className="text-4xl font-black text-white uppercase tracking-tight">Competencies & Engineering</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {SKILL_CATEGORIES_DATA.map((cat, i) => {
            const styles = colorMap[cat.color] || colorMap.cyan;
            return (
              <div 
                key={i} 
                className={`group p-8 xl:p-10 bg-[#0a0a0a] border ${styles.border} rounded-[40px] flex flex-col h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_-15px_rgba(34,211,238,0.1)]`}
              >
                <div className={`mb-8 w-full p-6 rounded-2xl ${styles.bg} border ${styles.border} flex items-center justify-center`}>
                  <cat.IconComponent className={`${styles.text} w-8 h-8`} />
                </div>

                <h3 className={`text-lg xl:text-xl font-black mb-8 uppercase tracking-widest ${styles.text} leading-tight`}>
                  {cat.title}
                </h3>

                <ul className="space-y-5 flex-grow">
                  {cat.skills.map(skill => (
                    <li key={skill} className="flex items-start gap-4 group/item">
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${styles.dot} ${styles.shadow} transition-transform group-hover/item:scale-125`} />
                      <span className="text-slate-300 text-sm xl:text-[15px] font-medium leading-snug group-hover/item:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
