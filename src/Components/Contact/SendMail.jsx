import React from 'react'
import SendMailImg from "../../assets/sendMailImg.png"

const SendMail = () => {
  return (
    <section className='pb-40'>
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
            <div className="w-[48%]">
                    <p className='font-josef font-semibold text-secondery text-[36px]'>Get In Touch</p>
                    <p className='font-lato font-semibold text-[16px] text-[#8A8FB9] pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                    <div className="">
                        <div className="flex gap-6 pt-11">
                            <input type="text" className='w-64 h-11 px-3 border-2 border-[#A4B6C8B2] outline-none rounded' placeholder='Your Name*'/>
                            <input type="text" className='w-64 h-11 px-3 border-2 border-[#A4B6C8B2] outline-none rounded' placeholder='Your Email'/>
                        </div>
                        <div className="pt-11">
                            <input type="text" className='w-[534px] h-11 px-3 border-2 border-[#A4B6C8B2] outline-none rounded' placeholder='Subject*'/>
                        </div>
                        <div className="pt-11">
                            <textarea rows="6" className='w-[534px] px-3 border-2 border-[#A4B6C8B2] outline-none rounded' placeholder='Type your message*'/>
                        </div>
                        <div className="pt-11">
                            <button className='bg-primary px-11 py-2 rounded font-josef text-[16px] text-white'>Send Mail</button>
                        </div>
                    </div>
                </div>
                <div className="w-[52%]">
                    <img src={SendMailImg} alt="Send Mail Image" className='w-full' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default SendMail