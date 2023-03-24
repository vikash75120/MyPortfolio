import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="text-white grid grid-rows-1 grid-cols-3 gap-4 pr-24 pl-24 max-sm:pl-10 max-sm:pr-10">
      <motion.div className="pt-4 col-span-2 max-lg:col-span-3 grid grid-rows-2 max-sm:grid-rows-1 max-lg:grid-cols-2 max-lg:grid-rows-1 grid-cols-3 gap-20 font-['Oswald']">
        <motion.h1 className="col-span-3  font-medium text-[0rem] tracking-tighter leading-tight">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="h-auto w-125 block m-0 text-7.5xl"
          >
            VIKASH KUMAR
          </motion.p>
          <br />{" "}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className=" h-auto w-125 block m-0 text-regal-blue text-7.5xl"
          >
            FRONTEND DEVELOPER
          </motion.p>
          <br />
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="h-auto w-125 block m-0 text-regal-blue text-7.5xl"
          >
            AND DESIGNER
          </motion.p>
        </motion.h1>
        <div className=" absolute">
          <img src="" alt="" />
        </div>
        <motion.button
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1 }}
          className="bg-white text-regal-blue w-36 h-14 rounded-full font-semibold hover:bg-slate-200 font-['Rubik'] tracking-tighter"
        >
          Hire me now
        </motion.button>
        <motion.p
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" w-36 h-32 pb-10  font-['Rubik']"
        >
          Hi, I am Vikash Kumar your most trusted creative developer, welcome to
          my personal portfolio
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4.5 }}
        className=" grid justify-items-end"
      >
        <div className=" h-128 w-72 rounded-full border-solid border-2 border-regal-blue m-0 p-0 grid items-center max-lg:mb-20">
          <div className=" h-127 w-72 rounded-full border-solid border-2 border-regal-blue m-0 p-0 grid items-center">
            <div className=" h-126 w-72 rounded-full border-solid border-2 border-regal-blue m-0 p-0 grid items-center">
            <div className=" hidden h-[21rem] w-72 rounded-t-full border-solid border-2 border-regal-blue bg-slate-900 m-0 p-0 grid items-center">
              <img src="" alt="" />
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
