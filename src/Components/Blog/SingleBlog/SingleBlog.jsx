import React from 'react'
import GirlsImg1 from "../../../assets/girlsImg1.png";
import GirlsImg2 from "../../../assets/girlsImg2.png";
import GirlsImg3 from "../../../assets/girlsImg3.png";
import RecentPostIMg1 from "../../../assets/recentPostImg1.png";
import RecentPostIMg2 from "../../../assets/recentPostImg2.png";
import RecentPostIMg3 from "../../../assets/recentPostImg3.png";
import RecentPostIMg4 from "../../../assets/recentPostImg4.png";
import SaleProImg1 from "../../../assets/saleProImg1.png";
import SaleProImg2 from "../../../assets/saleProImg2.png";
import SaleProImg3 from "../../../assets/saleProImg3.png";
import OfferProImg1 from "../../../assets/latestBlogImg.png";
import OfferProImg2 from "../../../assets/latestBlogImg1.png";
import OfferProImg3 from "../../../assets/latestBlogImg2.png";
import OfferProImg4 from "../../../assets/latestBlogImg.png";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import BlogCard from ".././BlogCard";
import RecentPost from ".././RecentPost";
import WaterMark from "../../../assets/watermark.png";
import { IoMdArrowDropright } from "react-icons/io";
import Banner from '../../../Components/ComponentCommon/Banner'

