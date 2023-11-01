/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// countUp
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto mt-[40px]">
        <div className="flex flex-col lg:flex-row  lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <div className="relative ">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex bg-about bg-contain bg-no-repeat lg:w-[640px] h-[340px] mix-blend-soft-light bg-top"
            ></motion.div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                
                <a href="#" className="icon-link">
                  <FaYoutube className="text-[40px]" />
                </a>
                <a href="#" className="icon-link">
                  <FaGithub className="text-[40px]" />
                </a>
                <a href="#" className="icon-link">
                  <FaDribbble className="text-[40px]" />
                </a>
              </div>
            </div>
          </div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex-1">
              <h2 className="h2 text-accent">About Me.</h2>
              <h3 className="h3 mb-4">
              I'm a Front-end Developer with extensive experience in creating captivating web experiences.
              </h3>
              <p className="mb-6">
              A dedicated Front-end Developer known for crafting visually appealing and user-friendly websites. My passion lies in transforming ideas into seamless online experiences. Proficient in HTML, CSS, JavaScript, and a range of modern frameworks, I thrive on building innovative and interactive web solutions.
              </p>
            </div>
            {/* stats */}
            
            <div className="flex gap-x-8 items-center">
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
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
