import React from 'react'
import { BiPhoneCall } from "react-icons/bi";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TiShoppingCart } from "react-icons/ti";
import { FiHeart, FiMail } from "react-icons/fi";

const Header = () => {

    let cartData = useSelector((state) => state.cartItemManager.cartItems)

    return (
        <header className='bg-[#7E33E0] text-[#F1F1F1] py-3 font-josef font-semibold fixed top-0 w-full z-50'>
            <div className='container mx-auto'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-12'>
                        <div className='flex items-center gap-2'>
                            <FiMail />
                            <p>mhhasanul@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BiPhoneCall />
                            <p>(12345)67890</p>
                        </div>
                    </div>
                    <div className=''>
                        <ul className='flex items-center gap-5'>
                            <li className='flex items-center gap-2'>
                                <select name="" id="" className='bg-transparent text-white outline-none'>
                                    <option value="" className='bg-[#7E33E0]'>English<FaAngleDown /></option>
                                    <option value="" className='bg-[#7E33E0]'>Bengali<FaAngleDown /></option>
                                    <option value="" className='bg-[#7E33E0]'>Arabic<FaAngleDown /></option>
                                </select>
                            </li>
                            <li className='flex items-center gap-2'>
                                <select name="" id="" className='bg-transparent text-white outline-none'>
                                    <option value="" className='bg-[#7E33E0]'>USD<FaAngleDown /></option>
                                    <option value="" className='bg-[#7E33E0]'>BDT<FaAngleDown /></option>
                                    <option value="" className='bg-[#7E33E0]'>Rial<FaAngleDown /></option>
                                </select>
                            </li>
                            <li className='flex items-center gap-2'>Login<FaRegUser /></li>
                            <li className='flex items-center gap-2'>Wishlit<FiHeart /></li>
                            <li className='flex items-center gap-2 font-bold relative'>
                                <div className="absolute -top-2 -right-3 bg-primary h-6 w-6 p-1 rounded-full flex justify-center items-center text-white">
                                    <span>{cartData.length}</span>
                                </div>
                                <Link to="/cart"><TiShoppingCart className='text-[25px]' /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header