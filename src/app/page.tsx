import Menu from "@/components/ui/Menu/Menu";
import Hero from "@/components/Hero";
import Projects from "@/components/ui/ProjectModal/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
    <Menu />
    <Hero />
    <Projects />
    <About />
    </div>
  );
}