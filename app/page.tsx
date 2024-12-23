import About from "@/components/about";
import Contact from "@/components/contact";
import HomePage from "@/components/home";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
