import ArchivedCard from "./ArchivedCard";
import Container from "./Container";
import { ProjectArr } from "../Constants/index";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Archive = () => {
  const [showMore, SetShowMore] = useState(false);
  const disPlayedArray = showMore ? ProjectArr : ProjectArr.slice(0, 6);
  const scrollContainerRef = useRef(null);

  const HandleShow = () => {
    if (showMore) {
      SetShowMore(false);
      scrollContainerRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      SetShowMore(true);
    }
  };
  return (
    <Container className="py-24 max-w-5xl mx-auto">
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-3xl font-semibold">Other Noteworthy Projects</h3>
        <p className="text-designColor text-sm">view the archive</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-6 gap-5 mt-10">
        <AnimatePresence>
          {disPlayedArray?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <ArchivedCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* button  */}
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={HandleShow}
          className="w-36 h-10 text-designColor border border-designColor
         rounded-md tracking-wide hover:bg-textBg hover:text-lightText duration-200"
        >
          {showMore ? "show less" : "show more"}
        </button>
      </div>
    </Container>
  );
};

export default Archive;
