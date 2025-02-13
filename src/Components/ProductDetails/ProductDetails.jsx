import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';
import { addToCart } from '../Slices/CartSlice';

const ProductDetails = () => {

  let data = useSelector((state) => state.cartItemManager.productDetail)

  const dispatch = useDispatch();
    const handleAddToCart = (item)=>{
      dispatch(addToCart({...item, qty: 1}))
    }

  //Code for Ratings
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <IoMdStar key={`full-${index}`} className="text-yellow-500 text-sm" />
        ))}
        {halfStar && <IoMdStarHalf className="text-yellow-500 text-sm" />}
        {Array.from({ length: emptyStars }, (_, index) => (
          <IoMdStarOutline key={`empty-${index}`} className="text-yellow-500 text-sm" />
        ))}
      </>
    );
  };


  return (
    <section>
      <div className="container mx-auto">
        {
          data.map((product) => (
            <div key={product.id} className="my-32 flex items-center shadow-shadowArround p-5">
              <div className="w-[50%] flex items-center gap-4">
                <div className="space-y-2">
                  {[...product.images, ...product.images, ...product.images]
                    .slice(0, 3)
                    .map((image, index) => (
                      <div key={index} className="bg-slate-300 p-2 w-48 flex justify-center">
                        <img src={image} alt="" className="w-32 h-[171px]" />
                      </div>
                    ))}
                </div>
                <div className="bg-slate-300 p-2 w-[30rem] h-[36rem] flex items-center justify-center">
                  <img src={product.thumbnail} alt="" className='w-96 h-[28rem]' />
                </div>
              </div>

              <div className="w-[50%]">
                <h1 className='font-josef font-bold text-secondery text-[36px]'>{product.title}</h1>
                <div className="flex items-center gap-1 pb-1">
                  {renderStars(product.rating)}
                  <span className="text-gray-500">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center gap-5 font-josef text-[16px] pt-3">
                  <p className='text-secondery'>${(product.price - product.price * (product.discountPercentage / 100)).toFixed(2)}</p>
                  <p className='text-primary line-through'>${product.price}</p>
                </div>
                <p className='font-josef text-[16px] text-secondery pt-3'>Dimentions: width: {product.dimensions.width} height: {product.dimensions.height} depth: {product.dimensions.depth}</p>
                <p className='font-josef text-paragraph text-[16px] w-[70%] pt-3'>{product.description}</p>
                <div className="font-josef text-secondery text-[16px] pt-3 flex items-center gap-4 pl-20">
                  <button onClick={()=>handleAddToCart(product)} className='hover:bg-secondery hover:text-white px-3 py-2 rounded-md'>Add To Cart</button>
                  <div className="hover:bg-secondery hover:text-white px-3 py-2 rounded-md cursor-pointer"><FaRegHeart /></div>
                </div>
                <p className='font-josef text-[16px] text-secondery pt-3'>Categories: {product.category} </p>
                <p className='font-josef text-[16px] text-secondery pt-3'>Tags: {product.tags.join(", ")}</p>
                <div className="flex items-center gap-5 pt-5">
                  <p className='font-josef text-[16px] text-secondery'>Share: </p>
                  <div className="flex gap-3 items-center text-[20px]">
                    <FaFacebook className='cursor-pointer text-[#0866ff]' />
                    <RiInstagramFill className='text-primary cursor-pointer' />
                    <AiFillTwitterCircle className='cursor-pointer text-secondery' />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ProductDetails