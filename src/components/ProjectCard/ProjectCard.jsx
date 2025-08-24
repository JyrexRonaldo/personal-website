import { VscGithubAlt } from "react-icons/vsc";
import { FaLink } from "react-icons/fa6";

function ProjectCard({ data }) {
  const stackDivs = data.techStack.map((data, index) => {
    let divBgColor = "";
    switch (data.bgColor) {
      case "react":
        divBgColor = "bg-[#012F59]";
        break;
      case "postgresql":
        divBgColor = "bg-[#2C5FA7]";
        break;
      case "express":
      case "jest":
        divBgColor = "bg-[#9C5615]";
        break;
      case "node":
        divBgColor = "bg-[#023314]";
        break;
      case "socket":
      case "prisma":
        divBgColor = "bg-[#43464B]";
        break;
    }

    return (
      <div
        key={index}
        className={`w-max px-2 py-1 rounded-md flex items-center gap-1.5 ${divBgColor}`}
      >
        <img className="w-5" src={data.iconUrl} alt={data.name} />
        <p className="text-sm">{data.name}</p>
      </div>
    );
  });

  return (
    <div className="lg:grid lg:grid-cols-2 items-stretch max-w-6xl">
      <img
        className="object-fill rounded-t-xl lg:rounded-t-none lg:rounded-l-xl "
        src={data.imgUrl}
        alt={data.imgUrl}
      />

      <div className="bg-gray-700/30 p-5 flex flex-col gap-3 rounded-b-xl lg:rounded-b-none lg:rounded-r-xl  lg:rounded-br-xl ">
        <p className="text-4xl font-bold">{data.projectName}</p>
        <div className="flex gap-3 flex-wrap">{stackDivs}</div>
        <p className="font-extralight">{data.description}</p>
        <span className="flex gap-3 *:gap-1 *:flex *:items-center *:rounded-md *:px-2 *:py-1 mt-auto">
          <span className="bg-black">
            <VscGithubAlt />
            <a href={data.codeUrl} target="_blank">Code</a>
          </span>
          <span className="bg-blue-600">
            <FaLink />
            <a href={data.previewUrl} target="_blank">Preview</a>
          </span>
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
