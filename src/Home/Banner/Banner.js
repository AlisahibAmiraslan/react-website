import Img1 from "./../../Images/about-image.jpg";

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
            Voluptate, voluptatibus eligendi
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
          <a
            href=""
            className="text-center py-4 text-white block w-40 bg-red-600 hover:bg-red-500"
          >
            Discover
          </a>
        </div>
      </div>
    </>
  );
}

export default Banner;
