import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Header />
      </section>

      <HeroSection />
      <section id="projects">
        <ProjectsSection />
      </section>
      <TapeSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}
