import React, { useContext } from "react";
import SaleImg from "../../assets/saleImg.png"
import { FiZoomIn } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { apiData } from "../ContextApi";
const LeatestProducts = () => {

  let data = useContext(apiData);
  return (
    <section>
      <div className="container mx-auto">
        <div className="">
          <h3 className="font-josef font-bold text-[42px] text-[#1A0B5B] text-center">Leatest Products</h3>
          <div className="flex justify-center gap-14 font-lato text-[18px] text-secondery pt-5">
            <p className="hover:text-primary cursor-pointer hover:underline">New Arrival</p>
            <p className="hover:text-primary cursor-pointer hover:underline">Best Seller</p>
            <p className="hover:text-primary cursor-pointer hover:underline">Featured</p>
            <p className="hover:text-primary cursor-pointer hover:underline">Special Offer</p>
          </div>

          <div className="flex flex-wrap justify-between mt-16">
            {data.map((item) => (
              <div className="w-[30%] shadow-lg group relative mb-8">
                <div className="flex justify-center pt-16 pb-5 bg-[#F6F7FB] relative transition-all duration-300">
                  <div className="absolute top-8 left-4 overflow-hidden">
                    <div className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="pb-16">
                        <img src={SaleImg} alt="Sale Banner" />
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                        <FiShoppingCart />
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                        <FaRegHeart />
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                        <FiZoomIn />
                      </div>
                    </div>
                  </div>




                  <div className="">
                    <img
                      src={item.thumbnail}
                      alt="Product Image"
                      className="transition-transform duration-300 group-hover:scale-90 w-56 h-56" />
                  </div>

                </div>
                <div className="flex items-center py-4 justify-between px-2">
                  <h5 className="font-josef text-[#151875] text-[16px]">{item.title}</h5>

                  <div className="flex items-center gap-3">
                    <p className="font-josef text-[14px] text-secondery">${(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)}</p>
                    <p className="font-josef text-[12px] text-[#FB2448] line-through"> ${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeatestProducts;
