import React from 'react'
import Hero from '../Components/Home/Hero'
import Featured from '../Components/Home/Featured'
import LeatestProducts from '../Components/Home/LeatestProducts'
import CustomerSupport from '../Components/Home/CustomerSupport'
import TrendingProducts from '../Components/Home/TrendingProducts'
import UniqueFeatures from '../Components/Home/UniqueFeatures'
import DiscountItem from '../Components/Home/DiscountItem'
import TopCategories from '../Components/Home/TopCategories'
import LatestUpdates from '../Components/Home/LatestUpdates'
import LatestBlog from '../Components/Home/LatestBlog'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <Featured/>
    <LeatestProducts/>
    <CustomerSupport/>
    <UniqueFeatures/>
    <TrendingProducts/>
    <DiscountItem/>
    <TopCategories/>
    <LatestUpdates/>
    <LatestBlog/>
    </>
  )
}

export default HomePage