import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ExtraDetails = () => {
  let data = useSelector((state) => state.cartItemManager.productDetail)
  const product = data[0];

  console.log("Product Data:", data);
  return (
    <section className="bg-[#F9F8FE] py-28">
      <div className="container mx-auto">

        <Tabs>
          <TabList className="border-none outline-none flex items-center gap-20 font-josef text-secondary text-[24px]">
            <Tab className="cursor-pointer outline-none px-4 py-2">Description</Tab>
            <Tab className="cursor-pointer outline-none px-4 py-2"> Additional Info</Tab>
            <Tab className="cursor-pointer outline-none px-4 py-2"> Reviews</Tab>
            <Tab className="cursor-pointer outline-none px-4 py-2"> Video</Tab>
          </TabList>

          <TabPanel>
            {data.map((item) => (
              <div key={item.id} className="">
                <div className="font-josef pt-14">
                  <h3 className='text-secondery text-[22px]'>Varius tempor.</h3>
                  <p className='text-paragraph text-[16px] pt-3 text-justify'>{item.description}</p>
                </div>
                <div className="font-josef pt-9">
                  <h3 className='text-secondery text-[22px]'>More details</h3>
                  <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
                    <FaArrowRight className='text-black' />
                    <p className='text-justify'>Discount Parcentage: ${item.discountPercentage}</p>
                  </div>
                  <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
                    <FaArrowRight className='text-black' />

                    <p className='text-justify'>Brand: {item.brand}</p>

                  </div>
                  <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
                    <FaArrowRight className='text-black' />
                    <p className='text-justify'>Product Weigh: {item.weight.toFixed(2)} Kilogram</p>
                  </div>
                  <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
                    <FaArrowRight className='text-black' />
                    <p className='text-justify'>Product Tags: {item.tags.join(", ")}</p>
                  </div>

                </div>
              </div>
            ))}
          </TabPanel>
          <TabPanel>
            {data.map((item) => (
              <div key={item.id} className="font-josef pt-9 px-4">
                <h3 className='text-secondery text-[22px]'>Shipping & Return Policy Details</h3>
                <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
                  <FaArrowRight className='text-black' />
                  <p className='text-justify'>Product Warranty: {item.warrantyInformation}</p>
                </div>
                <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
                  <FaArrowRight className='text-black' />

                  <p className='text-justify'>Product Shipping Policy: {item.shippingInformation}</p>

                </div>
                <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
                  <FaArrowRight className='text-black' />
                  <p className='text-justify'>Product Availability: {item.availabilityStatus} Kilogram</p>
                </div>
                <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
                  <FaArrowRight className='text-black' />
                  <p className='text-justify'>Product Return Policy: {item.returnPolicy}</p>
                </div>

              </div>
            ))}
          </TabPanel>
          <TabPanel>
            <div className="font-josef pt-9 px-4">
              <h3 className="text-secondery text-[22px]">Customer Reviews</h3>
              {product && product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={index} className=" text-[16px] text-paragraph pt-5">
                    <p className="font-josef font-bold text-secondery text-[16px]">{review.reviewerName}</p>
                    
                    <div className='flex items-center gap-5 pt-2'>
                      <FaArrowRight className="text-black mt-1" />
                      <p className=" text-justify font-semibold">Rating: {review.rating} ⭐</p>
                    </div>
                    <div className='flex items-center gap-5 pt-2'>
                      <FaArrowRight className="text-black mt-1" />
                      <p className="text-justify">Reviewer Comment: {review.comment}</p>
                    </div>
                    <div className='flex items-center gap-5 pt-2'>
                      <FaArrowRight className="text-black mt-1" />
                      <p className="text-justify">Review Date: {review.date}</p>
                    </div>
                    <div className='flex items-center gap-5 pt-2'>
                      <FaArrowRight className="text-black mt-1" />
                      <p className="text-justify">Reviewer Email: {review.reviewerEmail}</p>
                    </div>
                    
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews available.</p>
              )}
            </div>

          </TabPanel>
          <TabPanel>
            <h1 className='font-josef font-bold text-secondery text-[24px] text-center p-20'>No videos are available right now.</h1>
          </TabPanel>
        </Tabs>

      </div>
    </section>
  );
};

export default ExtraDetails;
