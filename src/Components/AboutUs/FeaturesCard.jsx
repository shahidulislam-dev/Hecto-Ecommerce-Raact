import React from "react";

const FeaturesCard = (props) => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="h-80 shadow-lg group relative">
          <img
            src={props.icon}
            alt="Features Icon"
            className="px-[103px] pt-16 mx-auto"
          />
          <h5 className="font-josef font-semibold text-secondery text-[22px] text-center pt-5">
            {props.heading}
          </h5>
          <p className="font-lato font-bold text-[16px] text-[#8A8FB9] text-center px-5 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
          {/* Yellow bottom border */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FF9100] transition-all group-hover:w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;
