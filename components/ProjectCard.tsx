
import React, { useState } from 'react';
import { ExternalLink, Github, Database, Zap, AlertCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusBadge = () => {
    switch(project.status) {
      case 'live': return <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase"><Zap size={10} /> Production</span>;
      case 'in-progress': return <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase"><AlertCircle size={10} /> In Development</span>;
      case 'research': return <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase"><Info size={10} /> R&D Phase</span>;
    }
  };

  return (
    <div className={`group relative bg-slate-900/30 border border-slate-800 hover:border-${project.color}-500/50 rounded-xl overflow-hidden transition-all duration-500`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2.5 rounded-lg bg-${project.color}-500/10 text-${project.color}-400 border border-${project.color}-500/20`}>
             <Database size={20} />
          </div>
          {getStatusBadge()}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map(tech => (
            <span key={tech} className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-[10px] font-mono border border-slate-700/50">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.demoUrl ? (
            <a href={project.demoUrl} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-black text-sm font-bold hover:bg-${project.color}-400 transition-colors`}>
              Live Demo <ExternalLink size={14} />
            </a>
          ) : (
             <div className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-800 text-slate-500 text-sm font-bold cursor-not-allowed">
              Internal Tool
            </div>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-700 text-slate-300 hover:border-white hover:text-white transition-all">
              <Github size={18} />
            </a>
          )}
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 flex items-center justify-center gap-2 text-xs font-bold text-slate-500 hover:text-cyan-400 transition-colors"
        >
          {isExpanded ? 'Hide Details' : 'View System Design'}
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {isExpanded && (
        <div className="p-6 pt-0 border-t border-slate-800 bg-black/40 animate-fade-in-down">
          <div className="space-y-4 text-xs">
            <div>
              <p className="text-cyan-400 uppercase tracking-widest font-bold mb-1">The Problem</p>
              <p className="text-slate-300 leading-relaxed">{project.problemSolved}</p>
            </div>
            <div>
              <p className="text-cyan-400 uppercase tracking-widest font-bold mb-1">Architecture</p>
              <p className="text-slate-300 leading-relaxed">{project.architecture}</p>
            </div>
            <div>
              <p className="text-cyan-400 uppercase tracking-widest font-bold mb-1">AI Depth</p>
              <p className="text-slate-300 leading-relaxed">{project.depth}</p>
            </div>
            <div className="p-2.5 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
              <p className="text-emerald-400 font-bold mb-0.5 uppercase tracking-tighter">Key Outcome</p>
              <p className="text-slate-400 italic text-[11px]">{project.impact}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
