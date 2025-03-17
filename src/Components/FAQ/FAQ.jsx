import React, { useRef } from 'react'
import SendMailImg from "../../assets/sendMailImg.png";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const FAQ = () => {

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
                    console.log('SUCCESS!');
                    toast.success("Email Sent Successfully!", { position: "top-center", autoClose: 1000, });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Email Sending Failed. Try Again!", { position: "top-center", autoClose: 1000, });
                }
            );
    };


    return (
        <section>
            <div className="container mx-auto">
                <div className="py-32 flex justify-between">
                    <div className="w-[60%]  text-justify">
                        <h1 className='font-josef font-bold text-secondery text-[36px]'>General Information</h1>

                        <div className="pt-16                                                                     ">
                            <h4 className='font-josef font-bold text-secondery text-[17px]'>How can I track my order on Hecto?</h4>
                            <p className='font-josef text-paragraph text-[16px] pt-3'>After placing an order on Hecto, you'll receive a confirmation email. Once shipped, a tracking link will be sent via email or SMS. You can also track it in the "My Orders" section of your account. For any issues, our support team is ready to help.</p>
                        </div>
                        <div className="pt-16                                                                     ">
                            <h4 className='font-josef font-bold text-secondery text-[17px]'>What payment methods does Hecto accept?</h4>
                            <p className='font-josef text-paragraph text-[16px] pt-3'>Hecto offers secure payments via credit/debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery in select areas. All transactions are encrypted for safety.</p>
                        </div>
                        <div className="pt-16                                                                     ">
                            <h4 className='font-josef font-bold text-secondery text-[17px]'>What is Hecto’s return and refund policy?</h4>
                            <p className='font-josef text-paragraph text-[16px] pt-3'>At Hecto, customer satisfaction is a top priority, which is why we offer a flexible return and refund policy. If you are not satisfied with your purchase or if the product arrives damaged or incorrect, you can request a return within seven days of receiving your order. Once your return is approved and the item is sent back in its original packaging, we will process your refund within five to seven business days. Some categories, such as personalized products and digital downloads, may not be eligible for returns. To initiate a return, simply visit the "My Orders" section in your account and follow the return request process. If you need further assistance, our support team is always available to help.</p>
                        </div>
                        <div className="pt-16                                                                     ">
                            <h4 className='font-josef font-bold text-secondery text-[17px]'>How do I contact Hecto customer support?</h4>
                            <p className='font-josef text-paragraph text-[16px] pt-3 w-[99%]'>For help with orders, products, or returns, Hecto offers 24/7 live chat, email support at <span className='text-blue-600 underline cursor-pointer'>support@hecto.com</span>, and a helpline at <span className='text-blue-600 underline cursor-pointer'>+1 (800) 123-4567</span> (Mon-Fri). Our Help Center also provides useful guides.</p>
                        </div>
                    </div>
                    <div className="w-[35%] bg-[#F8F8FD] px-10 pt-24">
                        <h2 className='font-josef font-bold text-secondery text-[24px]'>Ask a Question</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="pt-28">
                                <input type="text" name="client_name" placeholder='Your Name *' className='w-full h-12 pl-3 outline-none border-2 border-[#CDCEDC] rounded-md' required />
                                <input type="email" name="client_email" placeholder='Your Email *' className='w-full h-12 pl-3 outline-none border-2 border-[#CDCEDC] rounded-md mt-9' required />
                                <div className="pt-9">
                                    <textarea name="message" rows="6" className='w-full px-3 border-2 border-[#CDCEDC] outline-none rounded-md' placeholder='Type your message*' required></textarea>
                                </div>
                                <div className="pt-11">
                                    <button type='submit' className='bg-primary px-11 py-2 rounded-md font-josef text-[16px] text-white'>Send Mail</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