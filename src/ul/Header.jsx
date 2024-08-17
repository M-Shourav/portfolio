import { Link } from "react-scroll";
import { logo } from "../assets";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import resume from "../../public/resume.pdf";
const NavArr = [
  { title: "Home", link: "home", vale: "", delay: 0.1 },
  { title: "About", link: "about", delay: 0.2, value: "01" },
  { title: "Experience", link: "experience", delay: 0.3, value: "02" },
  { title: "Project", link: "project", delay: 0.4, value: "03" },
  { title: "Contact", link: "contact", delay: 0.5, value: "04" },
];
const Header = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  const HandleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  };
  return (
    <div className="h-20 shadow-lg shadow-designColor/10 px-4 lg:px-0 sticky top-0 z-50 bg-primaryColor">
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between ">
        <img
          src={logo}
          alt="logo"
          className="w-20 opacity-75 hover:opacity-100 cursor-pointer duration-200"
        />

        <div className="hidden md:inline-flex items-center gap-7">
          <div className="flex items-center justify-center gap-7">
            {NavArr?.map((item) => (
              <Link
                to={item.link}
                key={item?.title}
                smooth={true}
                duration={700}
                offset={-80}
                className="text-sm font-medium cursor-pointer hover:text-designColor"
              >
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: item.delay }}
                >
                  <span className="text-designColor mr-1">
                    {item?.value}
                    {item.value && "."}
                  </span>
                  <span className="uppercase tracking-wide">{item?.title}</span>
                </motion.p>
              </Link>
            ))}
          </div>
          <motion.button
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="uppercase px-4 py-2 border border-designColor rounded-md 
            text-sm flex items-center justify-center font-medium
            hover:bg-textBg duration-200
            "
          >
            <a href={resume} target="blank">
              Resume
            </a>
          </motion.button>
        </div>

        {/* Mobile Screen start */}
        <div
          onClick={() => setShow(true)}
          className="md:hidden w-6 h-5  flex flex-col items-center
         justify-between group cursor-pointer overflow-hidden"
        >
          <span
            className="w-full h-[2px] bg-designColor transform inline-flex
          group-hover:translate-x-2 duration-200 "
          />

          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-3 group-hover:translate-x-0 duration-200" />
          <span
            className="w-full h-[2px] bg-designColor transform inline-flex
          group-hover:translate-x-2 duration-200 "
          />
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={HandleClick}
            className="absolute top-0 right-0 md:hidden w-full h-screen bg-black/50 
          flex flex-col items-end z-50"
          >
            <motion.div
              className="w-[80%] h-full overflow-y-scroll bg-textBg flex flex-col items-center
            py-10 relative scrollBarHide 
             "
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-designColor absolute top-4 right-4
              cursor-pointer hover:text-red-500 duration-200 "
              />
              <div className="w-full flex flex-col  items-center justify-center gap-7">
                {NavArr?.map((item) => (
                  <Link
                    to={item.link}
                    key={item?.title}
                    smooth={true}
                    duration={700}
                    offset={-80}
                    className="text-sm font-medium cursor-pointer hover:text-designColor"
                  >
                    <motion.p
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: item.delay }}
                    >
                      <span className="text-designColor mr-1">
                        {item?.value}
                        {item.value && "."}
                      </span>
                      <span className="uppercase tracking-wide">
                        {item?.title}
                      </span>
                    </motion.p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        )}
        {/* Mobile screen End */}
      </div>
    </div>
  );
};

export default Header;
