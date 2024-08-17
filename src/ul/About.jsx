import { Link } from "react-scroll";
import { ProfileImg } from "../assets";
import Container from "./Container";
import Subtitle from "./Subtitle";
import { FaCode } from "react-icons/fa";

const About = () => {
  const linkTitle = [
    { title: "Node.js", link: "https://react.dev/learn" },
    { title: "HTML", link: "https://react.dev/learn" },
    { title: "React.js", link: "https://react.dev/learn" },
    { title: "javaScript", link: "https://react.dev/learn" },
    { title: "MongoDB", link: "https://react.dev/learn" },
    { title: "Css", link: "https://react.dev/learn" },
    { title: "Ex.js", link: "https://react.dev/learn" },
    { title: "TailwindCss", link: "https://react.dev/learn" },
  ];
  return (
    <Container id="about" className="py-10 lg:py-24">
      <Subtitle title="About Page" titleNo="01." />
      <div className="flex flex-col lg:flex-row gap-16 mt-10">
        <div className="w-full lg:w-2/3 text-darkText font-medium flex flex-col gap-5">
          <p>
            Hi, I am Md. Masum Ahmed. I love coding and I started it from 2022
            and I am a web developer. I do page design, thumbnail design, blog
            web site, e-commerce web site & personal portfolio. I work with
            HTML, CSS, Tailwind, JavaScript, React js.
          </p>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            necessitatibus magni minima soluta cumque ipsum expedita!
            Exercitationem doloremque ratione beatae ullam, nesciunt doloribus
            numquam deserunt, nihil maiores optio cum tenetur!
          </span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            necessitatibus magni minima soluta cumque ipsum expedita!
            Exercitationem doloremque ratione beatae ullam, nesciunt doloribus
            numquam deserunt, nihil maiores optio cum tenetur!
          </p>

          <p>Here are a few technologies I have been working Recently</p>
          <div className="grid grid-cols-2 gap-3 mt-3 text-sm ">
            {linkTitle?.map((item) => (
              <a
                key={item?.title}
                href={item?.link}
                target="blank"
                className="flex w-[120px] items-center gap-2 
                 hover:text-lightText duration-200 group
                 "
              >
                <FaCode className="text-designColor/70 group-hover:text-designColor duration-200 " />
                {item?.title}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-80 flex justify-center">
          <img
            src={ProfileImg}
            alt=""
            className="w-[250px] h-[250px] lg:w-full lg:h-full rounded-full border-2 border-designColor"
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
