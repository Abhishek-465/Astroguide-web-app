import React from "react";
import Footer from "./Footer";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.jpg";
import logo5 from "../assets/logo5.jpg";
import { Link } from "react-router-dom";

const Box = () => {
  return (
    <div className="mb-0 lg:mb-5">
      <h1 className="text-3xl text-center font-bold mb-4 text-transparent text-gradient bg-gradient-to-r from-blue-200 via-purple-500 to-pink-300 bg-clip-text inner-shadow">
        Our Key Features
      </h1>
      <div className="flex items-center justify-center">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Grid Boxes</h2>
          <div className="grid grid-cols-2 sm:gap-10 gap-4">
            <div className="bg-gradient-to-r from-purple-500 to-purple-900 text-white p-4 flex flex-col items-center justify-center rounded-md w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <img
                src={logo1}
                className="w-[60px] h-[60px] mb-5 md:mb-0 md:w-[150px] md:h-[150px]"
              />
              <p className="hidden md:block my-5">Dictionary of Planets</p>
              <div className="bg-black w-20 text-center rounded-lg hover:bg-slate-800">
                <Link to="/planet">Visit</Link>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-900 text-white p-4 flex flex-col items-center justify-center rounded-md w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <img
                src={logo2}
                className="w-[60px] h-[60px] mb-5 md:mb-0 md:w-[150px] md:h-[150px]"
              />
              <p className="hidden md:block my-5">
                Astronomy Picture Of The Day
              </p>
              <div className="bg-black w-20 text-center rounded-lg hover:bg-slate-800">
                <Link to="/picture">Visit</Link>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-900 text-white p-4 flex flex-col items-center justify-center rounded-md w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <img
                src={logo3}
                className="w-[60px] h-[60px]  md:mb-0 mb-5 md:w-[150px] md:h-[150px]"
              />
              <p className="hidden md:block my-5">Blogs on Space</p>
              <div className="bg-black w-20 text-center rounded-lg hover:bg-slate-800">
                <Link to="/blog">Visit</Link>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-900 text-white p-4 flex flex-col items-center justify-center rounded-md w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <img
                src={logo5}
                className="w-[60px] h-[60px] mb-5 md:mb-0 md:w-[150px] md:h-[150px]"
              />
              <p className=" hidden md:block my-5">Publish your own Blog</p>
              <div className="bg-black w-20 text-center rounded-lg hover:bg-slate-800">
                <Link to="/write">Visit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Box;
