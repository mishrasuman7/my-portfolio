import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-bg-secondary/50">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Tools, languages, and frameworks I use to build scalable products and AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => (
            <div 
              key={category.label} 
              className="glass p-6 rounded-2xl flex flex-col gap-4 border border-border hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-text-primary">{category.label}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li 
                    key={item}
                    className="px-3 py-1.5 bg-bg-card text-text-secondary text-sm font-medium rounded-lg border border-border hover:text-accent hover:border-accent/30 transition-colors cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
