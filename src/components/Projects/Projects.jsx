import { FaCode } from "react-icons/fa6";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        <FaCode className="text-5xl font-extrabold" />
        <h1 className="text-5xl font-extrabold">Projects</h1>
      </div>
      <div>
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
