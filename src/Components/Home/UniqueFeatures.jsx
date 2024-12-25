import React from "react";
import TrendingImg from "../../assets/trendingImg.png";

const UniqueFeatures = () => {
  return (
    <section className="mt-32 bg-[#F1F0FF]">
      <div className="container mx-auto">
        <div className="py-5 flex items-center justify-between pl-10">
          <div className="w-[40%]">
            <img
              className="w-full"
              src={TrendingImg}
              alt="Treanding Product Image"
            />
          </div>
          <div className="w-[50%]">
            <h2 className="font-josef font-semibold text-secondery text-[35px] w-[70%]">
              Unique Features Of leatest & Trending Poducts
            </h2>
            <div className="flex items-center gap-4 pt-7">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <p className="font-lato font-[500px] text-[16px] text-[#ACABC3]">
                All frames constructed with hardwood solids and laminates
              </p>
            </div>
            <div className="flex items-center gap-4 pt-3">
              <div className="w-3 h-3 bg-[#2B2BF5] rounded-full"></div>
              <p className="font-lato font-[500px] text-[16px] text-[#ACABC3] w-[60%]">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
            </div>
            <div className="flex items-center gap-4 pt-3">
              <div className="w-3 h-3 bg-[#2BF5CC] rounded-full"></div>
              <p className="font-lato font-[500px] text-[16px] text-[#ACABC3]">
                Arms, backs and seats are structurally reinforced
              </p>
            </div>
            <div className="flex items-center pt-9 gap-5">
              <button className="px-6 py-3 bg-primary text-white font-josef text-[17px]">
                Add To Cart
              </button>
              <div className="font-josef text-[14px] text-secondery">
                <p>B&B Italian Sofa</p>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;
