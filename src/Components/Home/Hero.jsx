import React from 'react'
import HeroImg from "../../assets/heroImg.png"
import LightImg from "../../assets/lightImg.png"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const handleNavigation = ()=>{
      navigate('/shop');
    }

  return (
    <section className='bg-[#F2F0FF] py-28 relative z-20 overflow-hidden'>
        <img className='absolute -top-1 -z-10 -left-180 w-[250px]' src={LightImg} alt="Hero Left Side Image" />
        <div className="w-4 h-4 bg-primary rounded-full absolute top-[550px] -z-10 left-14"></div>
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <div className="w-[60%]">
                    <p className='text-primary font-lato font-bold text-[16px] pb-3'>Best Furniture For Your Castle....</p>
                    <h1 className='font-josef font-bold text-[53px] pr-60 pb-3'>New Furniture Collection Trends in 2020</h1>
                    <p className='font-lato font-bold text-[#8A8FB9] text-[16px] pr-80 pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <button onClick={handleNavigation} className='bg-primary font-josef font-semibold text-[17px] text-white py-4 px-10'>Shop Now</button>
                </div>
                <div className="w-[40%]">
                    <img src={HeroImg} alt="Hero Image" className='w-full'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero