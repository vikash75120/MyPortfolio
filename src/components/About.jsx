import { React, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="block">
      <span
        className="block"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s ease-in-out 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Section2({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="block ">
      <span
        className="block text-sm tracking-wide w-[28rem] mb-20 max-sm:text-xs"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 0.8 : 0,
          transition: "all 0.7s ease-in-out 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Horizontal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <hr
      ref={ref}
      className="block bg-regal-grey border-0 h-[2px]"
      style={{
        width: isInView ? "100%" : "0",
        opacity: isInView ? 1 : 0,
        transition: "all 1s ease-in-out 0.5s",
      }}
    />
  );
}

const About = () => {
  return (
    <div className=" text-white pr-24 pl-24">
      <Horizontal />
      <h1 className=" text-4xl font-medium text-regal-grey mt-6 mb-6">About</h1>
      <motion.div className="grid grid-rows-1 grid-cols-5 gap-28 max-lg:grid-row-2 max-lg:grid-cols-1 ">
        <motion.div className="mb-10 grid col-span-3 pr-10">
          <motion.h1 className="  text-6xl max-sm:text-5xl font-medium  font-['Oswald'] mb-16">
            <Section>
              WHO COULD BE MORE <br/> POWERFULL THAN <br/>A DEVELOPER WHO <br/>CAN DESIGN
            </Section>
          </motion.h1>
          <Section2>
            I am Front-end developer who loves coding and problem-solving. I am
            very happy when I am creating a website, then I am doing anything
            else . Then why did I suddenly find audacity to do the unthinkable.
            Learn design? I mean come on we all know developers can not learn
            design. Or can they?And should they?
          </Section2>
        </motion.div>
        <div className="grid col-span-2">
          <div className=""></div>
          <div className=""></div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
