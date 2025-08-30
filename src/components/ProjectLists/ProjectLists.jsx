import Projects from "../Projects/Projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import portofolioData from "../../../portofolioData/portofolioData";

function ProjectLists() {
  const projectsData = portofolioData.projectsData;

  // console.log(projectsData)

  const projectDataCards = projectsData.map((data, index) => {
    return <ProjectCard key={index} data={data} />;
  });

  return (
    <>
      <div className="h-screen scroll-smooth w-screen bg-[url('/wallpaper.jpg')] bg-cover text-white flex flex-col justify-between gap-y-15 overflow-y-auto pt-15">
        <div>
          <p className="text-center text-red-700">Projects may take long to load due to prior server inactivity</p>
          <Projects projectDataCards={projectDataCards} />
        </div>
        <footer className="h-10 text-xl font-extrabold flex justify-center items-center bg-black/70 py-7">
          Made by Jyrex
        </footer>
      </div>
    </>
  );
}

export default ProjectLists;
