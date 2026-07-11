import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Credentials from "@/components/sections/Credentials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-accent text-white rounded-md">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Credentials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
