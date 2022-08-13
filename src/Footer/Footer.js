import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-gray-800 py-10">
        <div className="text-white p-5">
          <h3 className="text-red-600 text-2xl">Holding</h3>
          <div>
            <a href="">Hakkımızda</a>
            <a href="">Biz Kimiz</a>
            <a href="">Vizyon Misyon</a>
            <a href="">Ekibimiz</a>
          </div>
        </div>
        <div className="text-white p-5">
          <h3 className="text-red-600 text-2xl">Our Company</h3>
          <div>
            <a href="">Kurumsal Bilgiler</a>
            <a href="">Sosyal Sorumluluk</a>
            <a href="">İnsan Kaynakları</a>
            <a href="">Şirket Bilgileri</a>
          </div>
        </div>
        <div className="text-white p-5">
          <h3 className="text-red-600 text-2xl">Products</h3>
          <div>
            <a href="">Özel Teklifler</a>
            <a href="">Kariyer</a>
            <a href="">Haberler</a>
            <a href="">Bizness</a>
          </div>
        </div>
        <div className="text-white p-5">
          <h3 className="text-red-600 text-2xl">Social Medya</h3>
          <div className="social">
            <a href="">
              <BsInstagram />
            </a>
            <a href="">
              <BsFacebook />
            </a>
            <a href="">
              <BsTwitter />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
