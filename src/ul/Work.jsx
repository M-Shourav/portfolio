import { motion } from "framer-motion";

const Work = ({
  JobTitle,
  JobTag,
  date,
  detailsOne,
  detailsTwo,
  detailsThree,
}) => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col  gap-2 text-darkText"
    >
      <div className="flex gap-1  ">
        <h1>{JobTitle}</h1>
        <p className="text-designColor">{JobTag}</p>
      </div>
      <p>{date}</p>
      <p>{detailsOne}</p>
      <p>{detailsTwo}</p>
      <p>{detailsThree}</p>
    </motion.div>
  );
};

export default Work;
