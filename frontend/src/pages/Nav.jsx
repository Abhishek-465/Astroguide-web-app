import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-10 pl-4 mb-[50px] pt-5 bg-black items-center">
      {!isMenuOpen ? (
        <GiHamburgerMenu
          className=" text-pink-100 h-8 w-8 cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <RxCross1
          className=" text-pink-100 h-8 w-8 cursor-pointer"
          onClick={toggleMenu}
        />
      )}
      {isMenuOpen && (
        <div className="absolute top-[0.5rem] w-[130px] right-0 bg-gray-900 h-screen p-4 rounded shadow">
          {/* Your menu items */}
          <p className="w-auto h-8 text-center text-white bg-purple-700 hover:bg-slate-700 border-slate-400 mb-10">
            <Link key="Home" to="/">
              Home
            </Link>
          </p>
          <p className="w-auto h-8 text-center text-white bg-purple-700 hover:bg-slate-700 border-slate-400 mb-10 shadow-inner1">
            <Link key="Home" to="/planet">
              Planets
            </Link>
          </p>
          <p className="w-auto h-8 text-center text-white bg-purple-700 hover:bg-slate-700 border-slate-400 mb-10">
            <Link key="Home" to="/picture">
              Picture
            </Link>
          </p>
          <p className="w-auto h-8 text-center text-white bg-purple-700 hover:bg-slate-700 border-slate-400 mb-10">
            <Link key="Home" to="/blog">
              Blogs
            </Link>
          </p>
          <p className="w-auto h-8 text-center text-white bg-purple-700 hover:bg-slate-700 border-slate-400 mb-10">
            <Link key="Home" to="/write">
              Upload
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Nav;
