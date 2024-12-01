import React from 'react'
import ContactBanner from '../Components/Contact/ContactBanner'
import ContactInfo from '../Components/Contact/ContactInfo'
import SendMail from '../Components/Contact/SendMail'

const ContactPage = () => {
  return (
    <>
    <ContactBanner/>
    <ContactInfo/>
    <SendMail/>
    </>
  )
}

export default ContactPage