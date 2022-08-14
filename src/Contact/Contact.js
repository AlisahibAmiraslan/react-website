import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

function Contact() {
  return (
    <>
      <div className="banner-title w-full flex justify-center items-center mt-20">
        <div>
          <h1 className="text-7xl text-white mb-7">Contact</h1>
          <div className="flex">
            <Link to="/">
              <span className="text-2xl text-red-600">HOME</span>
            </Link>
            <AiOutlineRight className="text-white mx-5 w-6 h-6" />
            <span className="text-white text-2xl">CONTACT</span>
          </div>
        </div>
      </div>
      <section className="contact-form py-10 flex justify-center items-center">
        <div className="md:w-1/2 w-full bg-white flex justify-center items-center flex-col p-10">
          <div className="title mb-10">
            <h1 className="text-red-600 md:text-4xl text-xl">
              Do You Have a Problem?
            </h1>
          </div>
          <form className="w-full">
            <div className="flex flex-col w-full mb-5">
              <label htmlFor="name" className="text-red-600">
                Your Name
              </label>
              <input type="text" className="border-2 p-2" />
            </div>
            <div className="flex flex-col w-full mb-5">
              <label htmlFor="email" className="text-red-600">
                Your Email
              </label>
              <input type="email" className="border-2 p-2" />
            </div>
            <div className="flex flex-col w-full mb-5">
              <label htmlFor="phone" className="text-red-600">
                Your Phone Number
              </label>
              <input type="tel" className="border-2 p-2" />
            </div>
            <div className="flex flex-col w-full mb-5">
              <label htmlFor="text" className="text-red-600">
                Text
              </label>
              <textarea className="resize-none border-2 p-2 h-52"></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white w-full text-center py-3 hover:bg-red-500"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48219.44090845358!2d29.120524067864544!3d40.94391175252063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac4336e39827f%3A0x608e0ae971e8ddc2!2sMaltepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1660432279312!5m2!1str!2str"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: "800px" }}
        ></iframe>
      </section>
    </>
  );
}

export default Contact;
