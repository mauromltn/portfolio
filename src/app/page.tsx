import Hero from "@/components/Hero";
import Projects from "@/components/ProjectModal/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
    <Hero />
    <Projects />
    <About />
    </div>
  );
}