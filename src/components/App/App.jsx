import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import TeckStack from "../TechStack/TechStack";
import Contact from "../Contact/Contact";
import portofolioData from "../../../portofolioData/portofolioData";
import ProjectCard from "../ProjectCard/ProjectCard";

function App() {

  const projectsData = portofolioData.projectsData.slice(0, 2);

  // console.log(projectsData)

  const projectDataCards = projectsData.map((data, index) => {
    return <ProjectCard key={index} data={data} />;
  });

  return (
    <>
      <div className="h-screen scroll-smooth w-screen bg-[url('/wallpaper.jpg')] bg-cover text-white flex flex-col justify-between gap-y-40 overflow-y-auto ">
        <NavBar />
        <Hero />
        <Projects projectDataCards={projectDataCards} page={'home'} />
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
