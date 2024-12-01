import React from "react";
import ClientImg1 from "../../assets/clientImg1.png";
import ClientImg2 from "../../assets/clientImg2.png";
import ClientImg3 from "../../assets/clientImg3.png";

const ClientReview = () => {
  return (
    <section className="mt-32 py-20 bg-[#FBFBFF] mb-40">
      <div className="container mx-auto text-center">
        <div>
          <p className="font-josef font-bold text-[42px]">Our Client Say!</p>
          <div className="pt-16 flex justify-center gap-6">
            <img
              src={ClientImg1}
              alt="Client Image"
              className="transition-transform transform hover:-translate-y-2"
            />
            <img
              src={ClientImg2}
              alt="Client Image"
              className="transition-transform transform hover:-translate-y-2"
            />
            <img
              src={ClientImg3}
              alt="Client Image"
              className="transition-transform transform hover:-translate-y-2"
            />
          </div>
          <div className="pt-6 w-[689px] h-56 mx-auto">
            <p className="font-lato font-semibold text-secondery text-[22px]">
              Selina Gomez
            </p>
            <p className="font-lato font-semibold text-[#8A8FB9] text-[10px]">
              Ceo At Webecy Digital
            </p>
            <p className="font-lato font-semibold text-[#8A8FB9] text-[16px] pt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
              ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a
              enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor
              aliquam lacus volutpat praesent.
            </p>
            <div className="flex gap-5 pt-10 justify-center">
                <div className="bg-[#FF75B0] w-10 h-1 hover:bg-primary cursor-pointer"></div>
                <div className="bg-[#FF75B0] w-10 h-1 hover:bg-primary cursor-pointer"></div>
                <div className="bg-[#FF75B0] w-10 h-1 hover:bg-primary cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
