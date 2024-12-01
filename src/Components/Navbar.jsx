import React from 'react'
import Logo from "../assets/logo.png"
import { FaAngleDown} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import {Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='py-5'>
        <div className='container mx-auto'>
            <div className="flex items-center gap-20 justify-between">
                <div className=''>
                    <img src={Logo} alt="Navbar-Logo" />
                </div>
                <div className="">
                    <ul className='flex gap-10 font-lato text-[16px] text-[#0D0E43]'>
                        <li className='flex items-center gap-2 relative group'><Link to="/">Home</Link><FaAngleDown/>
                            <ul className='absolute top-6 left-0 hidden group-hover:block z-30 bg-white px-2'>
                                <li><Link to="/account">Account</Link></li>
                                <li><Link to="/about-us">AboutUs</Link></li>
                                <li><Link to="/not-found">404</Link></li>
                                <li>Item4</li>
                            </ul>
                        </li>
                        <li>Pages</li>
                        <li>Products</li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li>Shop</li>
                        <li><Link to="/contact">Contuct</Link></li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <input type="text" className='border-2 outline-none h-9 w-80 pl-2' />
                    <button className='h-9 w-12 bg-primary flex justify-center items-center '><CiSearch className='text-[20px] text-white'/></button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar