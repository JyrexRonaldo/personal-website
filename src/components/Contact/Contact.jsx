import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col gap-3 text-center scroll-mt-15 mx-5 "
    >
      <h1 className="text-6xl font-extrabold">Contact Me</h1>
      <p className="text-xl">
        Feel free to reach out if you're looking for a developer, have a
        question, or just want to connect.
      </p>
      <div className="flex justify-center flex-wrap *:w-50 gap-10 *:flex *:flex-col *:gap-1 *:rounded-2xl *:items-center *:p-5  *:bg-gray-700/60 *:hover:scale-105 *:ease-out *:duration-300">
        <div className="">
          <a href="https://www.google.com/">
            <MdOutlineMailOutline className="size-10" />
          </a>
          <p>Email</p>
          <p>example@gmail.com</p>
        </div>
        <div className="">
          <FaRegFileAlt className="size-10" />
          <p>CV</p>
          <p>Download Resume</p>
        </div>
        <div className="">
          <a href="https://github.com/JyrexRonaldo">
            <VscGithubAlt className="size-10" />
          </a>
          <p>Github</p>
          <p>JyrexRonaldo</p>
        </div>
        <div className="">
          <SlSocialLinkedin className="size-10" />
          <p>LinkedIn</p>
          <p>Jyrex Ronaldo</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
