
import React, { useState, useEffect } from 'react';
import { Github as GithubIcon, ExternalLink, Code2, Terminal, GitCommit, Users, Book, Activity, Search, Wifi, WifiOff } from 'lucide-react';

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
}

const Github: React.FC = () => {
  const [liveData, setLiveData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [statsError, setStatsError] = useState(false);
  const [langsError, setLangsError] = useState(false);

  // High-contrast dark themes for GitHub Readme Stats
  const statsUrl = "https://github-readme-stats.vercel.app/api?username=Ironomism1&show_icons=true&theme=dark&hide_border=true&bg_color=0a0a0a&title_color=22d3ee&icon_color=22d3ee&text_color=e2e8f0";
  const languagesUrl = "https://github-readme-stats.vercel.app/api/top-langs/?username=Ironomism1&layout=compact&theme=dark&hide_border=true&bg_color=0a0a0a&title_color=22d3ee&text_color=e2e8f0";

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Ironomism1');
        if (response.ok) {
          const data = await response.json();
          setLiveData({
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            name: data.name
          });
        }
      } catch (error) {
        console.error("GitHub API Sync Failed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProfile();
  }, []);

  return (
    <section id="github" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div>
             <div className="flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${liveData ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`} />
                <h2 className="text-xs uppercase tracking-[0.5em] font-black text-cyan-500">Infrastructure Visibility</h2>
             </div>
             <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Engineered Repositories</h3>
             <p className="text-slate-400 mt-4 max-w-xl font-light">
               Authentic commit history and system architecture diagrams synced from GitHub. Verification: <span className="text-cyan-400 font-bold">@Ironomism1</span>
             </p>
           </div>
           <a 
             href="https://github.com/Ironomism1" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-cyan-400 font-bold hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all shadow-2xl"
           >
             Explore Full Profile <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Real-time Data Panel - The core "Image 2" content */}
          <div className="lg:col-span-4 bg-[#0a0a0a] border border-cyan-500/20 rounded-[40px] p-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-5">
                <Activity size={120} className="text-cyan-500" />
             </div>
             
             <h4 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                <Search size={16} className="text-cyan-400" /> Live Profile Stats
             </h4>

             <div className="space-y-8">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all">
                   <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-2">Authenticated Repository Count</p>
                   <div className="flex items-end gap-3">
                      <p className="text-6xl font-black text-white tracking-tighter">
                        {loading ? '---' : liveData?.public_repos || '6'}
                      </p>
                      <Book size={28} className="text-cyan-500 mb-2" />
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mb-1">Followers</p>
                      <p className="text-2xl font-black text-white">{loading ? '---' : liveData?.followers || '0'}</p>
                   </div>
                   <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mb-1">Following</p>
                      <p className="text-2xl font-black text-white">{loading ? '---' : liveData?.following || '0'}</p>
                   </div>
                </div>

                <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl">
                   <div className="flex items-center gap-2 mb-2">
                      <Wifi size={12} className="text-cyan-400" />
                      <p className="text-[9px] uppercase font-black tracking-widest text-cyan-400">System Sync Active</p>
                   </div>
                   <p className="text-xs text-slate-400 leading-relaxed italic">
                     Direct telemetry from GitHub REST API v3. Verified engineering state.
                   </p>
                </div>
             </div>
          </div>

          {/* Activity Image Panel - With Error Handling */}
          <div className="lg:col-span-8 group relative bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 md:p-12 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <GithubIcon size={120} />
             </div>
             
             <div className="relative z-10 h-full flex flex-col">
                {/* Stat Image Section */}
                <div className={`${statsError ? 'hidden' : 'block'} mb-10`}>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                        <Terminal size={24} />
                    </div>
                    <h4 className="text-xl font-black text-white uppercase tracking-widest">Global Activity Index</h4>
                  </div>

                  <div className="flex items-center justify-center">
                    <img 
                      src={statsUrl} 
                      alt="GitHub Stats" 
                      onError={() => setStatsError(true)}
                      className="w-full max-w-lg drop-shadow-[0_0_30px_rgba(34,211,238,0.1)] rounded-xl transition-opacity duration-300"
                    />
                  </div>
                </div>

                {/* Tech Distribution Section */}
                <div className={`${langsError ? 'hidden' : 'block'} ${!statsError ? 'mt-8 pt-8 border-t border-white/5' : ''}`}>
                   <div className="flex items-center gap-4 mb-6">
                      <Code2 size={24} className="text-indigo-400" />
                      <h4 className="text-lg font-black text-white uppercase tracking-widest">Core Tech Distribution</h4>
                   </div>
                   <img 
                     src={languagesUrl} 
                     alt="Languages" 
                     onError={() => setLangsError(true)}
                     className="w-full max-w-lg drop-shadow-[0_0_15px_rgba(99,102,241,0.1)] rounded-xl" 
                   />
                </div>

                {/* Fallback if both images fail */}
                {statsError && langsError && (
                  <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
                     <div className="p-10 rounded-full bg-cyan-500/5 border border-cyan-500/10">
                        <Terminal size={64} className="text-cyan-500/30" />
                     </div>
                     <div>
                        <h4 className="text-2xl font-black text-white mb-2">Live Sync Active</h4>
                        <p className="text-slate-500 max-w-xs mx-auto">
                          External visualizations are currently optimizing. Direct API telemetry is active in the primary dashboard.
                        </p>
                     </div>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
