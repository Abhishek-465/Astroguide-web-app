import React, { useState, useEffect } from "react";
import loader from "../assets/loader.gif";

const Planet = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const url =
        process.env.PLANET_URL;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c74574b49amsh4d2d304e7c05dccp168cb3jsn7d6c4f18a77f",
          "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const result = await response.json();
        setPlanets(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <div className="loader mb-[170px]">
          <img className="w-[100px] h-[100px] rounded-full " src={loader} />
          <p className="mt-5 ml-5">Loading.....</p>
        </div>
      </div>
    );
  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div className="text-white p-6 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl mb-8 font-extrabold text-transparent text-gradient bg-gradient-to-r from-blue-300 to-pink-600 bg-clip-text inner-shadow">
        Planets Information
      </h1>
      <ul className="flex justify-center flex-wrap">
        {planets.map((planet) => (
          <div
            key={planet.id}
            className="mb-6 w-[360px] h-[600px] rounded-lg bg-gradient-to-r from-purple-700 to-pink-900 mx-6 flex flex-col justify-start items-center text-center px-4"
          >
            <h2 className="text-xl font-semibold mb-2">{planet.name}</h2>
            <img
              src={planet.imgSrc.img}
              alt={planet.name}
              className="w-[250px] h-[250px] mb-2 rounded-lg shadow-md border-2 border-gray-500 hover:scale-105"
            />
            <p className="text-sm text-gray-300 mb-2">
              {planet.imgSrc.imgDescription}
            </p>
            <p className="text-sm">{planet.description}</p>
            <p>
              <span className="text-yellow-200 font-bold">Volume: </span>
              {planet.basicDetails.volume}
            </p>
            <p>
              <span className="text-yellow-200 font-bold">Mass:</span>{" "}
              {planet.basicDetails.mass}
            </p>
            <a
              href={planet.wikiLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black w-[100px] border-2 border-red-200 hover:bg-slate-900 mt-5"
            >
              WikiLink
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Planet;
