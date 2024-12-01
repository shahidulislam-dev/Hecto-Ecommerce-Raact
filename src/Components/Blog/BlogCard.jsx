import React from 'react'
import { FaPenNib } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
const BlogCard = (props) => {
  return (
    <section className='pb-8'>
      <div className='container'>
        <img src={props.image} alt="Card Image"  className='w-full'/>
        <div className="flex items-center gap-10 pt-9">
            <div className='flex items-center gap-3'>
                <FaPenNib className='text-primary'/>
                <p className='bg-[#FFE7F9] px-10 py-1 rounded font-josef text-[14px] text-[#151875]'>Surf Auxion</p>
            </div>
            <div className='flex items-center gap-3'>
                <LuCalendarDays className='text-[#FFA454]'/>
                <p className='bg-[#FFECE2] px-6 py-1  rounded font-josef text-[14px] text-[#151875]'>Aug 09 2020</p>
            </div>
        </div>
        <h1 className='pt-7 font-josef font-bold text-secondery text-[30px]'>{props.heading}</h1>
        <p className='pt-6 font-lato text-[#8A8FB9] text-[16px] pr-56'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
        <h5 className='pt-8 font-lato font-semibold text-secondery text-[18px]'>Read More</h5>
    </div>
    </section>
  )
}

export default BlogCard