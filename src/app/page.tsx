import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="section-container py-32 text-center">
          <h1 className="text-4xl font-bold gradient-text">
            Portfolio — Sections Coming Next
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
