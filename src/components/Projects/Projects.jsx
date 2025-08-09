import { FaCode } from "react-icons/fa6";
import ProjectCard from "../ProjectCard/ProjectCard";
import portofolioData from "../../../portofolioData/portofolioData";

function Projects() {
  const projectsData = portofolioData.projectsData;

  // console.log(projectsData)

  const projectDataCards = projectsData.map((data, index) => {
    return <ProjectCard key={index} data={data} />;
  });

  return (
    <div id="projects" className="flex flex-col gap-10 scroll-mt-15 mx-5   sm:mx-10">
      <div className="flex items-center justify-center gap-4">
        <FaCode className="text-6xl font-extrabold" />
        <h1 className="text-6xl font-extrabold">Projects</h1>
      </div>
      <div className="flex flex-col items-center gap-15 *:hover:scale-105 *:ease-out *:duration-300">
        {projectDataCards}
      </div>
    </div>
  );
}

export default Projects;
