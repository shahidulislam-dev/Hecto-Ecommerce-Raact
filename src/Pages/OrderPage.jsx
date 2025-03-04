import React from 'react'
import OrderComplete from '../Components/Order/OrderComplete'
import Banner from '../Components/ComponentCommon/Banner'

const OrderPage = () => {
  return (
    <>
    <Banner title="Order Completed" name="Order Completed"/>
    <OrderComplete/>
    </>
  )
}

export default OrderPage