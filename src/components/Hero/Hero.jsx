import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaRegFileAlt } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-y-40 mt-30">
      <div className="flex justify-center flex-wrap mx-5 items-center gap-20">
        <div className="flex flex-col gap-5">
          <p className="text-3xl">Hi there</p>
          <p className="text-5xl font-extrabold">I'm Jyrex</p>
          <p className="text-4xl">I am a Full Stack Developer</p>
          <div className="**:size-8 flex gap-3 *:text-slate-400 *:hover:text-white *:ease-out *:duration-300">
            <a href="https://github.com/JyrexRonaldo">
              <VscGithubAlt />
            </a>
            <a href="">
              <SlSocialLinkedin />
            </a>
            <a href="">
              <FaRegFileAlt />
            </a>
          </div>
        </div>
        <div>
          <img src="icons/developing.png" className="w-60" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center px-5 gap-5">
        <p className="text-6xl font-extrabold">About me</p>
        <p className="text-center text-xl max-w-4xl">
          I'm a full-stack web developer with an apt for learning new technologies. I
          primarily use React.js and Node.js with Express to bring ideas into
          reality.
        </p>
      </div>
    </div>
  );
}

export default Hero;
