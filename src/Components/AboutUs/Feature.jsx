import React from "react";
import FeaturesCard from "./FeaturesCard";
import DelivaryIcon from "../../assets/delivaryIcon.png";
import CashBackIcon from "../../assets/cashbackIcon.png";
import QualityIcon from "../../assets/qualityIcon.png";
import SupportIcon from "../../assets/supportIcon.png";

const Feature = () => {
  return (
    <section className="pt-36">
      <div className="container mx-auto">
        <div className="">
          <div className="text-center">
            <p className="font-josef font-bold text-[42px]">Our Features</p>
          </div>
          <div className="flex gap-5 justify-between">
            <FeaturesCard icon={DelivaryIcon} heading="Free Delivery" />
            <FeaturesCard icon={CashBackIcon} heading="100% Cash Back" />
            <FeaturesCard icon={QualityIcon} heading="Quality Product" />
            <FeaturesCard icon={SupportIcon} heading="24/7 Support" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
