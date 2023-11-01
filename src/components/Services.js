/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services
import { services } from "../data/servicesData";

const bg = [];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col  gap-10">
          {/* text and images */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" lg:bg-bottom flex justify-center items-center flex-col bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6 ">What I Do.</h2>
            <h3 className="h3 mb-12 text-center max-w-[800px] ">
              I'm a Front-end Developer with extensive experience in creating
              captivating web experiences.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* services list */}
            <div className="flex justify-center relative items-center gap-10 flex-wrap z-0">
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className="overlay">
                  <div
                    className="card relative group flex items-center justify-center h-[260px]"
                    key={index}
                  >
                    <div className="glass absolute hidden group-hover:block"></div>
                    <div className="max-w-[300px] ">
                      <h4 className="text-xl text-gradient transition-all ease-in-out absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  top-[50%]  group-hover:top-[10%] group-hover:left-[30%] duration-300 font-semibold mb-4">{name}</h4>
                      <p className="hidden group-hover:block transition-all p-3 pt-5 ease-in-out duration-300 ">{description}</p>
                    </div>
                    <div className=" hidden group-hover:flex items-center justify-center flex-col">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[6px] group flex justify-center items-center bg-primary text-white"
                      >
                        <BsArrowUpRight className="transform scale-75 group-hover:scale-100 transition-all ease-in-out duration-300" />
                      </a>
                      <a href="#" className="text-gradient">
                        {link}
                      </a>
                    </div>
                  </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
