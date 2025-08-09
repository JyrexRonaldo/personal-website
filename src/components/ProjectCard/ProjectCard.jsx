import { VscGithubAlt } from "react-icons/vsc";
import { FaLink } from "react-icons/fa6";

function ProjectCard({ data }) {
  console.log(data);
  const stackDivs = data.techStack.map((data, index) => {
    return (
      <div
        key={index}
        className="w-max px-2 py-1 rounded-md flex items-center gap-1.5 bg-cyan-950"
      >
        <img className="w-5" src={data.iconUrl} alt={data.name} />
        <p className="text-sm">{data.name}</p>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-[1fr_1fr] items-stretch max-w-6xl ">
      <img className="object-fill" src={data.imgUrl} alt={data.imgUrl} />

      <div className="bg-gray-700/60 p-5 flex flex-col gap-3">
        <p className="text-4xl font-bold">{data.projectName}</p>
        <div>{stackDivs}</div>
        <p className="font-extralight">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pari
        </p>
        <span className="flex gap-3 *:gap-1 *:flex *:items-center *:rounded-md *:px-2 *:py-1 mt-auto">
          <span className="bg-black">
            <VscGithubAlt />
            <a href={data.codeUrl}>Code</a>
          </span>
          <span className="bg-blue-600">
            <FaLink />
            <a href={data.previewUrl}>Preview</a>
          </span>
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
