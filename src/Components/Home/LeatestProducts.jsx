import React from "react";
import ChairImg1 from "../../assets/chairImg1.png"
import ChairImg2 from "../../assets/chairImg2.png"
import ChairImg3 from "../../assets/chairImg3.png"
import SaleImg from "../../assets/saleImg.png"
import { FiZoomIn } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
const LeatestProducts = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="">
            <h3 className="font-josef font-bold text-[42px] text-[#1A0B5B] text-center">Leatest Products</h3>
            <div className="flex justify-center gap-14 font-lato text-[18px] text-secondery pt-5 pb-14">
                <p className="hover:text-primary cursor-pointer hover:underline">New Arrival</p>
                <p className="hover:text-primary cursor-pointer hover:underline">Best Seller</p>
                <p className="hover:text-primary cursor-pointer hover:underline">Featured</p>
                <p className="hover:text-primary cursor-pointer hover:underline">Special Offer</p>
            </div>
          <div className="flex justify-between">
            <div className="w-[30%] shadow-lg group relative">
                        <div className="flex justify-center pt-16 pb-5 bg-[#F6F7FB] relative transition-all duration-300">
                          <div className="absolute top-8 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="pb-16">
                                <img src={SaleImg} alt="Sale Banner"/>
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
                          <div className="">
                          <img
                            src={ChairImg1}
                            alt="Product Image"
                            className="transition-transform duration-300 group-hover:scale-90 w-56 h-56"/>
                          </div>
                          
                        </div>
                        <div className="flex items-center py-4 justify-between px-2">
                          <h5 className="font-josef text-[#151875] text-[16px]">Comfort Handy Craft</h5>
                          
                          <div className="flex items-center gap-3">
                          <p className="font-josef text-[14px] text-secondery">$42.00</p>
                          <p className="font-josef text-[12px] text-[#FB2448]"> $65.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[30%] shadow-lg group relative">
                        <div className="flex justify-center pt-16 pb-5 bg-[#F6F7FB] relative transition-all duration-300">
                          <div className="absolute top-8 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="pb-16">
                                <img src={SaleImg} alt="Sale Banner"/>
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FiShoppingCart />
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FaRegHeart />
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FiZoomIn />
                            </div>
                          </div>
                          <div className="">
                          <img
                            src={ChairImg2}
                            alt="Product Image"
                            className="transition-transform duration-300 group-hover:scale-90 w-56 h-56"/>
                          </div>
                          
                        </div>
                        <div className="flex items-center py-4 justify-between px-2">
                          <h5 className="font-josef text-[#151875] text-[16px]">Comfort Handy Craft</h5>
                          
                          <div className="flex items-center gap-3">
                          <p className="font-josef text-[14px] text-secondery">$42.00</p>
                          <p className="font-josef text-[12px] text-[#FB2448]"> $65.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[30%] shadow-lg group relative">
                        <div className="flex justify-center pt-16 pb-5 bg-[#F6F7FB] relative transition-all duration-300">
                          <div className="absolute top-8 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="pb-16">
                                <img src={SaleImg} alt="Sale Banner"/>
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FiShoppingCart />
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FaRegHeart />
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FiZoomIn />
                            </div>
                          </div>
                          <div className="">
                          <img
                            src={ChairImg3}
                            alt="Product Image"
                            className="transition-transform duration-300 group-hover:scale-90 w-56 h-56"/>
                          </div>
                          
                        </div>
                        <div className="flex items-center py-4 justify-between px-2">
                          <h5 className="font-josef text-[#151875] text-[16px]">Comfort Handy Craft</h5>
                          
                          <div className="flex items-center gap-3">
                          <p className="font-josef text-[14px] text-secondery">$42.00</p>
                          <p className="font-josef text-[12px] text-[#FB2448]"> $65.00</p>
                          </div>
                        </div>
                      </div>
          </div>

          <div className="flex justify-between mt-28">
            <div className="w-[30%] shadow-lg group relative">
                        <div className="flex justify-center pt-16 pb-5 bg-[#F6F7FB] relative transition-all duration-300">
                          <div className="absolute top-8 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="pb-16">
                                <img src={SaleImg} alt="Sale Banner"/>
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
                          <div className="">
                          <img
                            src={ChairImg1}
                            alt="Product Image"
                            className="transition-transform duration-300 group-hover:scale-90 w-56 h-56"/>
                          </div>
                          
                        </div>
                        <div className="flex items-center py-4 justify-between px-2">
                          <h5 className="font-josef text-[#151875] text-[16px]">Comfort Handy Craft</h5>
                          
                          <div className="flex items-center gap-3">
                          <p className="font-josef text-[14px] text-secondery">$42.00</p>
                          <p className="font-josef text-[12px] text-[#FB2448]"> $65.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[30%] shadow-lg group relative">
                        <div className="flex justify-center pt-16 pb-5 bg-[#F6F7FB] relative transition-all duration-300">
                          <div className="absolute top-8 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="pb-16">
                                <img src={SaleImg} alt="Sale Banner"/>
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FiShoppingCart />
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FaRegHeart />
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FiZoomIn />
                            </div>
                          </div>
                          <div className="">
                          <img
                            src={ChairImg2}
                            alt="Product Image"
                            className="transition-transform duration-300 group-hover:scale-90 w-56 h-56"/>
                          </div>
                          
                        </div>
                        <div className="flex items-center py-4 justify-between px-2">
                          <h5 className="font-josef text-[#151875] text-[16px]">Comfort Handy Craft</h5>
                          
                          <div className="flex items-center gap-3">
                          <p className="font-josef text-[14px] text-secondery">$42.00</p>
                          <p className="font-josef text-[12px] text-[#FB2448]"> $65.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[30%] shadow-lg group relative">
                        <div className="flex justify-center pt-16 pb-5 bg-[#F6F7FB] relative transition-all duration-300">
                          <div className="absolute top-8 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="pb-16">
                                <img src={SaleImg} alt="Sale Banner"/>
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FiShoppingCart />
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FaRegHeart />
                            </div>
                            <div className="w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                              <FiZoomIn />
                            </div>
                          </div>
                          <div className="">
                          <img
                            src={ChairImg3}
                            alt="Product Image"
                            className="transition-transform duration-300 group-hover:scale-90 w-56 h-56"/>
                          </div>
                          
                        </div>
                        <div className="flex items-center py-4 justify-between px-2">
                          <h5 className="font-josef text-[#151875] text-[16px]">Comfort Handy Craft</h5>
                          
                          <div className="flex items-center gap-3">
                          <p className="font-josef text-[14px] text-secondery">$42.00</p>
                          <p className="font-josef text-[12px] text-[#FB2448]"> $65.00</p>
                          </div>
                        </div>
                      </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LeatestProducts;
