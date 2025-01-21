import React from "react";
import LatestUpdateImg from "../../assets/latestUpdateImg.png";
import WaterMark from "../../assets/watermark.png";
import {useNavigate } from "react-router-dom";

const LatestUpdates = () => {
  const navigate = useNavigate();
  const handleNavigation = ()=>{
    navigate('/shop');
  }
  return (
    <section className="mt-32 relative">
      <img
        src={LatestUpdateImg}
        alt="Latest Updates Section Background Photo"
        className="w-full h-auto"
      />
      <div className="container mx-auto absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="text-center w-[35%]">
          <h2 className="font-josef font-semibold text-[35px] text-secondery">
            Get Latest Update By Subscribe Our Newsletter
          </h2>
          <button onClick={handleNavigation} className="bg-primary px-9 py-4 font-josef text-white text-[17px] mt-7">Shop Now</button>
        </div>
      </div>
      <div className="pt-24 flex justify-center">
        <img src={WaterMark} alt="Water Mark Image" />
      </div>
    </section>
  );
};

export default LatestUpdates;
