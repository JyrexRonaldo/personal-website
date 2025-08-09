import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import TeckStack from "../TechStack/TechStack";
import Contact from "../Contact/Contact";

function App() {
  return (
    <>
      <div className="h-screen scroll-smooth w-screen bg-[url('/wallpaper.jpg')] bg-cover text-white flex flex-col justify-between gap-y-40 overflow-y-auto ">
        <NavBar />
        <Hero />
        <Projects />
        <TeckStack />
        <Contact />
        <footer className="h-10 text-xl font-extrabold flex justify-center items-center bg-black/70 py-7">
          Made by Jyrex
        </footer>
      </div>
    </>
  );
}

export default App;
