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
          <div className="rounded-full bg-[#F6F7FB] p-20">
            <img src={TrendChairImg} alt="Top Category Image" />
          </div>
          <div className="rounded-full bg-[#F6F7FB] p-20">
            <img src={TrendChairImg} alt="Top Category Image" />
          </div>
          <div className="rounded-full bg-[#F6F7FB] p-20">
            <img src={TrendChairImg} alt="Top Category Image" />
          </div>
          <div className="rounded-full bg-[#F6F7FB] p-20">
            <img src={TrendChairImg} alt="Top Category Image" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
