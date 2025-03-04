import React, { useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { FiHeart, FiMail } from "react-icons/fi";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
    const cartData = useSelector((state) => state.cartItemManager.cartItems);
    const wishlistData = useSelector((state) => state.wishlistManager.wishlist);
    const [user, setUser] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe(); // Cleanup function to unsubscribe when the component unmounts
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/account");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    return (
        <header className="bg-[#7E33E0] text-[#F1F1F1] py-3 font-josef font-semibold fixed top-0 w-full z-50">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="flex items-center gap-12">
                        <div className="flex items-center gap-2">
                            <FiMail />
                            <p>mhhasanul@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiPhoneCall />
                            <p>(12345)67890</p>
                        </div>
                    </div>

                    <div>
                        <ul className="flex items-center gap-5">
                            <li className="flex items-center gap-2">
                                <select name="" id="" className="bg-transparent text-white outline-none">
                                    <option value="" className="bg-[#7E33E0]">
                                        English<FaAngleDown />
                                    </option>
                                    <option value="" className="bg-[#7E33E0]">
                                        Bengali<FaAngleDown />
                                    </option>
                                    <option value="" className="bg-[#7E33E0]">
                                        Arabic<FaAngleDown />
                                    </option>
                                </select>
                            </li>
                            <li className="flex items-center gap-2">
                                <select name="" id="" className="bg-transparent text-white outline-none">
                                    <option value="" className="bg-[#7E33E0]">
                                        USD<FaAngleDown />
                                    </option>
                                    <option value="" className="bg-[#7E33E0]">
                                        BDT<FaAngleDown />
                                    </option>
                                    <option value="" className="bg-[#7E33E0]">
                                        Rial<FaAngleDown />
                                    </option>
                                </select>
                            </li>

                            {user ? (
                                <li className="flex items-center gap-2 cursor-pointer" onClick={handleLogout}>
                                    Logout <FaRegUser />
                                </li>
                            ) : (
                                <Link to="/account">
                                    <li className="flex items-center gap-2">Login <FaRegUser /></li>
                                </Link>
                            )}

                            <Link to={"/wishlist"}>
                                <li className="flex items-center gap-1 relative">
                                    Wishlist
                                    <div className="absolute -top-2 -right-3 bg-primary h-6 w-6 p-1 rounded-full flex justify-center items-center text-white">
                                        <span>{wishlistData.length}</span>
                                    </div> 
                                    <FiHeart />
                                </li>
                            </Link>

                            <Link to="/cart">
                                <li className="flex items-center gap-2 font-bold relative">
                                    <div className="absolute -top-2 -right-3 bg-primary h-6 w-6 p-1 rounded-full flex justify-center items-center text-white">
                                        <span>{cartData.length}</span>
                                    </div>
                                    <TiShoppingCart className="text-[25px]" />
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
