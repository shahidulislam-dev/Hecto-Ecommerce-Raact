import React from "react";
import NotFoundImg from "../../assets/notFoundImg.png";
import WaterMark from "../../assets/watermark.png";

const Message = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img src={NotFoundImg} alt="404 Not Found Image"/>
          <button className="bg-primary px-8 py-2 font-josef text-white text-[16px] rounded">
            Back to Home
          </button>
        </div>

        <div className="py-28 w-[904px] h-28 mx-auto mb-20">
          <img src={WaterMark} alt="Water Mark Image" />
        </div>
      </div>
    </section>
  );
};

export default Message;
