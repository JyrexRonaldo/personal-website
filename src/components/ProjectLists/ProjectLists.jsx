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
        <Projects projectDataCards={projectDataCards} />
        <footer className="h-10 text-xl font-extrabold flex justify-center items-center bg-black/70 py-7">
          Made by Jyrex
        </footer>
      </div>
    </>
  );
}

export default ProjectLists;
