import React from "react";
import { HiCheck } from "react-icons/hi";
import DiscountChairImg from "../../assets/discountChairImg.png";

const DiscountItem = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto">
        <div>
          <h1 className="font-josef font-bold text-secondery text-[42px] text-center">
            Discount Item
          </h1>
          <div className="flex items-center justify-center gap-5 font-lato text-secondery text-[16px]">
            <h5 className="hover:text-primary hover:underline relative group">
              <span className="absolute left-[85px] top-[3px]  opacity-0 group-hover:opacity-100">
                •
              </span>
              Wood Chair
            </h5>
            <h5 className="hover:text-primary hover:underline relative group">
              <span className="absolute left-[90px] top-[3px]  opacity-0 group-hover:opacity-100">
                •
              </span>
              Plastic Chair
            </h5>
            <h5 className="hover:text-primary hover:underline relative group">
              <span className="absolute left-[107px] top-[3px]  opacity-0 group-hover:opacity-100">
                •
              </span>
              Sofa Collection
            </h5>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="w-[45%]">
              <h1 className="font-josef font-semibold text-secondery text-[35px]">
                20% Discount Of All Products
              </h1>
              <h4 className="font-josef text-primary text-[21px] pt-4">
                Eams Sofa Compact
              </h4>
              <p className="font-lato text-[#B7BACB] text-[17px] pt-5 w-[75%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>
              <div className="flex items-center gap-10 pt-7">
                <div className="font-lato text-[16px] text-[#B7BACB]">
                  <div className="flex gap-2 items-center">
                    <HiCheck />
                    <p>Material expose like metals</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <HiCheck />
                    <p>Simple neutral colours.</p>
                  </div>
                </div>
                <div className="font-lato text-[16px] text-[#B7BACB]">
                  <div className="flex gap-2 items-center">
                    <HiCheck />
                    <p>Material expose like metals</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <HiCheck />
                    <p>Simple neutral colours.</p>
                  </div>
                </div>
              </div>
              <div className="pt-9">
                <button className="px-12 py-5 bg-primary text-white font-josef text-[17px]">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="w-[50%]">
              <img src={DiscountChairImg} alt="Discount Section Chair Image" className="w-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
