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

function Question() {
  return (
    <>
      <div className="banner-title w-full flex justify-center items-center mt-20">
        <div>
          <h1 className="text-7xl text-white mb-7">About</h1>
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
        <div className="w-1/2 mx-auto py-20">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="customer-wrapper w-full flex justify-center items-center flex-col">
                <div className="customer-img">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"
                    alt="customer"
                  />
                </div>
                <div className="customer-name">
                  <h3>Anjorin Werner</h3>
                </div>
                <div className="customer-job">
                  <span>Front-end</span>
                </div>
                <div className="customer-text">
                  <p>
                    This is the first item's accordion body. It is shown by
                    default, until the collapse plugin adds the appropriate
                    classes that we use to style each element.", job: "Web
                    Developer
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Question;
