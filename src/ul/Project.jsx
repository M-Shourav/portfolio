import React from "react";
import Container from "./Container";
import Subtitle from "./Subtitle";
import { projectLogo } from "../assets";
import SocialLinks from "./SocialLinks";
const Project = () => {
  return (
    <Container id="project">
      <Subtitle title="Some Thing I have built" titleNo="03." />
      <div
        className="py-10 lg:py-24 mt-10 flex flex-col 
        items-center justify-center gap-32"
      >
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="w-full lg:w-1/2 group">
            <a href="https://amazon.com" target="blank">
              <img
                src={projectLogo}
                alt="projectLogo"
                className="w-full rounded-md lg:group-hover:scale-110 duration-500 "
              />
            </a>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-end lg:justify-between text-right">
            <div>
              <p className="text-designColor tracking-wide">
                Feautured Project
              </p>
              <h3 className="font-semibold text-xl">Amazon Clone 2.0</h3>
            </div>
            <p className="bg-textBg px-6 py-5 lg:-ml-16 z-10">
              An Amazon Clone Website for visualization personalized Amazon
              websites. View your Products and your account with{" "}
              <span className="text-designColor">0-auth</span> and then make
              purchase using <span className="text-designColor">stripe</span>
            </p>
            <ul className="flex justify-between gap-5 text-darkText py-3">
              <li>NextJs</li>
              <li>TypeScript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>vercel Development</li>
            </ul>
            <SocialLinks />
          </div>
        </div>
        {/* project two */}
        <div className="w-full flex flex-col md:flex-row-reverse gap-10">
          <div className="w-full lg:w-1/2 group">
            <a href="https://amazon.com" target="blank">
              <img
                src={projectLogo}
                alt="projectLogo"
                className="w-full rounded-md lg:group-hover:scale-110 duration-500 "
              />
            </a>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-end lg:justify-between text-right">
            <div>
              <p className="text-designColor tracking-wide">
                Feautured Project
              </p>
              <h3 className="font-semibold text-xl">Amazon Clone 2.0</h3>
            </div>
            <p className="bg-textBg px-6 py-5 lg:-mr-16 z-10">
              An Amazon Clone Website for visualization personalized Amazon
              websites. View your Products and your account with{" "}
              <span className="text-designColor">0-auth</span> and then make
              purchase using <span className="text-designColor">stripe</span>
            </p>
            <ul className="flex justify-between gap-5 text-darkText py-3">
              <li>NextJs</li>
              <li>TypeScript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>vercel Development</li>
            </ul>
            <SocialLinks />
          </div>
        </div>
        {/* project three */}
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="w-full lg:w-1/2 group">
            <a href="https://amazon.com" target="blank">
              <img
                src={projectLogo}
                alt="projectLogo"
                className="w-full rounded-md lg:group-hover:scale-110 duration-500 "
              />
            </a>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-end lg:justify-between text-right">
            <div>
              <p className="text-designColor tracking-wide">
                Feautured Project
              </p>
              <h3 className="font-semibold text-xl">Amazon Clone 2.0</h3>
            </div>
            <p className="bg-textBg px-6 py-5 lg:-ml-16 z-10">
              An Amazon Clone Website for visualization personalized Amazon
              websites. View your Products and your account with{" "}
              <span className="text-designColor">0-auth</span> and then make
              purchase using <span className="text-designColor">stripe</span>
            </p>
            <ul className="flex justify-between gap-5 text-darkText py-3">
              <li>NextJs</li>
              <li>TypeScript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>vercel Development</li>
            </ul>
            <SocialLinks />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
