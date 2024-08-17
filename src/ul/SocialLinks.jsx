import { FaGithub, FaYoutube } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { Link } from "react-scroll";

const SocialLinks = () => {
  return (
    <div className="flex gap-5 text-2xl items-center">
      <a
        href="https://github.com/dashboard"
        target="blank"
        className="hover:text-designColor duration-200"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.youtube.com/@mdmasumbillahshourav9196"
        className="hover:text-designColor duration-200"
      >
        <FaYoutube />
      </a>
      <a href="" className="hover:text-designColor duration-200">
        <RxOpenInNewWindow />
      </a>
    </div>
  );
};

export default SocialLinks;
