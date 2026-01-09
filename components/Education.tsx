
import React from 'react';
import { BookOpen, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'Bennett University',
      degree: 'B.Tech in Computer Science (AI & ML Specialization)',
      duration: '2024 - 2028',
      location: 'Greater Noida, India',
      description: 'Focused on advanced multi-agent systems, deep learning architectures, and scalable full-stack engineering. Research active in the intersection of secure AI deployment and edge-based LLM inference.',
      color: 'purple'
    },
    {
      institution: 'St. Francis School',
      degree: 'Higher Secondary Education (STEM Focus)',
      duration: '2009 - 2024',
      location: 'Indirapuram, India',
      description: 'Solidified mathematical and computational foundations. Consistently active in elite programming clubs and competitive math platforms.',
      color: 'emerald'
    }
  ];

  return (
    <section className="py-24 bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black text-white mb-12 text-center uppercase tracking-widest">Academic Foundation</h2>
        
        <div className="space-y-12">
          {education.map((edu, i) => (
            <div key={i} className="relative pl-12 border-l-2 border-slate-800 group">
              <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-black border-2 border-${edu.color}-500 group-hover:scale-125 transition-transform`} />
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                <span className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                  <Calendar size={12} /> {edu.duration}
                </span>
              </div>
              
              <p className={`text-lg font-semibold text-${edu.color}-400 mb-4`}>{edu.degree}</p>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                <MapPin size={14} /> {edu.location}
              </div>
              
              <p className="text-slate-400 leading-relaxed max-w-2xl">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
