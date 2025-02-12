import React, { useContext, useState } from "react";
import SaleImg from "../../assets/saleImg.png";
import { FiZoomIn, FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { apiData } from "../ContextApi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useDispatch } from "react-redux";
import { addToCart, productDetails } from "../Slices/CartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const LeatestProducts = () => {
  let data = useContext(apiData);

  // Splitting data into four equal parts (6 products per tab)
  const chunkSize = 6;
  const splitData = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    splitData.push(data.slice(i, i + chunkSize));
  }

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));
    toast.success("Added To Cart!!", { position: "top-center", autoClose: 1000, });
  }

  const handleProductDetail = (product) => {
    dispatch(productDetails(product));
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="font-josef font-bold text-[42px] text-[#1A0B5B]">Latest Products</h3>
        </div>

        <Tabs>
          <TabList className="border-none outline-none flex items-center justify-center gap-20 font-josef text-secondery text-[20px] pt-8">
            <Tab className="cursor-pointer outline-none px-4 py-2 text-primary hover:text-secondery">New Arrival</Tab>
            <Tab className="cursor-pointer outline-none px-4 py-2 text-primary hover:text-secondery">Best Seller</Tab>
            <Tab className="cursor-pointer outline-none px-4 py-2 text-primary hover:text-secondery">Featured</Tab>
            <Tab className="cursor-pointer outline-none px-4 py-2 text-primary hover:text-secondery">Special Offer</Tab>
          </TabList>

          {splitData.map((products, index) => (
            <TabPanel key={index} >
              <div className="flex flex-wrap justify-between mt-16">
                {products.map((item) => (
                  <div className="w-[30%] shadow-lg group relative mb-8" key={item.id}>
                    <div className="flex justify-center pt-16 pb-5 bg-[#F6F7FB] relative">
                      <div className="absolute top-8 left-4 overflow-hidden">
                        <div className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="pb-16">
                            <img src={SaleImg} alt="Sale Banner" />
                          </div>
                          <div onClick={()=> handleAddToCart(item)} className="flex justify-center items-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
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
                      <Link to={`/product-details/${(item.title).replaceAll(' ', '_')}`} onClick={() => handleProductDetail(item)}><div>
                        <img
                          src={item.thumbnail}
                          alt="Product Image"
                          className="transition-transform duration-300 group-hover:scale-90 w-56 h-56"
                        />
                      </div></Link>
                    </div>

                    <Link to={`/product-details/${(item.title).replaceAll(' ', '_')}`} onClick={() => handleProductDetail(item)}><div className="flex items-center py-4 justify-between px-2">
                      <h5 className="font-josef text-[#151875] text-[16px]">{item.title}</h5>
                      <div className="flex items-center gap-3">
                        <p className="font-josef text-[14px] text-secondery">
                          ${(
                            item.price - item.price * (item.discountPercentage / 100)
                          ).toFixed(2)}
                        </p>
                        <p className="font-josef text-[12px] text-[#FB2448] line-through">
                          ${item.price}
                        </p>
                      </div>
                    </div></Link>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default LeatestProducts;
