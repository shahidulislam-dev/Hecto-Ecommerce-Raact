import React from 'react'
import { ImCross } from "react-icons/im";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrement, deleteItem, increment } from '../Slices/CartSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {

    let data = useSelector((state) => state.cartItemManager.cartItems)

    let dispatch = useDispatch();
    const handleDeleteProduct = (index) => {
        dispatch(deleteItem(index))
        toast.success("Deleted Item From Cart!!", { position: "top-center", autoClose: 1000, });
    }

    const handleIncrement = (index) => {
        dispatch(increment(index));
    }
    const handleDecrement = (index) => {
        dispatch(decrement(index));
    }

    const navigate = useNavigate();
    const goToShop = () => {
        navigate('/shop')
    }
    const goToCheckout = () => {
        navigate('/checkout')
    }

    const deleteAllCartItems = () => {
        dispatch(clearCart())
        toast.success("Deleted All From Cart!!", { position: "top-center", autoClose: 1000, });
    }

    let sum = 0;
    for(let i = 0; i < data.length; i++){
        let item = data[i];
        sum += (item.price * item.qty);
    }

    

    return (
        <section>
            <div className="container mx-auto py-32">
                {data.length > 0 ? <div className="">
                    <div className="flex items-center font-josef font-semibold text-secondery text-[20px]">
                        <div className="w-[65%] flex items-center justify-between">
                            <h4 className='w-[45%]'>Product</h4>
                            <h4 className='w-[17%] text-center'>Price</h4>
                            <h4 className='w-[17%] text-center'>Quantity</h4>
                            <h4 className='w-[17%] text-center'>Total</h4>
                        </div>
                        <div className="w-[30%] pl-28">
                            <h4 className='text-center'>Cart Total</h4>
                        </div>
                    </div>
                    <div className="pt-10 flex justify-between">
                        <div className="w-[65%]">
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

                                            <div className="font-josef text-secondery text-[14px] w-[17%]">
                                                <p className='text-center'>${item.price}</p>
                                            </div>
                                            <div className="flex items-center justify-center font-josef text-[#BEBFC2] overflow-hidden h-5 w-[17%]">
                                                <div onClick={() => handleDecrement(index)} className="bg-[#E7E7EF] px-2 py-[5px] text-[12px] text-secondery cursor-pointer"><FaMinus /></div>
                                                <div className="px-3 py-[1px] text-[14px] bg-[#F0EFF2] text-secondery"><p className='text-center'>{item.qty}</p></div>
                                                <div onClick={() => handleIncrement(index)} className="bg-[#E7E7EF] px-2 py-[5px] text-[12px] text-secondery cursor-pointer"><FaPlus /></div>
                                            </div>
                                            <div className="font-josef text-secondery text-[14px] w-[17%]">
                                                <p className='text-center'>${(item.price * item.qty).toFixed(2)}</p>
                                            </div>
                                        </div>

                                    </div>

                                ))
                            }
                            <div className="flex items-center justify-between font-josef text-white text-[16px] pt-9">
                                <button className='bg-primary px-5 py-3 rounded-md'>Update Cart</button>
                                <button onClick={deleteAllCartItems} className='bg-primary px-7 py-3 rounded-md'>Clear Cart</button>
                            </div>
                        </div>
                        <div className="w-[30%]">
                            <div className="bg-[#E8E6F1] p-9">
                                <div className="flex items-center justify-between border-b-2 border-[#E1E1E4] font-lato font-[600px] text-secondery text-[18px]">
                                    <h5>Subtotal</h5>
                                    <h5>${sum.toFixed(2)}</h5>
                                </div>
                                <div className="flex items-center justify-between border-b-2 border-[#E1E1E4] pt-8 font-lato font-[600px] text-secondery text-[18px]">
                                    <h5>Total</h5>
                                    <h5>${sum.toFixed(2)}</h5>
                                </div>
                                <div className="pt-7">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="cursor-pointer accent-[#19D16F]" />
                                        <p className="font-lato font-[400px] text-[12px] text-[#8A91AB]">Shipping & taxes calculated at checkout</p>
                                    </label>
                                </div>
                                <div className="pt-9">
                                    <button onClick={goToCheckout} className='font-lato font-semibold text-[14px] text-white bg-[#19D16F] py-3 w-full rounded-md'>Proceed To Checkout</button>
                                </div>
                            </div>
                            <div className="pt-8 ">
                                <h4 className='font-josef font-semibold text-secondery text-[20px] text-center'>Calculate Shopping</h4>
                                <div className="bg-[#E8E6F1] p-9 mt-6">
                                    <p className='font-josef text-paragraph text-[14px] border-b-2 border-[#E1E1E4]'>Bangladesh</p>
                                    <p className='font-josef text-paragraph text-[14px] border-b-2 border-[#E1E1E4] pt-9'>Mirpur Dhaka-1216</p>
                                    <p className='font-josef text-paragraph text-[14px] border-b-2 border-[#E1E1E4] pt-9'>Postal Code</p>
                                    <div className="pt-9">
                                        <button className='font-josef font-semibold text-[16px] text-white bg-primary py-3 w-full rounded-md'>Calculate Shopping</button>
                                    </div>
                                </div>
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
    )
}

export default Cart