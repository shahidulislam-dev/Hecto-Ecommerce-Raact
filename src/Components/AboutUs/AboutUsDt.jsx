import React from "react";
import AboutImg from "../../assets/aboutImg.png";

const AboutUsDt = () => {
  return (
    <section className="pt-32">
      <div className="container mx-auto">
        <div className="">
          <div className="">
            <div className="flex items-center justify-between gap-14">
              <div className="w-[50%]">
                <img src={AboutImg} alt="About Us Image" className="w-full"/>
              </div>
              <div className="w-[50%]">
                <h3 className="font-josef font-bold text-secondery text-[36px] pr-40">
                  Know About Our Ecomerce Business, History
                </h3>
                <p className="font-lato font-semibold text-[#8A8FB9] text-[16px] pt-4 pb-24 pr-40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis neque ultrices mattis aliquam, malesuada diam est.
                  Malesuada sem tristique amet erat vitae eget dolor lobortis.
                  Accumsan faucibus vitae lobortis quis bibendum quam.
                </p>
                <button className="bg-primary px-5 py-2 rounded-md font-lato font-semibold text-white text-[18px]">Contact Us</button>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDt;
