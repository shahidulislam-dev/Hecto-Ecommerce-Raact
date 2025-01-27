import React from 'react'
import TrendImg from "../../assets/trendChairImg.png"
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

const ProductDetails = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="my-32 flex items-center shadow-shadowArround p-5">
          <div className="w-[50%] flex items-center gap-4">
            <div className="space-y-2">
              <div className="bg-slate-300 p-2 w-48">
                <img src={TrendImg} alt="" />
              </div>
              <div className="bg-slate-300 p-2 w-48">
                <img src={TrendImg} alt="" />
              </div>
              <div className="bg-slate-300 p-2 w-48">
                <img src={TrendImg} alt="" />
              </div>
            </div>
            <div className="bg-slate-300 p-2 w-[30rem] h-[36rem] flex items-center justify-center">
              <img src={TrendImg} alt="" className='' />
            </div>
          </div>

          <div className="w-[50%]">
            <h1 className='font-josef font-bold text-secondery text-[36px]'>Playwood arm chair</h1>
            <p className='font-josef text-secondery text-[14px] pt-3'>Rating Here</p>
            <div className="flex items-center gap-5 font-josef text-[16px] pt-3">
              <p className='text-secondery'>$30.00</p>
              <p className='text-primary line-through'>$20.00</p>
            </div>
            <p className='font-josef text-[16px] text-secondery pt-3'>Colors: </p>
            <p className='font-josef text-paragraph text-[16px] w-[70%] pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
            <div className="font-josef text-secondery text-[16px] pt-3 flex items-center gap-4 pl-20">
              <button className='hover:bg-secondery hover:text-white px-3 py-2 rounded-md'>Add To Cart</button>
              <div className="hover:bg-secondery hover:text-white px-3 py-2 rounded-md cursor-pointer"><FaRegHeart /></div>
            </div>
            <p className='font-josef text-[16px] text-secondery pt-3'>Categories: </p>
            <p className='font-josef text-[16px] text-secondery pt-3'>Tags: </p>
            <div className="flex items-center gap-5 pt-5">
              <p className='font-josef text-[16px] text-secondery'>Share: </p>
              <div className="flex gap-3 items-center text-[20px]">
                <FaFacebook className='cursor-pointer text-[#0866ff]'/>
                <RiInstagramFill className='text-primary cursor-pointer'/>
                <AiFillTwitterCircle className='cursor-pointer text-secondery'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails