import React, { useState } from "react";
import { motion } from "framer-motion";
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

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
};

// const nav = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//   },
// };

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div
      className={
        isNavExpanded
          ? "px-16 py-2 flex justify-between text-white items-center max-lg:px-0 max-lg:block"
          : "px-16 py-2 flex justify-between text-white items-center max-lg:px-0 max-lg:block"
      }
    >
      <div className="container1">
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
      <div>
        <ul
          className={
            isNavExpanded
              ? "flex justify-center items-center  max-lg:absolute max-lg:flex-col max-lg:h-full max-lg:bg-slate-900 max-lg:z-10 max-lg:top-0 max-lg:right-0 pr-24 pl-8 max-lg:ease-in-out"
              : "flex justify-center items-center  max-lg:hidden max-lg:top-0 max-lg:right-[-5rem] "
          }
        >
          <motion.li
            transition={spring}
            animate={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            className="px-6 max-lg:py-2"
          >
            <a href="/home">Home</a>
          </motion.li>
          <motion.li
            transition={spring}
            animate={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            className="px-6 max-lg:py-2"
          >
            <a href="/about">About</a>
          </motion.li>
          <motion.li
            transition={spring}
            animate={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            className="px-6 max-lg:py-2"
          >
            <a href="/home">Projects</a>
          </motion.li>
          <motion.li
            transition={spring}
            animate={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            className="px-6 max-lg:py-2"
          >
            <a href="/services">Services</a>
          </motion.li>
          <motion.li
            transition={spring}
            animate={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            className="px-6 max-lg:py-2"
          >
            <a href="/home">Number</a>
          </motion.li>
        </ul>
      </div>
      <div className=" max-lg:translate-x-60 max-lg:hidden">
        <motion.button
          transition={{ ease: "linear", duration: 0.3 }}
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1 }}
          initial={{scale:0.9}}
          animate={{scale:1}}
          className="bg-regal-blue px-8 py-2   rounded-full hover:bg-regal-blue-dark tracking-tighter font-semibold "
        >
          Hire me
        </motion.button>
      </div>
      <div className=" hidden  pr-10 max-lg:block">
        <motion.button
          transition={{ ease: "linear", duration: 0.3 }}
          whileHover={{ scale: 0.9 }}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className="bg-regal-blue px-8 py-2   rounded-full hover:bg-regal-blue-dark tracking-tighter font-bold text-xl max-lg:absolute max-lg:top-12 max-lg:right-8 z-20 "
        >
          ^
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
