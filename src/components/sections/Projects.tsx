import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            A selection of my recent hackathon builds and independent projects, 
            focusing on AI integration, system architecture, and real-world problem solving.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
