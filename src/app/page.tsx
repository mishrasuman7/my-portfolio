import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        {/* Placeholder for future sections */}
        <div className="section-container py-32 text-center opacity-50">
          <p>More sections coming soon...</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
