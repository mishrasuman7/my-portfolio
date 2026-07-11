import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="gradient-text">Engineer's</span> Mindset
            </h2>
            <div className="flex flex-col gap-4 text-lg text-text-secondary leading-relaxed">
              <p>{about.bio}</p>
              <p className="pl-4 border-l-2 border-accent text-text-primary font-medium italic">
                "{about.differentiator}"
              </p>
            </div>
            
            <div className="mt-8 flex items-start gap-4 p-6 glass rounded-2xl border border-border">
              <div className="p-3 rounded-full bg-accent/10 text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-text-primary">Current Focus</h4>
                <p className="text-text-secondary text-sm mt-1">
                  {about.education.degree} at {about.education.institution} ({about.education.period})
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass border border-border p-2 relative z-10">
              <div className="w-full h-full rounded-xl bg-bg-secondary flex items-center justify-center border border-border relative overflow-hidden group">
                  {/* Since we don't have a photo yet, creating a cool geometric/code placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-bg-tertiary to-bg-primary" />
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-transparent transition-opacity duration-500 group-hover:opacity-40" />
                  
                  <svg className="w-32 h-32 text-border-hover group-hover:text-accent/50 transition-colors duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <div className="absolute bottom-6 left-6 right-6">
                     <div className="h-1.5 w-1/3 bg-border rounded-full mb-2" />
                     <div className="h-1.5 w-1/2 bg-border rounded-full mb-2" />
                     <div className="h-1.5 w-1/4 bg-accent/50 rounded-full" />
                  </div>
              </div>
            </div>
            {/* Decorative dots behind image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(var(--border)_2px,transparent_2px)] [background-size:16px_16px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
