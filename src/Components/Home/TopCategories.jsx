import React from "react";
import TrendChairImg from "../../assets/trendChairImg.png";
import TrendChairImg1 from "../../assets/trendChairImg1.png";
import TrendChairImg2 from "../../assets/trendChairImg2.png";
import TrendChairImg3 from "../../assets/trendChairImg3.png";

const TopCategories = () => {
  return (
    <section className="pt-20">
      <div className="container mx-auto">
        <div className="">
          <h1 className="font-josef font-bold text-secondery text-[42px] text-center">
            Top Categories
          </h1>
          <div className="flex items-center justify-between pt-14">
          <div className="group relative rounded-full bg-[#F6F7FB] p-20 flex items-center justify-center hover:shadow-topCategoryShadow">
            <img src={TrendChairImg} alt="Top Category Image"  className="transition-transform duration-300 group-hover:scale-110 w-44 h-44"/>
            <button className="absolute opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300 bg-[#08D15F] font-josef text-[12px] text-white px-4 py-2 rounded text-sm"
              > View Shop </button>
          </div>
          <div className="group relative rounded-full bg-[#F6F7FB] p-20 flex items-center justify-center hover:shadow-topCategoryShadow">
            <img src={TrendChairImg1} alt="Top Category Image"  className="transition-transform duration-300 group-hover:scale-110 w-44 h-44"/>
            <button className="absolute  opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300 bg-[#08D15F] font-josef text-[12px] text-white px-4 py-2 rounded text-sm"
              > View Shop </button>
          </div>
          <div className="group relative rounded-full bg-[#F6F7FB] p-20 flex items-center justify-center hover:shadow-topCategoryShadow">
            <img src={TrendChairImg2} alt="Top Category Image"  className="transition-transform duration-300 group-hover:scale-110 w-44 h-44"/>
            <button className="absolute  opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300 bg-[#08D15F] font-josef text-[12px] text-white px-4 py-2 rounded text-sm"
              > View Shop </button>
          </div>
          <div className="group relative rounded-full bg-[#F6F7FB] p-20 flex items-center justify-center hover:shadow-topCategoryShadow">
            <img src={TrendChairImg3} alt="Top Category Image"  className="transition-transform duration-300 group-hover:scale-110 w-44 h-44"/>
            <button className="absolute  opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-300 bg-[#08D15F] font-josef text-[12px] text-white px-4 py-2 rounded text-sm"
              > View Shop </button>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
