import React, { useEffect, useState } from "react";
import Logo from "../Images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [openMenu, SetOpenMenu] = useState(false);

  function menuOpen() {
    SetOpenMenu(true);
    document.querySelector(".nav-ul").classList.add("open");
  }

  function menuClose() {
    SetOpenMenu(false);
    document.querySelector(".nav-ul").classList.remove("open");
  }

  return (
    <>
      <header className="w-full fixed top-0 flex border-b bg-white z-[100]">
        <nav className="nav-menu w-full lg:flex block">
          <div className="flex justify-between w-full lg:w-40">
            <div className="icons">
              {openMenu ? (
                <AiOutlineClose
                  className="w-7 h-7 cursor-pointer"
                  onClick={menuClose}
                />
              ) : (
                <GiHamburgerMenu
                  className="w-7 h-7 cursor-pointer"
                  onClick={menuOpen}
                />
              )}
            </div>
            <div className="logo p-5">
              <a href="">
                <img src={Logo} alt="our_logo" />
              </a>
            </div>
          </div>
          <ul className="flex justify-end items-center nav-ul">
            <li className="menu active">
              <a href="">AnaSayfa</a>
            </li>
            <li className="menu">
              <a href="">Hakkımızda</a>
            </li>
            <li className="menu">
              <a href="">Projeler</a>
            </li>
            <li className="menu">
              <a href="">Blog</a>
            </li>
            <li className="menu">
              <a href="">Sıkca Sorulan Sorular</a>
            </li>
            <li className="menu">
              <a href="">Ekibimiz</a>
            </li>
            <li className="menu">
              <a href="">İletişim</a>
            </li>
            <li>
              <a
                href=""
                className="contact-button text-white px-7 py-3 capitalize bg-red-600 hover:bg-red-500"
              >
                İletişime Geç
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
