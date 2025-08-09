import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaRegFileAlt } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-y-40">
      <div className="flex justify-center items-center gap-20">
        <div className="flex flex-col gap-5">
          <p className="text-3xl">Hi there</p>
          <p className="text-5xl font-extrabold">I'm Jyrex</p>
          <p className="text-4xl">I am a Full Stack Developer</p>
          <div className="*:size-6 flex gap-3">
            <VscGithubAlt  />
            <SlSocialLinkedin  />
            <FaRegFileAlt  />
          </div>
        </div>
        <div>
          <img src="icons/developing.png" className="w-60" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center max-w-334">
        <p className="text-6xl font-extrabold">About me</p>
        <p className=" text-center text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          iusto! Voluptatum adipisci minima minus, eveniet aliquam expedita
          exercitationem ex voluptates perspiciatis sequi, vero placeat sint
          nihil earum ratione provident possimus!
        </p>
      </div>
    </div>
  );
}

export default Hero;
