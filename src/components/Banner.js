/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Image from "../assets/profile.jpg";


import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import useIntersectionObserver from "./useScrollAnimation";



const Banner = () => {
  const {animationTriggered ,ref} =useIntersectionObserver()
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-y-8 lg:flex-row justify-center lg:items-center">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[42px] my-6 font-bold leading-[0.8] lg:text-[72px]"
            >
             Goldpreet <span>Kaur</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] h-[100px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              
              <TypeAnimation
                sequence={[
                  "React Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                 
                ]}
                speed={50}
                className="text-[#f4035f] "
                wrapper="span"
                repeat={Infinity}
              />
            
            </motion.div>
           
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max items-center gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <div class="hero">
                <div class="content">
                  <a className="btnNeon" href="#contact">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  Contact Me
                  </a>
                </div>
              </div>
             
            </motion.div>
           
          
          </div>
         
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className=" flex flex-1 mx-auto max-w-[320px] justify-center items-center lg:max-w-[482px] w-96 "
          >
            <img  ref={ref} src={Image} alt="" className={` ${animationTriggered?"fadeUp":""} mix-blend-lighten w-[600px] object-contain h-[400px] lg:h-[500px]  bgImage rounded-full  `} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
