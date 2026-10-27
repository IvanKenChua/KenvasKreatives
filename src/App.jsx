import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Work } from "@/sections/Work";
import { Process } from "@/sections/Process";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
