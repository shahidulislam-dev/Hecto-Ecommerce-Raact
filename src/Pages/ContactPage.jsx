import React from 'react'
import ContactInfo from '../Components/Contact/ContactInfo'
import SendMail from '../Components/Contact/SendMail'
import Banner from '../Components/ComponentCommon/Banner'

const ContactPage = () => {
  return (
    <>
    <Banner title="Contact Us" name="Contact Us"/>
    <ContactInfo/>
    <SendMail/>
    </>
  )
}

export default ContactPage