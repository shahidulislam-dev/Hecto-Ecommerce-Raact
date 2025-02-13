import React, { useContext, useRef } from 'react';
import { FiZoomIn } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { apiData } from '../ContextApi';
import Slider from 'react-slick';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { addToCart, productDetails } from '../Slices/CartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Featured = () => {
  let data = useContext(apiData);
  const sliderRef = useRef(null);


  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));
    toast.success("Added To Cart!!", { position: "top-center", autoClose: 1000, });
  }

  const handleProductDetail = (product) => {
    dispatch(productDetails(product));
  }

  return (
    <section className="pt-12 pb-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-josef font-bold text-[42px] text-[#1A0B5B]">
            Featured Products
          </h1>
        </div>
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {data.map((item) => (
              <div className="!w-[90%] shadow-lg group relative mb-5" key={item.id}>
                <div className="flex justify-center pt-20 pb-5 bg-[#F6F7FB] relative transition-all duration-300">
                  <div  className="absolute top-4 left-4 flex gap-2 transform -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <div onClick={() => { handleAddToCart(item) }} className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                      <FiShoppingCart />
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                      <FaRegHeart />
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                      <FiZoomIn />
                    </div>
                  </div>
                  <img
                    src={item.thumbnail}
                    alt="Product Image"
                    className="transition-transform duration-300 group-hover:scale-90 w-48 h-48 pb-5"
                  />
                  <Link to={`/product-details/${(item.title).replaceAll(' ', '_')}`} onClick={() => handleProductDetail(item)}><button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#08D15F] hover:bg-primary text-white font-josef text-[12px] px-4 py-2 rounded">
                    View More
                  </button></Link>
                </div>
                <div className="flex flex-col items-center py-6 bg-white transition-colors duration-300 group-hover:bg-secondery">
                  <h4 className="font-lato font-bold text-primary text-[18px] group-hover:text-white">
                    {item.title}
                  </h4>
                  <div className="flex gap-2 pt-3">
                    <div className="w-4 h-1 bg-[#05E6B7]"></div>
                    <div className="w-4 h-1 bg-[#F701A8]"></div>
                    <div className="w-4 h-1 bg-[#00009D] group-hover:bg-[#FFEAC1]"></div>
                  </div>
                  <p className="pt-3 font-josef text-[14px] text-secondery group-hover:text-white">
                    Code - {item.sku}
                  </p>
                  <p className="pt-3 font-josef text-[14px] text-secondery group-hover:text-white">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center mt-4 gap-4">
            <button
              className="bg-primary text-white px-4 py-4 rounded-full hover:bg-secondery"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <GoArrowLeft className='font-bold text-[20px]' />
            </button>
            <button
              className="bg-primary text-white px-4 py-4 rounded-full hover:bg-secondery"
              onClick={() => sliderRef.current.slickNext()}
            >
              <GoArrowRight className='font-bold text-[20px]' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
