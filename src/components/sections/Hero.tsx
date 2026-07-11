import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="section-container text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-accent/20 mb-8 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-text-secondary">{siteConfig.availability}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          Hi, I&apos;m <span className="text-text-primary">{siteConfig.name.split(" ")[0]}</span> <br className="hidden md:block" />
          <span className="gradient-text">{siteConfig.role}</span>
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl text-lg md:text-xl text-text-secondary mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          {siteConfig.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-white font-semibold shadow-[0_0_40px_rgba(124,92,252,0.4)] hover:shadow-[0_0_60px_rgba(124,92,252,0.6)] hover:bg-accent-hover hover:-translate-y-1 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass text-text-primary font-semibold hover:bg-white/5 transition-colors border border-border hover:border-border-hover"
          >
            Contact Me
          </a>
        </div>

        {/* Trust Row / Quick Stats (Optional but good for portfolio) */}
        <div className="mt-20 pt-10 border-t border-border/50 w-full max-w-3xl flex flex-wrap justify-center gap-x-12 gap-y-6 animate-fade-in-up text-text-tertiary" style={{ animationDelay: "400ms" }}>
            <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-text-primary">3+</span>
                <span className="text-sm uppercase tracking-wider">Hackathons</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-text-primary">AWS</span>
                <span className="text-sm uppercase tracking-wider">Cloud Native</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-text-primary">AI</span>
                <span className="text-sm uppercase tracking-wider">Integration</span>
            </div>
        </div>
      </div>
    </section>
  );
}
