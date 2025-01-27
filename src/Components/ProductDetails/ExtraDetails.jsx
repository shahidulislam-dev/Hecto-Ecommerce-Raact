import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const ExtraDetails = () => {
  return (
    <section className="bg-[#F9F8FE] py-28">
      <div className="container mx-auto">
        <div className="flex items-center gap-20 font-josef text-secondary text-[24px]">
          <h3 className="relative group">
            Description
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondery transition-all duration-300 group-hover:w-full"></span>
          </h3>
          <h3 className="relative group">
            Additional Info
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondery transition-all duration-300 group-hover:w-full"></span>
          </h3>
          <h3 className="relative group">
            Reviews
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondery transition-all duration-300 group-hover:w-full"></span>
          </h3>
          <h3 className="relative group">
            Video
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondery transition-all duration-300 group-hover:w-full"></span>
          </h3>
        </div>
        <div className="font-josef pt-14">
          <h3 className='text-secondery text-[22px]'>Varius tempor.</h3>
          <p className='text-paragraph text-[16px] pt-3 text-justify'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        </div>
        <div className="font-josef pt-9">
          <h3 className='text-secondery text-[22px]'>More details</h3>
          <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
            <FaArrowRight className='text-black' />
            <p className='text-justify'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
          </div>
          <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
            <FaArrowRight className='text-black' />
            <p className='text-justify'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
          </div>
          <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
            <FaArrowRight className='text-black' />
            <p className='text-justify'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
          </div>
          <div className="flex items-center gap-5 text-[16px] text-paragraph pt-3">
            <FaArrowRight className='text-black' />
            <p className='text-justify'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExtraDetails;
