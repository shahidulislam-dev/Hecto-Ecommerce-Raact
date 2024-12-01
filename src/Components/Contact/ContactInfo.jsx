import React from 'react'
import { FaCircle } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className='py-32'>
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div className="">
                    <p className='font-josef font-semibold text-secondery text-[36px]'>Information About us</p>
                    <p className='font-lato font-semibold text-[16px] text-[#8A8FB9] pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae <br />eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <div className="flex items-center gap-3 pt-8">
                        <FaCircle className='text-secondery'/>
                        <FaCircle className='text-primary'/>
                        <FaCircle className='text-[#37DAF3]'/>
                    </div>
                </div>
                <div className="">
                <p className='font-josef font-semibold text-secondery text-[36px]'>Contact Way</p>
                    <div className="flex items-center gap-16 pt-8">
                        <div className="flex items-center gap-3">
                        <FaCircle className='text-secondery h-11 w-11'/>
                        <div className="font-lato font-semibold text-[16px] text-[#8A8FB9]">
                            <p>Tel: 877-67-88-99</p>
                            <p>E-Mail: shop@store.com</p>
                        </div>
                        </div>
                        <div className="flex items-center gap-3">
                        <FaCircle className='text-primary h-11 w-11'/>
                        <div className="font-lato font-semibold text-[16px] text-[#8A8FB9]">
                            <p>Support Forum</p>
                            <p>For Over 24h</p>
                        </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-16 pt-8">
                        <div className="flex items-center gap-3">
                        <FaCircle className='text-[#FFB265] h-11 w-11'/>
                        <div className="font-lato font-semibold text-[16px] text-[#8A8FB9]">
                            <p>20 Margaret st, London</p>
                            <p>Great britain, 3NM98-LK</p>
                        </div>
                        </div>
                        <div className="flex items-center gap-3">
                        <FaCircle className='text-[#1BE982] h-11 w-11'/>
                        <div className="font-lato font-semibold text-[16px] text-[#8A8FB9]">
                            <p>Free standard shipping</p>
                            <p>on all orders.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactInfo