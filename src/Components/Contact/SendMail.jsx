import React, { useRef } from 'react';
import SendMailImg from "../../assets/sendMailImg.png";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const SendMail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_agike5f', 
                'template_73w6iwx', 
                form.current, 
                'bVR1hleSDxg5JH0nq' 
            )
            .then(
                () => {
                    toast.success("Email Sent Successfully!", { position: "top-center", autoClose: 1000, });
                },
                (error) => {
                    toast.error("Email Sending Failed. Try Again!", { position: "top-center", autoClose: 1000, });
                }
            );
    };

    return (
        <section className='pb-40'>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="w-[48%]">
                        <p className='font-josef font-semibold text-secondery text-[36px]'>Get In Touch</p>
                        <p className='font-lato font-semibold text-[16px] text-[#8A8FB9] pt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
                            tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                        </p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <div className="flex gap-6 pt-11">
                                    <input type="text" name="client_name" className='w-64 h-11 px-3 border-2 border-[#A4B6C8B2] outline-none rounded' placeholder='Your Name*' required/>
                                    <input type="email" name="client_email" className='w-64 h-11 px-3 border-2 border-[#A4B6C8B2] outline-none rounded' placeholder='Your Email' required/>
                                </div>
                                
                                <div className="pt-11">
                                    <textarea name="message" rows="6" className='w-[534px] px-3 border-2 border-[#A4B6C8B2] outline-none rounded' placeholder='Type your message*' required></textarea>
                                </div>
                                <div className="pt-11">
                                    <button type='submit' className='bg-primary px-11 py-2 rounded font-josef text-[16px] text-white'>Send Mail</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-[52%]">
                        <img src={SendMailImg} alt="Send Mail Image" className='w-full' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SendMail;
