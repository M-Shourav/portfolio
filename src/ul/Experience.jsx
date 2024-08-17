import { useState } from "react";
import Container from "./Container";
import Subtitle from "./Subtitle";
import Work from "./Work";

const Experience = () => {
  const [workReactBD, setReactBD] = useState(true);
  const [workGoogle, setGoogle] = useState(false);
  const [workApple, setApple] = useState(false);
  const [workSplash, setSplash] = useState(false);
  const [workAmazon, setAmazon] = useState(false);

  const HandleFunc = () => {
    setReactBD(true);
    setGoogle(false);
    setApple(false);
    setSplash(false);
    setAmazon(false);
  };

  const HandleGoogle = () => {
    setReactBD(false);
    setGoogle(true);
    setApple(false);
    setSplash(false);
    setAmazon(false);
  };
  const HandleApple = () => {
    setReactBD(false);
    setGoogle(false);
    setApple(true);
    setSplash(false);
    setAmazon(false);
  };
  const HandleSplash = () => {
    setReactBD(false);
    setGoogle(false);
    setApple(false);
    setSplash(true);
    setAmazon(false);
  };
  const HandleAmazon = () => {
    setReactBD(false);
    setGoogle(false);
    setApple(false);
    setSplash(false);
    setAmazon(true);
  };

  return (
    <Container
      id="experience"
      className="max-w-3xl mx-auto py-10 lg:py-24 md:mt-10"
    >
      <Subtitle title="Where I have worked" titleNo="02." />
      <div className="w-full flex flex-col mt-10 md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col gap-5 ">
          <li
            onClick={HandleFunc}
            className={`${
              workReactBD
                ? "border-l-designColor text-designColor"
                : "border-l-darkText"
            } border-l-2 px-3 py-4 cursor-pointer 
          bg-transparent hover:bg-textBg text-md font-medium 
          duration-200`}
          >
            WorkReactBD
          </li>
          <li
            onClick={HandleGoogle}
            className={`${
              workGoogle
                ? "border-l-designColor text-designColor"
                : "border-l-darkText"
            } border-l-2 px-3 py-4 cursor-pointer
            bg-transparent hover:bg-textBg text-md font-medium
            duration-200`}
          >
            WorkGoogle
          </li>
          <li
            onClick={HandleApple}
            className={`${
              workApple
                ? "border-l-designColor text-designColor"
                : "border-l-darkText"
            } border-l-2 px-3 py-4 cursor-pointer 
        bg-transparent hover:bg-textBg text-md font-medium 
        duration-200`}
          >
            WorkApple
          </li>
          <li
            onClick={HandleSplash}
            className={`${
              workSplash
                ? "border-l-designColor text-designColor"
                : "border-l-darkText"
            } border-l-2 px-3 py-4 cursor-pointer 
        bg-transparent hover:bg-textBg text-md font-medium 
        duration-200`}
          >
            WorkSplash
          </li>
          <li
            onClick={HandleAmazon}
            className={`${
              workAmazon
                ? "border-l-designColor text-designColor"
                : "border-l-darkText"
            } border-l-2 px-3 py-4 cursor-pointer 
        bg-transparent hover:bg-textBg text-md font-medium 
        duration-200`}
          >
            WorkAmazon
          </li>
        </ul>
        {workReactBD && (
          <Work
            JobTitle="Engineer"
            JobTag="@ReactBD"
            date="2022-present"
            detailsOne="Write modern,performant,maintainable code for a diverse array of client and internal  project  "
            detailsTwo="Lorem,Lorem, ipsum dolor Lorem, ipsum dolor sit amet consectetur ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Nisi ipsa laborum quibusdam repellendus. Dicta est commodi earum unde expedita molestiae"
            detailsThree="Lorem, ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Nisi ipsa laborum quibusdam repellendus. Dicta est commodi earum unde expedita molestiae"
          />
        )}
        {workGoogle && (
          <Work
            JobTitle="Engineer"
            JobTag="@Google"
            date="2022-present"
            detailsOne="Write modern,performant,maintainable code for a diverse array of client and internal  project  "
            detailsTwo="Lorem,Lorem, ipsum dolor Lorem, ipsum dolor sit amet consectetur ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Nisi ipsa laborum quibusdam repellendus. Dicta est commodi earum unde expedita molestiae"
            detailsThree="Lorem, ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Nisi ipsa laborum quibusdam repellendus. Dicta est commodi earum unde expedita molestiae"
          />
        )}
        {workApple && (
          <Work
            JobTitle="Engineer"
            JobTag="@Apple"
            date="2022-present"
            detailsOne="Write modern,performant,maintainable code for a diverse array of client and internal  project  "
            detailsTwo="Lorem,Lorem, ipsum dolor Lorem, ipsum dolor sit amet consectetur ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Nisi ipsa laborum quibusdam repellendus. Dicta est commodi earum unde expedita molestiae"
            detailsThree="Lorem, ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Nisi ipsa laborum quibusdam repellendus. Dicta est commodi earum unde expedita molestiae"
          />
        )}
        {workSplash && (
          <Work
            JobTitle="Engineer"
            JobTag="@Splash"
            date="2022-present"
            detailsOne="Write modern,performant,maintainable code for a diverse array of client and internal  project  "
            detailsTwo="Lorem,Lorem, ipsum dolor Lorem, ipsum dolor sit amet consectetur ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Nisi ipsa laborum quibusdam repellendus. Dicta est commodi earum unde expedita molestiae"
            detailsThree="Lorem, ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Nisi ipsa laborum quibusdam repellendus. Dicta est commodi earum unde expedita molestiae"
          />
        )}
        {workAmazon && (
          <Work
            JobTitle="Engineer"
            JobTag="@Amazon"
            date="2022-present"
            detailsOne="Write modern,performant,maintainable code for a diverse array of client and internal  project  "
            detailsTwo="Lorem,Lorem, ipsum dolor Lorem, ipsum dolor sit amet consectetur ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Nisi ipsa laborum quibusdam repellendus. Dicta est commodi earum unde expedita molestiae"
            detailsThree="Lorem, ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Nisi ipsa laborum quibusdam repellendus. Dicta est commodi earum unde expedita molestiae"
          />
        )}
      </div>
    </Container>
  );
};

export default Experience;
