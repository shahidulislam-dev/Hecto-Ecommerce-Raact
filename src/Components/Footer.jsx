
import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
    return (
        <footer className='bg-[#EEEFFB] pt-24'>
            <div className="container mx-auto">
                <div className="">
                    <div className="flex justify-between">
                        <div className="">
                            <h2 className='font-josef font-bold text-[#000000] text-[38px]'>Hekto</h2>
                            <div className="pt-8 flex items-center">
                                <input type="text" className='w-96 h-11 pl-3 outline-none bg-white rounded' placeholder='Enter Your Email' />
                                <button className='bg-primary px-10 py-[9px] rounded font-lato font-semibold text-[16px] text-white'>Sign Up</button>
                            </div>
                            <p className='font-lato text-[16px] text-[#8A8FB9] pt-6'>Contact Info</p>
                            <p className='font-lato text-[16px] text-[#8A8FB9]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        </div>
                        <div className="">
                            <h3 className='font-josef text-[#000000] text-[22px]'>Catagories</h3>
                            <ul className='font-lato text-[#8A8FB9] text-[16px] space-y-5 pt-10'>
                                <li>Laptops & Computers</li>
                                <li>Cameras & Photography</li>
                                <li>Smart Phones & Tablets</li>
                                <li>Video Games & Consoles</li>
                                <li>Waterproof Headphones</li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className='font-josef text-[#000000] text-[22px]'>Customer Care</h3>
                            <ul className='font-lato text-[#8A8FB9] text-[16px] space-y-5 pt-10'>
                                <li><Link to='/account'>My Account</Link></li>
                                <li>Discount</li>
                                <li>Returns</li>
                                <li>Orders History</li>
                                <li>Order Tracking</li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className='font-josef text-[#000000] text-[22px]'>Pages</h3>
                            <ul className='font-lato text-[#8A8FB9] text-[16px] space-y-5 pt-10'>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/shop'>Browse the Shop</Link></li>
                                <li>Category</li>
                                <li>Pre-Built Pages</li>
                                <li>Visual Composer Elements</li>
                                <li>WooCommerce Pages</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#E7E4F8] mt-24">
                <div className="container mx-auto">
                    <div className="flex justify-between py-4 px-10">
                        <p className='font-lato font-semibold text-[#9DA0AE] text-[16px]'>©Webecy - All Rights Reserved</p>
                        <div className="flex gap-3 items-center text-secondery text-[24px]">
                            <FaFacebook />
                            <RiInstagramFill />
                            <AiFillTwitterCircle />
                        </div>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer
