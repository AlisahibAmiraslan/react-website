import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import data from "./data";

function Team() {
  return (
    <>
      <div className="banner-title w-full flex justify-center items-center mt-20">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-7xl text-white mb-7">Team</h1>
          <div className="flex">
            <Link to="/">
              <span className="text-2xl text-red-600">HOME</span>
            </Link>
            <AiOutlineRight className="text-white mx-5 w-6 h-6" />
            <span className="text-white text-2xl">TEAM</span>
          </div>
        </div>
      </div>
      <section className="team w-full py-14" style={{ background: "#f5f6fa" }}>
        <div className="team-title text-center">
          <span className="text-red-600 underline font-semibold">
            Our Staff
          </span>
          <h1 className="md:text-5xl text-xl my-5">Team of Professionals</h1>
        </div>
        <div className="team-container md:px-32 px-5 py-20 grid lg:grid-cols-2 grid-cols-1 gap-20">
          {data.map((team) => {
            return (
              <div key={team.id}>
                <div className="team-content flex md:flex-row flex-col bg-white rounded-xl">
                  <div className="team-image">
                    <img src={team.img} alt="team-staff" />
                  </div>
                  <div className="team-about py-10 px-5">
                    <div className="team-name text-3xl text-gray-500">
                      {team.name}
                    </div>
                    <div className="team-job text-sm font-bold mb-14 text-red-600">
                      {team.job}
                    </div>
                    <div className="team-text text-gray-800">{team.text}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Team;
