import React, { useContext, useRef } from "react";
import RelatedProductImg from "../../assets/latestBlogImg.png";
import { IoMdStar } from "react-icons/io";
import WaterMark from "../../assets/watermark.png";
import { apiData } from "../ContextApi";
import { useSelector } from "react-redux";
import { FiZoomIn } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addToCart, productDetails } from "../Slices/CartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RelatedProducts = () => {
  let data = useSelector((state) => state.cartItemManager.productDetail);
  let selectedCategory = data[0].category;

  let products = useContext(apiData);

  const relatedProducts = products.filter(
    (item) => item.category === selectedCategory
  );

  const sliderRef = useRef(null);

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));
    toast.success("Added To Cart!!", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  const handleProductDetail = (product) => {
    dispatch(productDetails(product));
  };

  return (
    <section>
      <div className="container mx-auto py-24">
        <div className="font-josef font-bold text-secondery text-[36px]">
          <h2 className="text-center">Related Products</h2>
        </div>
        <div className="pt-12">
          <Slider ref={sliderRef} {...settings}>
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="!w-[90%] mb-10 pb-5 shadow-md hover:shadow-lg group"
              >
                <div className="relative overflow-hidden group">
                  <Link
                    to={`/product-details/${item.title.replaceAll(" ", "_")}`}
                    onClick={() => handleProductDetail(item)}
                  >
                    <div className="flex items-center justify-center bg-[#F6F7FB] px-10 py-10 transition-all duration-300 group-hover:bg-[#EBF4F3]">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-48 h-48 group-hover:scale-90 transition-all duration-500"
                      />
                    </div>
                  </Link>
                  <div className="absolute bottom-2 left-2 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(item);
                      }}
                      className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white"
                    >
                      <FiShoppingCart />
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white">
                      <FaRegHeart />
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white">
                      <FiZoomIn />
                    </div>
                  </div>
                </div>

                <Link
                  to={`/product-details/${item.title.replaceAll(" ", "_")}`}
                  onClick={() => handleProductDetail(item)}
                >
                  <div className="">
                    <h4 className="font-josef font-semibold text-secondery text-[16px] pt-5 text-center">
                      {item.title}
                    </h4>

                    <div className="flex items-center justify-center gap-2 font-josef font-[400px] text-[14px]">
                      <p className="text-secondery">
                        $
                        {(
                          item.price -
                          item.price * (item.discountPercentage / 100)
                        ).toFixed(2)}
                      </p>
                      <p className="text-primary line-through">${item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
          {relatedProducts.length > 4 && (
            <div className="flex justify-center mt-4 gap-4">
              <button
                className="bg-primary text-white px-4 py-4 rounded-full hover:bg-secondery"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <GoArrowLeft className="font-bold text-[20px]" />
              </button>
              <button
                className="bg-primary text-white px-4 py-4 rounded-full hover:bg-secondery"
                onClick={() => sliderRef.current.slickNext()}
              >
                <GoArrowRight className="font-bold text-[20px]" />
              </button>
            </div>
          )}
        </div>
        <div className="pt-28 flex justify-center">
          <img src={WaterMark} alt="Water Mark Image" />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
