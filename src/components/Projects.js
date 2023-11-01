import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// import images

import { FaDribbble, FaGithub } from "react-icons/fa";
import { data } from "../data/projectsData";
import { BiLinkExternal } from "react-icons/bi";


const containerStyle = {
  // minHeight: '100vh',
  width: "100%",
  backgroundImage: `linear-gradient(132deg,#5ddcff,
    #3c67e3 43%, #4e00c2)`,
  backgroundPosition: `center`,
  backgroundSize: "cover",
};
// data title working
const Projects = () => {
  return (
    <section
      className="section flex justify-center items-center flex-col "
      id="projects"
    >
      <h2 className="h2 text-accent mb-[10px]">My Projects</h2>
      <p className="mb-[60px] text-center max-w-[90%]">
        The Proof what i have done so far and will continue to emerge in a way
        to learn something new every time
      </p>
      <div className=" flex gap-10 flex-wrap justify-center items-center">
        {data.map((data, index) => {
          return (
            <div className="section2">
              <div class="container2">
                <div className="glass2 absolute"></div>
                <div class="card2 front-face2">
                  <header>
                    {/* <img src="logo.png" alt="" class="src2" /> */}
                    <h5>{data.title}</h5>

                    <img src={data.img} alt="" class="chip2" />
                  </header>
                  {/* <div class="card-details2">
                    <div class="name-number2">
                      <h6>Card Number</h6>
                      <h5 class="Number2">8050 2030 3040 6041</h5>
                      <h5 class="name2">Coder Rana</h5>
                    </div>

                    <div class="valid-data2">
                      <h6>valid Thru</h6>
                      <h5>05/29</h5>
                    </div>
                  </div> */}
                </div>

                <div class="card2 back-face2 flex items-center justify-center gap-7 flex-col">
                  <p>{data.description}</p>

                  <div className="flex gap-8 items-center">
                    <a href="#" className="icon-link">
                      <FaGithub className=" hover:scale-x-125 transition-all ease-in-out duration-200 text-[40px]" />
                    </a>{" "}
                    <a href="#" className="icon-link">
                      <BiLinkExternal className=" hover:scale-125 transition-all ease-in-out duration-200 text-[40px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>
    </section>
  );
};

export default Projects;
