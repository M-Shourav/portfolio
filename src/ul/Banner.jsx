import { motion } from "framer-motion";
import Container from "./Container";

const Banner = () => {
  return (
    <Container>
      <div id="home" className="py-10 lg:py-24 flex flex-col gap-4 lg:gap-5">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h1 className="text-base tracking-wide font-semibold text-designColor lg:text-xl">
            Hi, my name is
          </h1>
          <h2 className="text-4xl lg:text-6xl font-semibold py-3 text-lightText/90">
            Masum Ahmed
          </h2>
        </motion.div>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="max-w-[650px] text-darkText font-medium leading-7  "
        >
          I am a Web developer with 1+ years of experience in javaScript and
          React. I have a strong foundation in front-end and am skill in
          creating user-friendly and responsive web application using React and
          it's ecosystem.
          <a href="" className="relative text-designColor group">
            Learn more
            <p className="absolute left-0 bottom-0 w-[0px] h-[2px] bg-designColor group-hover:w-[80px] duration-300" />
          </a>
        </motion.p>

        <motion.a
          href="#"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="w-56 h-16 border border-designColor 
          flex items-center justify-center rounded-md tracking-wide
          text-lg hover:text-designColor hover:bg-textBg duration-300
          "
        >
          Check out my Project
        </motion.a>
      </div>
    </Container>
  );
};

export default Banner;
