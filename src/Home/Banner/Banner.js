import Img1 from "./../../Images/about-image.jpg";
import React from "react";
import ReactPlayer from "react-player";
import Video from "./../../Images/video.mp4";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="banner-about grid lg:grid-cols-2 grid-cols-1 lg:px-20 px-5 py-28 gap-20">
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
          <Link to="about">
            <span className="bg-black text-center py-4 text-white block w-40 hover:bg-gray-600">
              Hakkımızda
            </span>
          </Link>
        </div>
        <div className="banner-img">
          <img src={Img1} alt="about İmage" />
        </div>
      </div>
      <div className="banner-suggestion grid lg:grid-cols-3 grid-cols-1 bg-gray-100 py-10">
        <div className="p-5">
          <h3 className="text-red-600 text-2xl mb-5 font-semibold">
            Lorem ipsum dolor sit amet
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
            voluptatibus eligendi delectus harum molestias quis perspiciatis
            eius, magni culpa at dolor ipsa exercitationem esse perferendis
            ratione dolores officiis consequuntur vel!
          </p>
        </div>
        <div className="p-5">
          <h3 className="text-red-600 text-2xl mb-5 font-semibold">
            Voluptate voluptatibus eligendi
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            reiciendis quas dolores odio, sunt vitae dolore. Repellat aut
            adipisci labore nisi eveniet quasi dolores? Molestiae, qui. Tenetur
            odio nihil aliquid.
          </p>
        </div>
        <div className="p-5">
          <h3 className="text-red-600 text-2xl mb-5 font-semibold">
            Magni culpa at dolor ipsa
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi aut,
            ipsum doloremque iure rem dolor, impedit quidem delectus quibusdam,
            quaerat error accusamus et aliquid eveniet. Molestias fuga itaque
            saepe omnis.
          </p>
        </div>
      </div>
      <div className="banner-discover flex justify-center items-center">
        <div className="md:w-1/2 w-full px-5">
          <p className="mb-8 text-white md:text-2xl text-base">
            Strategies That Work Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Fuga velit, assumenda ipsa, facere ducimus id
            rerum, itaque minus dolore porro quis animi ea architecto iure
            commodi. Fuga iure harum beatae?
          </p>
          <Link
            to="/question"
            className="text-center py-4 text-white block w-40 bg-red-600 hover:bg-red-500"
          >
            Discover
          </Link>
        </div>
      </div>
      <div className="banner-video w-full md:mt-0 mt-14">
        <ReactPlayer
          url={Video}
          loop={true}
          playing={true}
          width="100%"
          height="auto"
          config={{
            file: {
              attributes: {
                autoPlay: true,
                muted: true,
              },
            },
          }}
        />
      </div>
      <div className="banner-contact grid lg:grid-cols-2 grid-cols-1 lg:px-20 px-5 py-28 gap-20">
        <div className="banner-contact-content py-10">
          <span className="text-red-600 text-sm">CONTACT INFO</span>
          <h1 className="md:text-4xl text-xl">Get in Touch with Us</h1>
          <div className="pl-2 border-l-2 border-red-600 my-10">
            <div>
              <span className="mr-5 text-red-600">Adress:</span>
              <span>Berlin,Germany</span>
            </div>
            <div>
              <span className="mr-5 text-red-600">Phone:</span>
              <span>707-946-7464</span>
            </div>
            <div>
              <span className="mr-5 text-red-600">Email:</span>
              <span>info@yoursite.com</span>
            </div>
          </div>
          <Link to="contact">
            <span className="bg-black text-center py-4 text-white block md:w-40 hover:bg-gray-600 w-full">
              Contact
            </span>
          </Link>
        </div>
        <div className="banner-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48219.44090845358!2d29.120524067864544!3d40.94391175252063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac4336e39827f%3A0x608e0ae971e8ddc2!2sMaltepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1660432279312!5m2!1str!2str"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", height: "400px" }}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Banner;
