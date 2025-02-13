import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
import { auth, db } from '../firebase';

const Checkout = () => {

    let cartData = useSelector((state) => state.cartItemManager.cartItems);

    let sum = 0;
    for(let i = 0; i < cartData.length; i++){
        let item = cartData[i];
        sum += (item.price * item.qty);
    }

    let [total, setTotal] = useState(sum)
    let [dc, setDc] = useState()
    const handleTotal = (e) => {
        const city = e.target.value.trim().toLowerCase();
        if (city === "dhaka") {
            setTotal(sum + 80.00);
            setDc(80.00)
        } else if (city === "") {
            setTotal(sum);
            setDc("00.00")
        } else {
            setTotal(sum + 150.00);
            setDc(150.00)
        }
    };

    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const docRef = doc(db, "Users", user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setUserDetails(docSnap.data());
                    } else {
                        toast.error("User data not found in Firestore", { position: "top-center" });
                    }
                } catch (error) {
                    toast.error("Error fetching user data:", error, { position: "top-center" });
                }
            } else {
                setUserDetails(null);
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    

    return (
        <section>
            <div className="container mx-auto py-10">
                <h1 className='font-josef font-bold text-secondery text-[24px]'>Hecto Demo</h1>
                <p className='font-lato font-[400px] pt-4 text-secondery text-[12px]'>Cart/ Information/ Shipping/ Payment</p>
                <div className="flex justify-between pt-6">
                    {userDetails ? (
                        <div className="w-[68%] bg-[#F8F8FD] px-8 py-16">
                        <div className="flex items-center justify-between">
                            <h3 className='font-josef font-bold text-secondery text-[18px]'>Contact Information</h3>
                            <h5 className='font-lato font-[500px] text-paragraph text-[14px] hover:text-primary hover:underline cursor-pointer'>Already have an account? Login</h5>
                        </div>
                        <input type="text" className='mt-10 border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Email or mobile phone number' value={userDetails.email} />
                        <div className="pt-7">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="cursor-pointer accent-[#19D16F]" />
                                <p className="font-lato font-[400px] text-[12px] text-[#8A91AB]">Keep me up to date on news and excluive offers</p>
                            </label>
                        </div>

                        <div className="pt-20">
                            <h1 className='font-josef font-semibold text-secondery text-[18px]'>Shipping address</h1>
                            <div className="pt-8 flex gap-10">
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='First name (optional)' value={userDetails.firstName} />
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Last name' value={userDetails.lastName}/>
                            </div>
                            <div className="pt-10 flex gap-10">
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Address' />
                            </div>
                            <div className="pt-10 flex gap-10">
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Appartment,suit,e.t.c (optinal)' />
                            </div>
                            <div className="pt-10 flex gap-10">
                                <input type="text" onChange={handleTotal} className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='City' />
                            </div>
                            <div className="pt-10 flex gap-10">
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Bangladesh' />
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Postal Code' />
                            </div>

                            <button className='px-6 py-3 rounded-sm font-josef font-semibold bg-primary text-white text-[16px] mt-20'>Continue Shipping</button>
                        </div>
                    </div>
                    ) : (
                        <div className="w-[68%] bg-[#F8F8FD] px-8 py-16">
                        <div className="flex items-center justify-between">
                            <h3 className='font-josef font-bold text-secondery text-[18px]'>Contact Information</h3>
                            <h5 className='font-lato font-[500px] text-paragraph text-[14px] hover:text-primary hover:underline cursor-pointer'>Already have an account? Login</h5>
                        </div>
                        <input type="text" className='mt-10 border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Email or mobile phone number' />
                        <div className="pt-7">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="cursor-pointer accent-[#19D16F]" />
                                <p className="font-lato font-[400px] text-[12px] text-[#8A91AB]">Keep me up to date on news and excluive offers</p>
                            </label>
                        </div>

                        <div className="pt-20">
                            <h1 className='font-josef font-semibold text-secondery text-[18px]'>Shipping address</h1>
                            <div className="pt-8 flex gap-10">
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='First name (optional)' />
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Last name' />
                            </div>
                            <div className="pt-10 flex gap-10">
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Address' />
                            </div>
                            <div className="pt-10 flex gap-10">
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Appaetnentment,suit,e.t.c (optinal)' />
                            </div>
                            <div className="pt-10 flex gap-10">
                                <input type="text" onChange={handleTotal} className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='City' />
                            </div>
                            <div className="pt-10 flex gap-10">
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Bangladesh' />
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Postal Code' />
                            </div>

                            <button className='px-6 py-3 rounded-sm font-josef font-semibold bg-primary text-white text-[16px] mt-20'>Continue Shipping</button>
                        </div>
                    </div>
                    )}
                    

                    <div className="w-[30%]">
                        {cartData.map((item) => (
                            <div key={item.id}>
                            <div className="flex items-center justify-between border-b-2 pb-2 mb-5">
                                <div className="flex items-center gap-5">
                                    <div className="bg-slate-300 flex justify-center">
                                        <img src={item.thumbnail} alt="Checkout Page Product Image" className='w-20 h-[90px]' />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className='font-josef text-secondery text-[16px]'>{item.title}</h3>
                                        <p className='font-lato text-paragraph text-[14px]'>Color: Black</p>
                                        <p className='font-lato text-paragraph text-[14px]'>Size: XL</p>
                                    </div>
                                </div>
                                <p className='font-josef font-bold text-secondery text-[14px]'>${item.price}</p>
                            </div>
                            
                        </div>
                        ))}
                        <div className="bg-[#E8E6F1] p-9 mt-10">
                                <div className="flex items-center justify-between border-b-2 border-[#E1E1E4] font-lato font-[600px] text-secondery text-[18px]">
                                    <h5>Subtotal</h5>
                                    <h5>${sum.toFixed(2)}</h5>
                                </div>
                                <div className="flex items-center justify-between border-b-2 pt-8 border-[#E1E1E4] font-lato font-[600px] text-secondery text-[18px]">
                                    <h5>Delivery Charge</h5>
                                    <h5>${dc}</h5>
                                </div>
                                <div className="flex items-center justify-between border-b-2 border-[#E1E1E4] pt-8 font-lato font-[600px] text-secondery text-[18px]">
                                    <h5>Total</h5>
                                    <h5>${total.toFixed(2)}</h5>
                                </div>
                                <div className="pt-7">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="cursor-pointer accent-[#19D16F]" />
                                        <p className="font-lato font-[400px] text-[12px] text-[#8A91AB]">Shipping & taxes calculated at checkout</p>
                                    </label>
                                </div>
                                <div className="pt-9">
                                    <button className='font-lato font-semibold text-[14px] text-white bg-[#19D16F] py-3 w-full rounded-md'>Proceed To Checkout</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout