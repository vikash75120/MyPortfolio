import React from "react";

const Home = () => {
  return (
    <div className="text-white grid grid-rows-1 grid-cols-3 gap-4 pr-16 pl-24">
      <div className="pt-4 col-span-2 grid grid-rows-2 grid-cols-3 gap-20 font-['Oswald']">
        <h1 className="col-span-3 font-medium text-7.5xl tracking-tighter leading-tight">
          VIKASH KUMAR
          <br /> <span className=" text-regal-blue">FRONTEND DEVELOPER</span>
          <br />
          <span className=" text-regal-blue">AND DESIGNER</span>
        </h1>
        <div className=" absolute">
          <img src="" alt="" />
        </div>
        <button className="bg-white text-regal-blue w-36 h-14 rounded-full font-semibold hover:bg-slate-200 font-['Rubik'] tracking-tighter">
          Hire me now
        </button>
        <p className=" font-['Rubik']">
          Hi, I am Vikash Kumar your most trusted creative developer, welcome to
          my personal portfolio
        </p>
      </div>
      <div className=" grid justify-items-end">
        <div className=" h-128 w-72 rounded-full border-solid border-2 border-regal-blue m-0 p-0 grid items-center">
          <div className=" h-127 w-72 rounded-full border-solid border-2 border-regal-blue m-0 p-0 grid items-center">
            <div className=" h-126 w-72 rounded-full border-solid border-2 border-regal-blue m-0 p-0 grid items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
