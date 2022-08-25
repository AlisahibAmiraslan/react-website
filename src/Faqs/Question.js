import React from "react";
import items from "./sss";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import info from "./customer_info";

function Question() {
  return (
    <>
      <div className="banner-title w-full flex justify-center items-center mt-20">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-7xl text-white mb-7">Question</h1>
          <div className="flex">
            <Link to="/">
              <span className="text-2xl text-red-600">HOME</span>
            </Link>
            <AiOutlineRight className="text-white mx-5 w-6 h-6" />
            <span className="text-white text-2xl">SSS</span>
          </div>
        </div>
      </div>
      <section className="w-full sss">
        <div className="lg:w-1/2 w-full mx-auto py-10">
          <h1 className="text-gray-500 md:text-5xl text-center mb-10 text-xl">
            Sıkca Sorulan Sorular
          </h1>
          <Accordion>
            {items.map((item) => (
              <AccordionItem key={item.id}>
                <AccordionItemHeading>
                  <AccordionItemButton>{item.title}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{item.content}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="customer w-full">
        <div className="md:w-1/2 mx-auto w-full">
          <Swiper
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper py-20"
          >
            {info.map((info) => {
              return (
                <SwiperSlide key={info.id}>
                  <div className="customer-wrapper w-full flex justify-center items-center flex-col">
                    <div className="customer-img mb-10">
                      <img src={info.img} alt="customer" />
                    </div>
                    <div className="customer-name md:text-2xl">
                      <h3>{info.name}</h3>
                    </div>
                    <div className="customer-job text-red-600 text-xs">
                      <span>{info.job}</span>
                    </div>
                    <div className="customer-text mt-10 text-center">
                      <p>{info.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Question;
