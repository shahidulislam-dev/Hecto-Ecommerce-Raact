import React from "react";
import LatestBlogImg from "../../assets/latestBlogImg.png";
import LatestBlogImg1 from "../../assets/latestBlogImg1.png";
import LatestBlogImg2 from "../../assets/latestBlogImg2.png";
import { FaPenNib } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const LatestBlog = () => {
  return (
    <section className="pt-24 pb-24">
      <div className="container mx-auto">
        <h1 className="font-josef font-bold text-secondery text-[42px] text-center pb-20">
          Leatest Blog
        </h1>
        <div className="flex items-center justify-between">
          <div className="shadow-lg w-[32%]">
            <img
              src={LatestBlogImg}
              alt="Latest Blog Section Image"
              className="rounded-lg w-full"
            />
            <div className="pl-5">
              <div className="flex items-center gap-8 font-josef text-[14px] pt-5">
                <div className="flex items-center gap-2">
                  <FaPenNib className="text-[12px] text-primary" />
                  <h5>SaberAli</h5>
                </div>
                <div className="flex items-center gap-2">
                  <LuCalendarDays className="text-[12px] text-[#FFA454]" />
                  <h5>21 August,2020</h5>
                </div>
              </div>
              <h4 className="pt-8 font-josef font-semibold text-secondery text-[18px] hover:text-primary">
                Top esssential Trends in 2021
              </h4>
              <p className="font-lato text-[16px] text-[#72718F] pt-4 w-[70%]">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <p className="font-lato text-[16px] text-secondery pt-4 underline hover:text-primary pb-8">
                Read More
              </p>
            </div>
          </div>
          <div className="shadow-lg w-[32%]">
            <img
              src={LatestBlogImg1}
              alt="Latest Blog Section Image"
              className="rounded-lg w-full"
            />
            <div className="pl-5">
              <div className="flex items-center gap-8 font-josef text-[14px] pt-5">
                <div className="flex items-center gap-2">
                  <FaPenNib className="text-[12px] text-primary" />
                  <h5>SaberAli</h5>
                </div>
                <div className="flex items-center gap-2">
                  <LuCalendarDays className="text-[12px] text-[#FFA454]" />
                  <h5>21 August,2020</h5>
                </div>
              </div>
              <h4 className="pt-8 font-josef font-semibold text-secondery text-[18px] hover:text-primary">
                Top esssential Trends in 2021
              </h4>
              <p className="font-lato text-[16px] text-[#72718F] pt-4 w-[70%]">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <p className="font-lato text-[16px] text-secondery pt-4 underline hover:text-primary pb-8">
                Read More
              </p>
            </div>
          </div>
          <div className="shadow-lg w-[32%]">
            <img
              src={LatestBlogImg2}
              alt="Latest Blog Section Image"
              className="rounded-lg w-full"
            />
            <div className="pl-5">
              <div className="flex items-center gap-8 font-josef text-[14px] pt-5">
                <div className="flex items-center gap-2">
                  <FaPenNib className="text-[12px] text-primary" />
                  <h5>SaberAli</h5>
                </div>
                <div className="flex items-center gap-2">
                  <LuCalendarDays className="text-[12px] text-[#FFA454]" />
                  <h5>21 August,2020</h5>
                </div>
              </div>
              <h4 className="pt-8 font-josef font-semibold text-secondery text-[18px] hover:text-primary">
                Top esssential Trends in 2021
              </h4>
              <p className="font-lato text-[16px] text-[#72718F] pt-4 w-[70%]">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <p className="font-lato text-[16px] text-secondery pt-4 underline hover:text-primary pb-8">
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
