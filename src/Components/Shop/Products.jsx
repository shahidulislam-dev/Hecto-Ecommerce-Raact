import React, { useContext } from 'react'
import { FaAngleDown, FaListUl  } from "react-icons/fa";
import { BiSolidGridAlt } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { apiData } from '../ContextApi';
import WaterMark from "../../assets/watermark.png";

const Products = () => {

    let data = useContext(apiData);

  return (
    <section className='pt-32'>
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <div className="w-[40%]">
                    <h4 className='font-josef font-semibold text-secondery text-[22px]'>Ecommerce Acceories & Fashion item </h4>
                    <p className='font-lato font-[400px] text-[12px] text-[#8A8FB9]'>About 9,620 results (0.62 seconds)</p>
                </div>
                <div className="flex items-center justify-between w-[50%]">
                    <div className="flex items-center gap-2">
                        <h6 className='font-lato font-[400px] text-[16px] text-[#3F509E]'>Per Page: </h6>
                        <input type="text" className='w-14 h-6 outline-none border-2 border-[#E7E6EF] pl-1'/>
                    </div>
                    <div className="flex items-center gap-2">
                    <h6 className='font-lato font-[400px] text-[16px] text-[#3F509E]'>Sort By: </h6>
                    <select name="" id="" className='bg-transparent font-lato font-[400px] text-[12px] text-[#8A8FB9] w-24 h-7 outline-none border-2 border-[#E7E6EF] px-2'>
                                <option value="" className='bg-white'>Best Matches<FaAngleDown/></option>
                                <option value="" className='bg-white'>Most Discount<FaAngleDown/></option>
                                <option value="" className='bg-white'>Top Rated<FaAngleDown/></option>
                            </select>
                    </div>
                    <div className="flex items-center gap-2">
                    <h6 className='font-lato font-[400px] text-[16px] text-[#3F509E]'>View: </h6>
                    <BiSolidGridAlt/>
                    <FaListUl/>
                    <input type="text" className='w-40 h-7 outline-none border-2 border-[#E7E6EF] ml-10 pl-2'/>
                    </div>
                    <div className=""></div>
                </div>
            </div>


            <div className="flex pt-36 justify-between">
                <div className="w[20%]">Side Bar</div>
                <div className="w-[70%] flex flex-wrap justify-between items-center">

                    {data.map((item) => (
                        <div className="w-[23%] mb-10 pb-5">
                        <div className="bg-[#F6F7FB] px-8 py-10">
                            <img src={item.thumbnail} alt="Products Image" className='w-52 h-52 '/>
                        </div>
                        <h4 className='font-josef font-semibold text-secondery text-[16px] pt-5 text-center'>{item.title}</h4>
                        <div className="flex items-center justify-center">
                            <GoDotFill className='rounded-full text-[#DE9034] text-[20px]'/>
                            <GoDotFill className='rounded-full text-primary text-[20px]'/>
                            <GoDotFill className='rounded-full text-[#8568FF] text-[20px]'/>
                        </div>
                        <div className="flex items-center justify-center gap-2 font-josef font-[400px] text-[14px]">
                            <p className='text-secondery'>${(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)}</p>
                            <p className='text-primary line-through'>${item.price}</p>
                        </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className="pt-24 pb-20 flex justify-center">
                    <img src={WaterMark} alt="Water Mark Image" />
                  </div>
        </div>
    </section>
  )
}

export default Products