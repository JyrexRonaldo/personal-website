import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
  return (
    <div className="flex flex-col gap-3 items-center">
      {/* <div className="flex flex-col gap-6 items-center"> */}
        <h1 className="text-6xl font-extrabold">Contact Me</h1>
        <p className="text-xl">
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to connect.
        </p>
      {/* </div> */}
      <div className="flex justify-center gap-10 *:flex *:flex-col *:gap-1 *:rounded-2xl *:items-center *:p-5 *:w-50 *:bg-gray-700/60">
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
          <VscGithubAlt className="size-10" />
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
