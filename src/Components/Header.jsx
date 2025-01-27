import React from 'react'
import { CiMail, CiHeart, CiShoppingCart } from "react-icons/ci";
import { BiPhoneCall  } from "react-icons/bi";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-[#7E33E0] text-[#F1F1F1] py-3 font-josef font-semibold fixed top-0 w-full z-50'>
        <div className='container mx-auto'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-12'>
                    <div className='flex items-center gap-2'>
                        <CiMail/>
                        <p>mhhasanul@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BiPhoneCall/>
                        <p>(12345)67890</p>
                    </div>
                </div>
                <div className=''>
                    <ul className='flex items-center gap-5'>
                        <li className='flex items-center gap-2'>
                            <select name="" id="" className='bg-transparent text-white outline-none'>
                                <option value="" className='bg-[#7E33E0]'>English<FaAngleDown/></option>
                                <option value="" className='bg-[#7E33E0]'>Bengali<FaAngleDown/></option>
                                <option value="" className='bg-[#7E33E0]'>Arabic<FaAngleDown/></option>
                            </select>
                        </li>
                        <li className='flex items-center gap-2'>
                            <select name="" id="" className='bg-transparent text-white outline-none'>
                                <option value="" className='bg-[#7E33E0]'>USD<FaAngleDown/></option>
                                <option value="" className='bg-[#7E33E0]'>BDT<FaAngleDown/></option>
                                <option value="" className='bg-[#7E33E0]'>Rial<FaAngleDown/></option>
                            </select>
                        </li>
                        <li className='flex items-center gap-2'>Login<FaRegUser/></li>
                        <li className='flex items-center gap-2'>Wishlit<CiHeart/></li>
                        <Link to="/cart"><li className='flex items-center gap-2'><CiShoppingCart className='text-[25px]'/></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header