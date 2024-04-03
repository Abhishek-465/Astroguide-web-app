import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-6 mt-[200px] md:mt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">AstroGuide</h4>
            <p className="mt-2">Made by Abhishek Bhattacharjee</p>
          </div>
          <div className="mb-4 md:mb-0 mr-[100px]">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="mt-2">123 Street, City</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex mt-2">
              <a href="#" className="mr-4">
                <FaFacebook />
              </a>
              <a href="#" className="mr-4">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
