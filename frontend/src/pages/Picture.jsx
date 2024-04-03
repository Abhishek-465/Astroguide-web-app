import React, { useState, useEffect } from "react";
import loader from "../assets/loader.gif";

const Picture = () => {
  const [pictureData, setPictureData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=9p0NHUgTSP1385xY59QsJC9XeW7AxaeSK59pbr5c"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPictureData(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[350px] h-[450px] sm:w-[600px] sm:h-[700px] mx-auto px-4 py-8">
      {loading ? ( // Show loader if loading is true
        <div className="flex justify-center items-center h-screen text-white">
          <div className="loader mb-[170px]">
            <img className="w-[100px] h-[100px] rounded-full" src={loader} />
            <p className="mt-5 ml-5">Loading.....</p>
          </div>
        </div>
      ) : (
        <div className=" bg-gradient-to-r from-purple-950 to-gray-900 text-black rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-transparent text-gradient bg-gradient-to-r from-blue-200 via-purple-500 to-pink-300 bg-clip-text inner-shadow">
            Astronomy Picture of the day
          </h1>
          <h2 className="text-2xl font-bold mb-4  text-transparent text-gradient bg-gradient-to-r from-blue-300 via-purple-600 to-pink-800 bg-clip-text inner-shadow">
            {pictureData.title}
          </h2>
          <p className="text-gray-300 mb-2">Date: {pictureData.date}</p>
          <img
            className="w-[500px] sm:h-[300px] h-[220px] rounded-md mb-4 border-2 border-violet-400"
            src={pictureData.hdurl}
            alt={pictureData.title}
          />
          <p className="text-gray-100 text-sm">{pictureData.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Picture;
