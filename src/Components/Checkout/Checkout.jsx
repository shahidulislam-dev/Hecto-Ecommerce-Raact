import React from 'react'
import Img from "../../assets/latestBlogImg2.png"
const Checkout = () => {
    return (
        <section>
            <div className="container mx-auto py-10">
                <h1 className='font-josef font-bold text-secondery text-[24px]'>Hecto Demo</h1>
                <p className='font-lato font-[400px] pt-4 text-secondery text-[12px]'>Cart/ Information/ Shipping/ Payment</p>
                <div className="flex justify-between pt-6">
                    <div className="w-[68%] bg-[#F8F8FD] px-8 py-16">
                        <div className="flex items-center justify-between">
                            <h3 className='font-josef font-bold text-secondery text-[18px]'>Contact Information</h3>
                            <h5 className='font-lato font-[500px] text-paragraph text-[14px]'>Already have an account? Login</h5>
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
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='City' />
                            </div>
                            <div className="pt-10 flex gap-10">
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Bangladesh' />
                                <input type="text" className='border-b-2 outline-none bg-transparent w-full pl-2 py-2 font-lato font-[600px] text-paragraph text-[14px]' placeholder='Postal Code' />
                            </div>

                            <button className='px-6 py-3 rounded-sm font-josef font-semibold bg-primary text-white text-[16px] mt-20'>Continue Shipping</button>
                        </div>
                    </div>

                    <div className="w-[30%]">
                        <div className="flex items-center justify-between border-b-2 pb-2">
                            <div className="flex items-center gap-5">
                            <div className="bg-slate-300 flex justify-center">
                                <img src={Img} alt="Checkout Page Product Image" className='w-20 h-[90px]'/>
                            </div>
                            <div className="space-y-1">
                            <h3 className='font-josef text-secondery text-[16px]'>Ut diam consequat</h3>
                            <p className='font-lato text-paragraph text-[14px]'>Color: Black</p> 
                            <p className='font-lato text-paragraph text-[14px]'>Size: XL</p> 
                            </div>
                            </div>
                            <p className='font-josef font-bold text-secondery text-[14px]'>$25.30</p>
                        </div>
                        <div className="bg-[#E8E6F1] p-9 mt-10">
                                <div className="flex items-center justify-between border-b-2 border-[#E1E1E4] font-lato font-[600px] text-secondery text-[18px]">
                                    <h5>Subtotal</h5>
                                    <h5>$65.00</h5>
                                </div>
                                <div className="flex items-center justify-between border-b-2 border-[#E1E1E4] pt-8 font-lato font-[600px] text-secondery text-[18px]">
                                    <h5>Total</h5>
                                    <h5>$65.00</h5>
                                </div>
                                <div className="pt-7">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="cursor-pointer accent-[#19D16F]" />
                                        <p className="font-lato font-[400px] text-[12px] text-[#8A91AB]">Shipping & taxes calculated at checkout</p>
                                    </label>
                                </div>
                                <div className="pt-9">
                                    <button  className='font-lato font-semibold text-[14px] text-white bg-[#19D16F] py-3 w-full rounded-md'>Proceed To Checkout</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout