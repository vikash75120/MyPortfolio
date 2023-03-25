import { React, useRef } from "react";
import { motion, useInView } from "framer-motion";
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="block">
      <span
        className=" h-auto w-125 block m-0 text-7.5xl"
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
    <section ref={ref} className="block">
      <span
        className=" h-auto w-125 block m-0 text-regal-blue text-7.5xl"
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

function CustomBtn({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <button
        className=" bg-white text-regal-blue w-36 h-14 rounded-full font-semibold hover:bg-slate-200 font-['Rubik'] tracking-tighter"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s ease-in-out 0.5s",
        }}
      >
        {children}
      </button>
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



const Footer = () => {
  return (
    <div className="pl-24 pr-24">
      <Horizontal />
      <div className=" text-white pt-10">
        <motion.div className="pt-4 col-span-2 max-lg:col-span-3 grid grid-rows-2 max-sm:grid-rows-1 max-lg:grid-cols-2 max-lg:grid-rows-1 grid-cols-3 gap-20 font-['Oswald']">
          <motion.h1 className="col-span-3  font-medium text-[0rem] tracking-tighter leading-tight">
            <Section>LET'S BUILD AMAZING</Section>
            <br /> <Section2 className=" ">EXPERIENCES</Section2>
          </motion.h1>
          <div className=" absolute">
            <img src="" alt="" />
          </div>
          <CustomBtn
            transition={{ duration: 1 }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1 }}
            className="bg-white text-regal-blue w-36 h-14 rounded-full font-semibold hover:bg-slate-200 font-['Rubik'] tracking-tighter"
          >
            Hire me now
          </CustomBtn>
        </motion.div>
      </div>
      <div className="grid grid-cols-6 grid-rows-7 gap-5 items-center justify-center">
        <div className="container1 grid row-span-3 col-span-4 ">
          <motion.svg viewBox="0 0 100 100" className="item">
            <motion.path
              d="M0 10V0l50 50 50-50v10L75 60l-25 25-25-25z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 1, ease: "easeInOut" },
                fill: { duration: 1.5, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </div>
        <p className=" text-white font-medium">WORK</p>
        <p className=" text-white font-medium">INSTAGRAM</p>
        <p className=" text-white font-medium">SERVICES</p>
        <p className=" text-white font-medium">FACEBOOK</p>
        <p className=" text-white font-medium">ABOUT</p>
        <p className=" text-white font-medium"></p>
        <p className=" text-white font-medium col-span-4"></p>
        <p className=" text-white font-medium col-span-4">Projects</p>
        <p className=" text-white font-medium col-span-6"></p>
        <p className=" text-white font-medium col-span-4 opacity-40">2023</p>
        <p className=" text-white font-medium col-span-2 opacity-40">VIKASH KUMAR</p>
        <p className=" text-white font-medium col-span-6 opacity-0">VIKASH KUMAR</p>
      </div>
    </div>
  );
};

export default Footer;
