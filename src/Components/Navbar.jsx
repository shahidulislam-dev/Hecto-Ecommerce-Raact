import React, { useContext, useState } from 'react'
import Logo from "../assets/logo.png"
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { apiData } from './ContextApi';

const Navbar = () => {

    let data = useContext(apiData)
    let [searchResult, setSearchResult] = useState([]);

    const handleSearch = (e) => {
        let filteredProducts = data.filter((item) => item.title.toLowerCase().startsWith((e.target.value).toLowerCase()));
        setSearchResult(filteredProducts)
        if (e.target.value === '') {
            setSearchResult([])
        }
    }

    return (
        <nav className='py-5 fixed top-12 w-full z-40 bg-white shadow-sm'>
            <div className='container mx-auto'>
                <div className="flex items-center gap-20 justify-between">
                    <div className=''>
                        <img src={Logo} alt="Navbar-Logo" />
                    </div>
                    <div className="">
                        <ul className='flex gap-10 font-lato text-[16px] text-[#0D0E43]'>
                            <li><Link to="/">Home</Link>
                                
                            </li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="flex items-center relative">
                        <input type="text" className='border-2 outline-none h-9 w-80 pl-2' onChange={handleSearch} />
                        {searchResult.length > 0 &&
                            <div className="absolute top-10 left-0 right-0 z-30 p-2 h-[670px] overflow-y-scroll bg-slate-300">
                                {searchResult.map((item) => (
                                    <div key={item.id} className='flex items-center gap-2 shadow-lg mt-3 p-2 bg-slate-200'>
                                        <img src={item.thumbnail} alt="Image From Search" className='w-20' />
                                        <h3>{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        }
                        <button className='h-9 w-12 bg-primary flex justify-center items-center '><CiSearch className='text-[20px] text-white' /></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar