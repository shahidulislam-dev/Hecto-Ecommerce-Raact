import React, { useContext} from 'react'
import ChairImg from "../../assets/chairImg.png";
import { FiZoomIn } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { apiData } from "../ContextApi";


const Featured = () => {
 let data = useContext(apiData);
 console.log(data);
 
  return (
    <section className="pt-12 pb-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-josef font-bold text-[42px] text-[#1A0B5B]">
            Featured Products
          </h1>
        </div>
        <div className="flex justify-between">
        <div className="w-[23%] shadow-lg group relative">
            <div className="flex justify-center pt-20 pb-5 bg-[#F6F7FB] relative transition-all duration-300 group-hover:pt-16 group-hover:pb-10">
              <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FiShoppingCart />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FaRegHeart />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FiZoomIn />
                </div>
              </div>
              <img
                src={ChairImg}
                alt="Product Image"
                className="transition-transform duration-300 group-hover:scale-90"/>
              <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#08D15F] hover:bg-primary text-white font-josef text-[12px] px-4 py-2 rounded">
                View More
              </button>
            </div>
            <div className="flex flex-col items-center py-6 bg-white transition-colors duration-300 group-hover:bg-secondery">
              <h4 className="font-lato font-bold text-primary text-[18px] group-hover:text-white">Cantilever chair</h4>
              <div className="flex gap-2 pt-3">
                <div className="w-4 h-1 bg-[#05E6B7]"></div>
                <div className="w-4 h-1 bg-[#F701A8]"></div>
                <div className="w-4 h-1 bg-[#00009D] group-hover:bg-[#FFEAC1]"></div>
              </div>
              <p className="pt-3 font-josef text-[14px] text-secondery group-hover:text-white">Code - Y523201</p>
              <p className="pt-3 font-josef text-[14px] text-secondery group-hover:text-white"> $42.00</p>
            </div>
          </div>
          <div className="w-[23%] shadow-lg group relative">
            <div className="flex justify-center pt-20 pb-5 bg-[#F6F7FB] relative transition-all duration-300 group-hover:pt-16 group-hover:pb-10">
              <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FiShoppingCart />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FaRegHeart />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FiZoomIn />
                </div>
              </div>
              <img
                src={ChairImg}
                alt="Product Image"
                className="transition-transform duration-300 group-hover:scale-90"/>
              <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#08D15F] hover:bg-primary text-white font-josef text-[12px] px-4 py-2 rounded">
                View More
              </button>
            </div>
            <div className="flex flex-col items-center py-6 bg-white transition-colors duration-300 group-hover:bg-secondery">
              <h4 className="font-lato font-bold text-primary text-[18px] group-hover:text-white">Cantilever chair</h4>
              <div className="flex gap-2 pt-3">
                <div className="w-4 h-1 bg-[#05E6B7]"></div>
                <div className="w-4 h-1 bg-[#F701A8]"></div>
                <div className="w-4 h-1 bg-[#00009D] group-hover:bg-[#FFEAC1]"></div>
              </div>
              <p className="pt-3 font-josef text-[14px] text-secondery group-hover:text-white">Code - Y523201</p>
              <p className="pt-3 font-josef text-[14px] text-secondery group-hover:text-white"> $42.00</p>
            </div>
          </div>
          <div className="w-[23%] shadow-lg group relative">
            <div className="flex justify-center pt-20 pb-5 bg-[#F6F7FB] relative transition-all duration-300 group-hover:pt-16 group-hover:pb-10">
              <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FiShoppingCart />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FaRegHeart />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FiZoomIn />
                </div>
              </div>
              <img
                src={ChairImg}
                alt="Product Image"
                className="transition-transform duration-300 group-hover:scale-90"/>
              <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 hover:bg-primary transition-opacity duration-300 bg-[#08D15F] text-white font-josef text-[12px] px-4 py-2 rounded">
                View More
              </button>
            </div>
            <div className="flex flex-col items-center py-6 bg-white transition-colors duration-300 group-hover:bg-secondery">
              <h4 className="font-lato font-bold text-primary text-[18px] group-hover:text-white">Cantilever chair</h4>
              <div className="flex gap-2 pt-3">
                <div className="w-4 h-1 bg-[#05E6B7]"></div>
                <div className="w-4 h-1 bg-[#F701A8]"></div>
                <div className="w-4 h-1 bg-[#00009D] group-hover:bg-[#FFEAC1]"></div>
              </div>
              <p className="pt-3 font-josef text-[14px] text-secondery group-hover:text-white">Code - Y523201</p>
              <p className="pt-3 font-josef text-[14px] text-secondery group-hover:text-white"> $42.00</p>
            </div>
          </div>
          <div className="w-[23%] shadow-lg group relative">
            <div className="flex justify-center pt-20 pb-5 bg-[#F6F7FB] relative transition-all duration-300 group-hover:pt-16 group-hover:pb-10">
              <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FiShoppingCart />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FaRegHeart />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#1DB4E7] text-[20px] hover:bg-[#EEEFFB] hover:text-secondery">
                  <FiZoomIn />
                </div>
              </div>
              <img
                src={ChairImg}
                alt="Product Image"
                className="transition-transform duration-300 group-hover:scale-90"/>
              <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#08D15F] hover:bg-primary text-white font-josef text-[12px] px-4 py-2 rounded">
                View More
              </button>
            </div>
            <div className="flex flex-col items-center py-6 bg-white transition-colors duration-300 group-hover:bg-secondery">
              <h4 className="font-lato font-bold text-primary text-[18px] group-hover:text-white">Cantilever chair</h4>
              <div className="flex gap-2 pt-3">
                <div className="w-4 h-1 bg-[#05E6B7]"></div>
                <div className="w-4 h-1 bg-[#F701A8]"></div>
                <div className="w-4 h-1 bg-[#00009D] group-hover:bg-[#FFEAC1]"></div>
              </div>
              <p className="pt-3 font-josef text-[14px] text-secondery group-hover:text-white">Code - Y523201</p>
              <p className="pt-3 font-josef text-[14px] text-secondery group-hover:text-white"> $42.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
