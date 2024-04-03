import React, { useState, useEffect } from "react";
import Upload from "./Upload";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  // fetching data
  useEffect(() => {
    fetch("http://localhost:5000/all-blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="text-white flex flex-col justify-center items-center bg-black ">
      <h1 className="text-3xl font-bold mb-6  text-transparent text-gradient bg-gradient-to-r from-blue-300 via-purple-600 to-pink-600 bg-clip-text inner-shadow">
        Interesting Blogs
      </h1>
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-purple-700 to-gray-700 rounded-xl flex flex-col justify-center items-center w-3/4 h-auto mb-10 p-8 text-center"
        >
          <p className="text-lg font-bold">{blog.title}</p>
          <p className="text-md font-thin">{blog.author}</p>
          <p className="text-gray-300 font-bold">{blog.date}</p>
          <p>{blog.data}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
