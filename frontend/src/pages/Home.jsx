import React, { useState, useEffect } from "react";
import pic from "../assets/earth-unscreen.gif";
import pic1 from "../assets/rocket.gif";
import Box from "./Box";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
function Home() {
  const [uid, setUid] = useState("");
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid("");
      }
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="w-screen h-screen ">
      {uid === "" ? (
        <Login />
      ) : (
        <>
          <div className="flex md:justify-center flex-col md:flex-row  mb-6">
            <div className="p-10 md:w-1/2">
              <div className="flex flex-col text-center justify-center items-center">
                <h1 className=" text-[25px] sm:text-[35px] font-extrabold text-transparent text-gradient bg-gradient-to-r from-blue-300 via-purple-600 to-pink-800 bg-clip-text inner-shadow">
                  Explore Planets and the mysteries of the Solar System
                </h1>
                <p className=" text-purple-300 my-2 lg:px-10 px-5 text-[13px] sm:text-[18px]">
                  Introducing AstroGuide: Explore planets, write captivating
                  blogs, and delve into detailed planetary information.
                  Experience the awe of astronomy with our daily Astronomy
                  Picture of the Day feature. Unlock the mysteries of the cosmos
                  in a single location.
                </p>
                <button className="w-[150px] h-[30px] bg-purple-700 text-yellow-100 hover:bg-gray-600 rounded-lg inner-shadow1 font-serif">
                  <Link to="/picture">Explore</Link>
                </button>
              </div>
            </div>
            <div className="w-1/2 lg:flex justify-center hidden  ">
              <img className=" w-[429px] h-[260px] mt-10" src={pic1} />
            </div>
          </div>
          <Box />
        </>
      )}
    </div>
  );
}

export default Home;
