import React from 'react'
import WaterMark from "../../assets/watermark.png"
import Banner from '../ComponentCommon/Banner'

const LoginForm = () => {
  return (
    <>
    <Banner title="My Account" name="My Account"/>
    <section className='pt-28 pb-20'>
        <div className='container mx-auto'>
            <div className="">
            <div className="w-[544px] h-[474px] mx-auto px-14 py-12 flex flex-col items-center shadow-lg">
                <h4 className='font-josef font-bold text-[32px]'>Login</h4>
                <p className='font-lato text-[17px] text-[#9096B2] pb-9'>Please login using account detail below.</p>
                <input type="text" className='w-full h-12 px-3 border-2 border-[#9096B2] rounded-md outline-none mb-6' placeholder='Email Address'/>
                <input type="text" className='w-full h-12 px-3 border-2 border-[#9096B2] rounded-md outline-none mb-6' placeholder='Password'/>
                <p className='font-lato text-[17px] text-[#9096B2] mb-6 text-left w-full'>Forgot your password?</p>
                <button className='bg-primary w-[432px] h-12 rounded-md font-lato font-bold text-white text-[17px]'>Sign In</button>
                <p className='font-lato text-[17px] text-[#9096B2] pt-6'>Don’t have an Account? Create account</p>
            </div>
            <div className='pt-28 flex justify-center'>
                <img src={WaterMark} alt="Water Mark Image" />
            </div>
            </div>
        </div>
    </section>
    </>
    
  )
}

export default LoginForm