const SingleBlog = () => {
    return (
        <>
            <Banner title='Single Blog' name="Single Blog" />
            <section className="pt-32">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <div className="w-[70%]">
                            <BlogCard
                                image={GirlsImg1}
                                heading="Mauris at orci non vulputate diam tincidunt nec."
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
                            />
                            <p className='font-lato text-[#8A8FB9] text-[16px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,</p>
                            <div className="bg-[#FAFAFB] border-l-2 border-primary px-5 py-5 mt-10 rounded-md">
                                <p className='font-lato text-[#969CB4] text-[16px]  text-justify'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
                                    toamk risusu”
                                </p>
                            </div>
                            <div className="mt-10 flex justify-between items-center ">
                                <div className="relative w-[49%]">
                                    <div className="w-10 h-10 bg-white rounded-full absolute top-1/2 left-1/2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                        <IoMdArrowDropright className='text-primary text-[40px] text-center' />
                                    </div>
                                    <img src={GirlsImg1} alt="Single Blog Image" />
                                </div>
                                <img src={GirlsImg2} alt="Single Blog Image" className='w-[49%]' />
                            </div>

                            <p className='pt-11 font-lato text-[#8A8FB9] text-[16px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,</p>

                            <div className="flex justify-between pt-14">
                                <div className="text-center w-[23%] h-56">
                                    <img src={OfferProImg1} alt="Ofer Product Image1" className="w-full h-64"/>
                                    <p className="font-lato font-semibold text-secondery text-[14px]">
                                        Duis lectus est.
                                    </p>
                                    <p className="font-lato font-semibold text-[#8A8FB9] text-[12px]">
                                        $12.00 - $15.00
                                    </p>
                                </div>
                                <div className="text-center w-[23%] h-56">
                                    <img src={OfferProImg2} alt="Ofer Product Image1" className="w-full h-64"/>
                                    <p className="font-lato font-semibold text-secondery text-[14px]">
                                        Sed placerat.
                                    </p>
                                    <p className="font-lato font-semibold text-[#8A8FB9] text-[12px]">
                                        $12.00 - $15.00
                                    </p>
                                </div>
                                <div className="text-center w-[23%] h-56">
                                    <img src={OfferProImg1} alt="Ofer Product Image1" className="w-full h-64"/>
                                    <p className="font-lato font-semibold text-secondery text-[14px]">
                                        Duis lectus est.
                                    </p>
                                    <p className="font-lato font-semibold text-[#8A8FB9] text-[12px]">
                                        $12.00 - $15.00
                                    </p>
                                </div>
                                <div className="text-center w-[23%] h-56">
                                    <img src={OfferProImg2} alt="Ofer Product Image1" className="w-full h-64"/>
                                    <p className="font-lato font-semibold text-secondery text-[14px]">
                                        Sed placerat.
                                    </p>
                                    <p className="font-lato font-semibold text-[#8A8FB9] text-[12px]">
                                        $12.00 - $15.00
                                    </p>
                                </div>
                            </div>
                            {/*Page Numbers*/}
                            <div className="flex gap-9 w-[236px] mx-auto pt-20">
                                <p className="font-lato font-semibold text-[16px] border-2 border-[#E0D3F5] px-3 rounded text-[#E0D3F5] hover:bg-primary hover:text-white">
                                    1
                                </p>
                                <p className="font-lato font-semibold text-[16px] border-2 border-[#E0D3F5] px-3 rounded text-[#E0D3F5] hover:bg-primary hover:text-white">
                                    2
                                </p>
                                <p className="font-lato font-semibold text-[16px] border-2 border-[#E0D3F5] px-3 rounded text-[#E0D3F5] hover:bg-primary hover:text-white">
                                    3
                                </p>
                                <p className="font-lato font-semibold text-[16px] border-2 border-[#E0D3F5] px-3 rounded text-[#E0D3F5] hover:bg-primary hover:text-white">
                                    4
                                </p>
                            </div>
                        </div>
                        <div className="w-[25%]">
                            <div className="pb-12">
                                <p className="font-josef font-semibold text-secondery text-[22px] pb-4">
                                    Search
                                </p>
                                <input
                                    type="text"
                                    className="border-2 border-[#BDBDD8] outline-none pl-3 w-[270px] h-10"
                                    placeholder="Search for Posts"
                                />
                            </div>
                            <div className="pt-12">
                                <p className="font-josef font-semibold text-secondery text-[22px]">
                                    Categories
                                </p>
                                <div className="flex gap-5 pt-6">
                                    <div className="font-josef text-[16px]">
                                        <p className="hover:bg-primary hover:text-white text-[#3F509E] pl-2 pr-8 py-3 hover:rounded">
                                            Hobbies (14)
                                        </p>
                                        <p className="text-[#3F509E] pl-2 pr-8 py-3 hover:bg-primary hover:text-white hover:rounded">Women (21)</p>
                                        <p className="text-[#3F509E] pl-2 pr-8 py-3 hover:bg-primary hover:text-white hover:rounded">Women (21)</p>
                                    </div>
                                    <div className="font-josef text-[16px] text-[#3F509E]">
                                        <p className="pl-2 pr-8 py-3 hover:bg-primary hover:text-white hover:rounded">Women (21)</p>
                                        <p className="pl-2 pr-8 py-3 hover:bg-primary hover:text-white hover:rounded">Women (21)</p>
                                        <p className="pl-2 pr-8 py-3 hover:bg-primary hover:text-white hover:rounded">Women (21)</p>
                                    </div>
                                </div>
                                <div className="pt-9">
                                    <p className="font-josef font-semibold text-secondery text-[22px]">
                                        Recent Post
                                    </p>
                                    <div className="pt-9 space-y-6">
                                        <RecentPost image={RecentPostIMg1} />
                                        <RecentPost image={RecentPostIMg2} />
                                        <RecentPost image={RecentPostIMg3} />
                                        <RecentPost image={RecentPostIMg4} />
                                    </div>
                                </div>
                                <div className="pt-9">
                                    <p className="font-josef font-semibold text-secondery text-[22px]">
                                        Sale Product
                                    </p>
                                    <div className="pt-9 space-y-6">
                                        <RecentPost image={SaleProImg1} />
                                        <RecentPost image={SaleProImg2} />
                                        <RecentPost image={SaleProImg3} />
                                    </div>
                                </div>
                                <div className="pt-9">
                                    <p className="font-josef font-semibold text-secondery text-[22px]">
                                        Offer Product
                                    </p>
                                    <div className="pt-9 space-y-8">
                                        <div className="flex gap-4">
                                            <div className="text-center">
                                                <img src={OfferProImg1} alt="Ofer Product Image1" />
                                                <p className="font-lato font-semibold text-secondery text-[14px]">
                                                    Duis lectus est.
                                                </p>
                                                <p className="font-lato font-semibold text-[#8A8FB9] text-[12px]">
                                                    $12.00 - $15.00
                                                </p>
                                            </div>
                                            <div className="text-center">
                                                <img src={OfferProImg2} alt="Ofer Product Image1" />
                                                <p className="font-lato font-semibold text-secondery text-[14px]">
                                                    Sed placerat.
                                                </p>
                                                <p className="font-lato font-semibold text-[#8A8FB9] text-[12px]">
                                                    $12.00 - $15.00
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="text-center">
                                                <img src={OfferProImg3} alt="Ofer Product Image1" />
                                                <p className="font-lato font-semibold text-secondery text-[14px]">
                                                    Netus proin.
                                                </p>
                                                <p className="font-lato font-semibold text-[#8A8FB9] text-[12px]">
                                                    $12.00 - $15.00
                                                </p>
                                            </div>
                                            <div className="text-center">
                                                <img src={OfferProImg4} alt="Ofer Product Image1" />
                                                <p className="font-lato font-semibold text-secondery text-[14px]">
                                                    Platea in.
                                                </p>
                                                <p className="font-lato font-semibold text-[#8A8FB9] text-[12px]">
                                                    $12.00 - $15.00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-9">
                                    <p className="font-josef font-semibold text-secondery text-[22px] pb-4">
                                        Follow
                                    </p>
                                    <div className="flex gap-4 py-2 px-3 w-32 shadow-lg rounded-md bg-white">
                                        <FaFacebook className="text-[#5625DF] h-7 w-7" />
                                        <RiInstagramFill className="text-primary h-8 w-8" />
                                        <AiFillTwitterCircle className="text-[#37DAF3] h-8 w-8" />
                                    </div>
                                </div>
                                <div className="pt-14">
                                    <p className="font-josef font-semibold text-secondery text-[22px]">
                                        Tags
                                    </p>
                                    <div className="pt-5 space-y-3">
                                        <div className="flex gap-11 font-lato text-secondery text-[16px]">
                                            <p className="border-b-2 border-[#151875]">General</p>
                                            <p className="text-primary border-b-2 border-primary">
                                                Atsanil
                                            </p>
                                            <p className="border-b-2 border-[#151875]">Insas.</p>
                                        </div>
                                        <div className="flex gap-11 font-lato text-secondery text-[16px]">
                                            <p className="border-b-2 border-[#151875]">Bibsaas</p>
                                            <p className="border-b-2 border-[#151875]">Nulla.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Water Mark Section */}
                    <div className="py-28 w-[904px] h-28 mx-auto pb-40">
                        <img src={WaterMark} alt="Water Mark Image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleBlog