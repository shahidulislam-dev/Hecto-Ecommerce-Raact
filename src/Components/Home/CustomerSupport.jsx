import React from "react";
import FeaturesCard from "../AboutUs/FeaturesCard";
import DelivaryIcon from "../../assets/delivaryIcon.png";
import CashBackIcon from "../../assets/cashbackIcon.png";
import QualityIcon from "../../assets/qualityIcon.png";
import SupportIcon from "../../assets/supportIcon.png";

const CustomerSupport = () => {
  return (
    <section className="pt-14">
      <div className="container mx-auto">
        <div className="">
          <h3 className="font-josef font-bold text-[42px] text-[#1A0B5B] text-center">
            What Shopex Offer!
          </h3>
          <div className="flex justify-between gap-10">
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

export default CustomerSupport;
