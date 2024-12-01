import React from 'react'

const Banner = () => {
  return (
    <section className='bg-[#F2F0FF] py-24'>
        <div className="container mx-auto">
            <div className="">
                <h4 className='font-josef font-bold text-[36px] text-secondery'>My Account</h4>
                <div className="flex gap-1">
                <p className='font-lato font-medium text-[16px]'>Home. Page.</p>
                <p className='font-lato font-medium text-[16px] text-primary'>My Account</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner