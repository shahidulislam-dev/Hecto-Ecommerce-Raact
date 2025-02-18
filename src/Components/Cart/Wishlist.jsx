import React from 'react'
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Banner from '../ComponentCommon/Banner';
import { clearWishlist, deleteWishlistItem } from '../Slices/WishlistSlice';
import { addToCart } from '../Slices/CartSlice';

export const Wishlist = () => {

    let data = useSelector((state) => state.wishlistManager.wishlist)

    let dispatch = useDispatch();
    const handleDeleteProduct = (index) => {
        dispatch(deleteWishlistItem(index))
        toast.success("Deleted Item From Wishlist!!", { position: "top-center", autoClose: 1000, });
    }

    const navigate = useNavigate();
    const goToShop = () => {
        navigate('/shop')
    }


    const deleteAllWishlistItems = () => {
        dispatch(clearWishlist())
        toast.success("Deleted All From Wishlist!!", { position: "top-center", autoClose: 1000, });
    }

    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        sum += (item.price * item.qty);
    }


    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item }));
        toast.success("Added To Cart!!", { position: "top-center", autoClose: 1000 });
    };

    const handleAddAllToCart = () => {
        for (let i = 0; i < data.length; i++) {
            dispatch(addToCart({ ...data[i] }));
        }
        toast.success("All Wishlist Items Added To Cart!", { position: "top-center", autoClose: 1000 });
    };




    return (
        <>
            <Banner title="My Wishlist" name="My Wishlist" />
            <section>
                <div className="container mx-auto py-32">
                    {data.length > 0 ? <div className="">
                        <div className="flex items-center font-josef font-semibold text-secondery text-[20px]">
                            <div className="w-full flex items-center justify-between">
                                <h4 className='w-[45%]'>Product</h4>
                                <h4 className='w-[17%] text-center'>Price</h4>
                                <h4 className='w-[17%] text-center'>Discount Price</h4>
                                <h4 className='w-[17%] text-center'>Stock</h4>
                                <h4 className='w-[17%] text-center'>Action</h4>
                            </div>

                        </div>
                        <div className="pt-10 flex justify-between">
                            <div className="w-full">
                                {
                                    data.map((item, index) => (
                                        <div key={item.id} className="">
                                            <div className="flex items-center justify-between border-b-2 py-5">
                                                <div className="flex items-center gap-3 w-[45%]">
                                                    <div className="relative bg-slate-300">
                                                        <img src={item.thumbnail} alt="Product Image For Cart" className='w-20 h-[90px]' />
                                                        <div onClick={() => handleDeleteProduct(index)} className="w-4 h-4 bg-black text-white text-[8px] rounded-full flex justify-center items-center absolute -top-1 -right-1 cursor-pointer"><ImCross /></div>
                                                    </div>
                                                    <div className="font-josef">
                                                        <h4 className='text-secondery text-[16px]'>{item.title}</h4>
                                                        <p className='text-paragraph text-[12px]'>Color: Brown</p>
                                                        <p className='text-paragraph text-[12px]'>Size: XL</p>
                                                    </div>
                                                </div>

                                                <div className="font-josef text-primary line-through text-[14px] w-[17%]">
                                                    <p className='text-center'>${item.price}</p>
                                                </div>
                                                <div className="font-josef text-secondery text-[14px] w-[17%]">
                                                    <p className='text-center'>${(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}</p>
                                                </div>
                                                <div className="flex items-center justify-center font-josef overflow-hidden h-5 w-[17%]">
                                                    <div className={`text-[14px] font-semibold ${item.stock > 0 ? "text-green-500" : "text-red-500"}`}>
                                                        <p className='text-center'>{item.stock > 0 ? "In Stock" : "Out Of Stock"}</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center font-josef font-semibold text-white text-[14px]  w-[17%]">
                                                    <button onClick={() => handleAddToCart(item)} className='px-4 py-1 rounded-md bg-secondery hover:bg-primary'>Add To Cart</button>
                                                </div>
                                            </div>

                                        </div>

                                    ))
                                }
                                <div className="flex items-center justify-between font-josef text-white text-[16px] pt-9">
                                    <button onClick={handleAddAllToCart} className='bg-secondery hover:bg-primary px-5 py-3 rounded-md'>Add All To Cart</button>
                                    <button onClick={deleteAllWishlistItems} className='bg-secondery hover:bg-primary px-7 py-3 rounded-md'>Clear Wishlist</button>
                                </div>
                            </div>

                        </div>
                    </div>
                        :
                        <div className="p-20 text-center">
                            <h1 className='font-josef font-bold text-secondery text-[40px]'>Your Cart Is Empty</h1>
                            <button onClick={goToShop} className='bg-primary px-5 py-2 font-josef text-white text-[16px] mt-5 rounded-sm'>Go To Shop</button>
                        </div>
                    }
                </div>
            </section>
        </>

    )
}
export default Wishlist
