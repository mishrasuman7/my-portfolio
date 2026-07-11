import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  reverse?: boolean; // For alternating layouts if needed later, or just standard stack
}

export default function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <div className="glass rounded-[24px] p-6 md:p-8 lg:p-12 flex flex-col gap-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-card group border border-border hover:border-border-hover relative overflow-hidden">
      {/* Optional gradient accent in background on hover */}
      <div className="absolute -inset-full top-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
        <div className="flex flex-col gap-2 flex-1">
          {project.context && (
            <span className="text-xs font-mono tracking-widest text-accent uppercase mb-2">
              {project.context}
            </span>
          )}
          <h3 className="text-3xl font-bold text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-lg text-text-secondary font-medium">
            {project.subtitle}
          </p>
        </div>
        
        <div className="flex gap-4 items-center mt-4 md:mt-0">
          {project.live && (
             <a
             href={project.live}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-text-primary text-bg-primary text-sm font-semibold hover:bg-white/90 transition-colors"
           >
             Live App
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
           </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-text-primary text-sm font-semibold hover:bg-white/5 transition-colors"
          >
            GitHub
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
            <span className="w-8 h-px bg-border"></span> The Problem
          </h4>
          <p className="text-text-secondary leading-relaxed">
            {project.problem}
          </p>
          
          <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2 mt-4">
             <span className="w-8 h-px bg-border"></span> The Solution
          </h4>
          <ul className="flex flex-col gap-3">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-text-secondary">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col justify-between p-6 bg-black/20 rounded-2xl border border-white/5">
           <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2 mb-4">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1.5 text-xs font-mono bg-white/5 text-text-primary rounded-md border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
           </div>

           <div className="mt-auto pt-6 border-t border-white/5">
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2 mb-3">
                Result
              </h4>
              <p className="text-text-primary font-medium text-lg border-l-2 border-accent pl-4">
                {project.result}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
