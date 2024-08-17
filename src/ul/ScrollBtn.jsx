import React, { useEffect } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const ScrollBtn = () => {
  useEffect(() => {
    const ScrollBtn = document.querySelector(".ScrollBtn");

    const ScrollFunc = () => {
      if (window.scrollY > 300) {
        ScrollBtn.style.display = "block";
      } else {
        ScrollBtn.style.display = "none";
      }
    };

    const ScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("scroll", ScrollFunc);
    ScrollBtn.addEventListener("click", ScrollToTop);
  }, []);

  return (
    <div
      className="fixed right-10 bottom-20 p-3 bg-textBg/40 text-2xl text-lightText/80 rounded-full
     cursor-pointer z-40 border border-designColor hover:bg-black hover:text-lightText duration-200 ScrollBtn "
    >
      <IoArrowUpOutline />
    </div>
  );
};

export default ScrollBtn;
