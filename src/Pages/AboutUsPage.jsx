import React from 'react'
import AboutUsDt from '../Components/AboutUs/AboutUsDt'
import Feature from '../Components/AboutUs/Feature'
import ClientReview from '../Components/AboutUs/ClientReview'
import Banner from '../Components/ComponentCommon/Banner'

const AboutUsPage = () => {
  return (
    <>
    <Banner title="About Us" name="About Us"/>
    <AboutUsDt/>
    <Feature/>
    <ClientReview/>
    </>
  )
}

export default AboutUsPage