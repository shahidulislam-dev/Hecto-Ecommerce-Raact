import React from 'react'
import RelatedProductImg from "../../assets/latestBlogImg.png"
import { IoMdStar } from "react-icons/io";
import WaterMark from "../../assets/watermark.png";

const RelatedProducts = () => {
  return (
    <section>
      <div className="container mx-auto py-24">
        <div className="font-josef font-bold text-secondery text-[36px]">
          <h2>Related Products</h2>
        </div>
        <div className="flex items-center justify-between pt-12">
          <div className="w-[23%]">
            <img src={RelatedProductImg} alt="Related Product Image" />
            <div className='flex items-center justify-between pt-5'>
              <h6 className='font-josef text-secondery text-[16px]'>Mens Fashion Wear</h6>
              <div className="flex items-center gap-1">
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
              </div>
            </div>
            <p className='font-josef text-secondery text-[14px] pt-4'>$30.00</p>
          </div>
          <div className="w-[23%]">
            <img src={RelatedProductImg} alt="Related Product Image" />
            <div className='flex items-center justify-between pt-5'>
              <h6 className='font-josef text-secondery text-[16px]'>Mens Fashion Wear</h6>
              <div className="flex items-center gap-1">
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
              </div>
            </div>
            <p className='font-josef text-secondery text-[14px] pt-4'>$30.00</p>
          </div>
          <div className="w-[23%]">
            <img src={RelatedProductImg} alt="Related Product Image" />
            <div className='flex items-center justify-between pt-5'>
              <h6 className='font-josef text-secondery text-[16px]'>Mens Fashion Wear</h6>
              <div className="flex items-center gap-1">
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
              </div>
            </div>
            <p className='font-josef text-secondery text-[14px] pt-4'>$30.00</p>
          </div>
          <div className="w-[23%]">
            <img src={RelatedProductImg} alt="Related Product Image" />
            <div className='flex items-center justify-between pt-5'>
              <h6 className='font-josef text-secondery text-[16px]'>Mens Fashion Wear</h6>
              <div className="flex items-center gap-1">
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
                <IoMdStar className='text-[#FFC416]' />
              </div>
            </div>
            <p className='font-josef text-secondery text-[14px] pt-4'>$30.00</p>
          </div>
        </div>
        <div className="pt-28 flex justify-center">
          <img src={WaterMark} alt="Water Mark Image" />
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts