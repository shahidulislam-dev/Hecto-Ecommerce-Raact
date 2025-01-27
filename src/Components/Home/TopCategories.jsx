import React, { useContext, useRef } from "react";
import { apiData } from "../ContextApi";
import Slider from "react-slick";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const TopCategories = () => {
  let data = useContext(apiData);
  const sliderRef = useRef(null);

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section className="pt-20">
      <div className="container mx-auto">
        <div className="">
          <h1 className="font-josef font-bold text-secondery text-[42px] text-center">
            Top Categories
          </h1>
          <div className="pt-14">
            <Slider ref={sliderRef} {...settings}>
              {data.map((item) => (
                <div className="">
                  <div className="w-[90%] group relative rounded-full bg-[#F6F7FB] p-20 flex items-center justify-center hover:shadow-topCategoryShadow ml-2">
                    <img
                      src={item.thumbnail}
                      alt="Top Category Image"
                      className="transition-transform duration-300 group-hover:scale-110 w-44 h-44"
                    />
                    <button className="absolute opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300 bg-[#08D15F] font-josef text-[12px] text-white px-4 py-2 rounded text-sm">
                      View Shop
                    </button>
                  </div>
                  <h3 className="font-josef font-[400px] text-secondery text-[20px] text-center pt-7">
                    {item.title}
                  </h3>
                  <h5 className="font-josef font-[400px] text-secondery text-[16px] text-center">
                    ${item.price}
                  </h5>
                </div>
              ))}
            </Slider>
            <div className="flex justify-center mt-4 gap-4">
            <button
              className="bg-primary text-white px-4 py-4 rounded-full hover:bg-secondery"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <GoArrowLeft className='font-bold text-[20px]'/>
            </button>
            <button
              className="bg-primary text-white px-4 py-4 rounded-full hover:bg-secondery"
              onClick={() => sliderRef.current.slickNext()}
            >
             <GoArrowRight className='font-bold text-[20px]'/>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
