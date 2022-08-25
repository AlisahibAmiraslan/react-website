import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Img1 from "./../Images/about-image.jpg";

function About() {
  return (
    <>
      <div className="banner-title w-full flex justify-center items-center mt-20">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-7xl text-white mb-7">About</h1>
          <div className="flex">
            <Link to="/">
              <span className="text-2xl text-red-600">HOME</span>
            </Link>
            <AiOutlineRight className="text-white mx-5 w-6 h-6" />
            <span className="text-white text-2xl">ABOUT</span>
          </div>
        </div>
      </div>

      <section className="banner-about grid lg:grid-cols-2 grid-cols-1 lg:px-20 px-5 py-28 gap-20">
        <div className="banner-about-content">
          <span className="text-red-600 text-sm">Hakkımızda</span>
          <h1 className="md:text-4xl text-xl">
            Welcome to the Best Business Support Company
          </h1>
          <p className="p-2 border-l-2 border-red-600 my-10">
            Economic services provided by the finance industry, which
            encompasses a broad range of businesses that manage money, including
            credit unions.
          </p>
          <a
            href=""
            className="bg-black text-center py-4 text-white block w-40 hover:bg-gray-600"
          >
            Hakkımızda
          </a>
        </div>
        <div className="banner-img">
          <img src={Img1} alt="about İmage" />
        </div>
      </section>
    </>
  );
}

export default About;
