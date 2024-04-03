import React, { useState } from "react";

const Upload = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    data: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/upload-blog", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Blog uploaded successfully!!!!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while updating the blog.");
      });
  };

  return (
    <div className="container mx-auto p-8 text-white flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-6  text-transparent text-gradient bg-gradient-to-r from-blue-300 via-purple-600 to-pink-600 bg-clip-text inner-shadow">
        Write your Blog
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4  w-screen sm:w-3/4 h-auto p-10 bg-gradient-to-r from-blue-300  to-orange-800 rounded-3xl"
      >
        <div>
          <label htmlFor="title" className="block text-gray-900">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            placeholder="XYZ"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none bg-slate-950 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-gray-900">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Alan Walker"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 bg-slate-950"
            required
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-gray-900">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 bg-slate-950"
            required
          />
        </div>

        <div>
          <label htmlFor="data" className="block text-gray-900">
            Blog:
          </label>
          <textarea
            id="data"
            name="data"
            value={formData.data}
            placeholder="Unleash your research and creativity"
            onChange={handleChange}
            rows={5}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 bg-slate-950"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Upload;
