import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
    <Header />
    <Hero />
    <Projects />
    </div>
  );
}