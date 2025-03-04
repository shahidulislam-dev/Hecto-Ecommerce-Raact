import React from 'react';
import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import OrderClock from "../../assets/orderClock.png";
import CheckList from "../../assets/checklist.png";
import DotedVerticla from "../../assets/DottedVertical.png";
import DotedHorizontal from "../../assets/DottedHorizontal.png";
import WaterMark from "../../assets/watermark.png";
import { useNavigate } from 'react-router-dom';

const OrderComplete = () => {
    const navigate = useNavigate();
    const goToShop = () => {
        navigate("/shop");
    };

    return (
        <section className="relative py-44">
            <div className="container mx-auto ">

                <div className="relative flex flex-col items-center text-center ">
                    <img src={OrderClock} alt="Clock Image In Order Page" className="absolute top-0 left-20 w-20 h-20" />
                    <img src={CheckList} alt="Checklist Image" className="absolute -bottom-36 right-20 w-20 h-20" />
                    {/* Vertical Dotted Line */}
                    <div className="absolute top-[90px] left-[115px] h-[340px] border-l-2 border-dashed border-gray-300"></div>

                    {/* Horizontal Dotted Line */}
                    <div className="absolute -bottom-28 right-40 w-[1260px] border-b-2 border-dashed border-gray-300"></div>
                    <div className="relative flex justify-center">
                        <img src={Vector1} alt="Background" className="w-24 h-20" />
                        <img
                            src={Vector2}
                            alt="Centered Icon"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-16 w-16 p-2"
                        />
                    </div>

                    <h1 className="font-josef font-bold text-secondery text-[36px] pt-6">
                        Your Order Is Completed
                    </h1>
                    <p className="font-lato text-paragraph text-[16px] w-[42%] mx-auto mt-5">
                        Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.
                    </p>

                    <button onClick={goToShop} className="mt-10 font-lato font-semibold text-[16px] text-white px-9 py-4 rounded-md bg-primary">
                        Continue Shopping
                    </button>
                </div>

                {/* Watermark */}
                <div className="w-[904px] h-28 mx-auto pt-56">
                    <img src={WaterMark} alt="Water Mark Image" />
                </div>
            </div>
        </section>
    );
};

export default OrderComplete;
