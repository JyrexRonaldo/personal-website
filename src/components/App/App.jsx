import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import TeckStack from "../TechStack/TechStack";
import Contact from "../Contact/Contact";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-[url('/wallpaper.jpg')] bg-cover text-white">
        <NavBar />
        <Hero />
        <Projects />
        <TeckStack />
        <Contact />
        <footer className="mt-auto">Made by Jyrex</footer>
      </div>
    </>
  );
}

export default App;
