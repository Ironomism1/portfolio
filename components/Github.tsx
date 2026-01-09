
import React from 'react';
import { Github as GithubIcon, Star, GitBranch, ExternalLink } from 'lucide-react';

const Github: React.FC = () => {
  return (
    <section id="github" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
             <h2 className="text-3xl font-black text-white mb-2">Engineered Repositories</h2>
             <p className="text-slate-400">Commit history and system architecture diagrams.</p>
           </div>
           <a href="https://github.com/Ironomism1/ironomism1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors">
             Explore Profile <ExternalLink size={16} />
           </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center min-h-[240px]">
             <img 
               src="https://github-readme-stats.vercel.app/api?username=Ironomism1&show_icons=true&theme=dark&hide_border=true&bg_color=0d1117&title_color=22d3ee&icon_color=22d3ee&text_color=e2e8f0" 
               alt="GitHub Stats" 
               className="w-full max-w-md"
             />
          </div>
          <div className="bg-[#0d1117] border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center min-h-[240px]">
             <img 
               src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ironomism1&layout=compact&theme=dark&hide_border=true&bg_color=0d1117&title_color=22d3ee&text_color=e2e8f0" 
               alt="Top Languages" 
               className="w-full max-w-md"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
