import { credentials } from "@/lib/data";

export default function Credentials() {
  return (
    <section className="py-24 border-y border-border bg-bg-primary overflow-hidden">
      <div className="section-container relative">
        <h3 className="text-xl font-bold mb-8 text-center text-text-secondary uppercase tracking-widest">
          Certifications & Hackathons
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {credentials.map((cred, idx) => (
            <a 
              key={idx}
              href={cred.url !== "#" ? cred.url : undefined}
              target={cred.url !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-6 py-4 rounded-xl border transition-all duration-300 ${
                cred.url !== "#" 
                  ? "bg-bg-card border-border hover:border-accent hover:shadow-glow cursor-pointer group" 
                  : "bg-bg-card/50 border-border/50 opacity-80 cursor-default"
              }`}
            >
              <div className={`p-3 rounded-full ${cred.type === 'hackathon' ? 'bg-orange-500/10 text-orange-400' : 'bg-blue-500/10 text-blue-400'}`}>
                {cred.type === 'hackathon' ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                )}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-text-primary text-sm md:text-base group-hover:text-accent transition-colors">
                  {cred.title}
                </span>
                <div className="flex items-center gap-2 text-xs md:text-sm text-text-secondary">
                  <span>{cred.issuer}</span>
                  <span className="w-1 h-1 rounded-full bg-border"></span>
                  <span>{cred.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
