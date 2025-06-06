import Menu from "@/components/ui/Menu/Menu";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
    <Menu />
    <Hero />
    <Projects />
    </div>
  );
}