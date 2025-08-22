import { FaCode } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Projects({ projectDataCards, page = 'projectsList' }) {
  return (
    <div
      id="projects"
      className="flex flex-col gap-10 scroll-mt-15 mx-5   sm:mx-10"
    >
      <div className="flex items-center justify-center gap-4">
        <FaCode className="text-6xl font-extrabold" />
        <h1 className="text-6xl font-extrabold">Projects</h1>
      </div>
      <div className="flex flex-col items-center gap-15 *:hover:scale-105 *:ease-out *:duration-300">
        {projectDataCards}
        {page === "home" ? (
          <Link to="/projects">
            <p className="self-center">View more</p>
          </Link>
        ) : (
          <Link to="/">
            <p className="self-center">Go back</p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Projects;
