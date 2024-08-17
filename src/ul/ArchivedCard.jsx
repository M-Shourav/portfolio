import React from "react";
import { FaFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const ArchivedCard = ({ project }) => {
  return (
    <a href={project?.link} target="blank">
      <div
        className="w-full h-96 bg-textBg rounded-md shadow-md
       shadow-gray-400/80  flex flex-col gap-3 justify-center p-7 group"
      >
        <div className="flex justify-between items-center">
          <FaFolder className="text-4xl text-designColor" />
          <RxOpenInNewWindow className="text-2xl hover:text-designColor duration-200" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-wide group-hover:text-designColor duration-200">
            {project.title}
          </h1>
          <p className="text-md text-darkText py-2">{project.description}</p>
        </div>
        <ul className="flex justify-between items-center text-darkText">
          {project?.listItem.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchivedCard;
