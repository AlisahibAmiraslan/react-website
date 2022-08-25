import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import data from "./data";

function Projects() {
  return (
    <>
      <div className="banner-title w-full flex justify-center items-center mt-20">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-7xl text-white mb-7">Projects</h1>
          <div className="flex">
            <Link to="/project_desc">
              <span className="text-2xl text-red-600">HOME</span>
            </Link>
            <AiOutlineRight className="text-white mx-5 w-6 h-6" />
            <span className="text-white text-2xl">PROJECTS</span>
          </div>
        </div>
      </div>

      <section
        className="projects-wrapper md:p-28 px-5 py-10 w-full"
        style={{ background: "#f5f6fa" }}
      >
        <div className="projects-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {data.map((item) => {
            return (
              <div className="projects-content bg-white" key={item.id}>
                <div className="projects-img">
                  <Link to="/project_desc">
                    <img src={item.img} alt="Project image" />
                  </Link>
                </div>
                <div className="projects-title text-center my-5">
                  <h2 className="text-red-600 text-3xl font-semibold hover:text-red-500">
                    <Link to="/">{item.title}</Link>
                  </h2>
                </div>
                <div className="projects-text px-5 pt-2 pb-10 text-center">
                  {item.text.substring(0, 50)}...
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
