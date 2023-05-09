import React from 'react'

const ContactUs = () => {
  return (
    <div className="contact-con">
        <div className="container">
            <div className="contact-us-wrapper">
                <div className="contact-us-logo">
                <img src="/assets/home-1/img/contact-logo.svg" alt="" />
                </div>
      <div className="contact-us-content">
      <h1 className="section-title">Is Your Project Not In The List</h1>
            <p>If you can describe it, chances are your dedicated team of developers  can create it, feel free to send us a message to confirm. </p>
            <button className='contact-us-btn'>
                Contact Us
            </button>
      </div>
            <div className="contact-us-img-1">
            <img src="/assets/home-1/img/contact-img-1.svg" alt="" />
            </div>
            <div className="contact-us-img-2">
            <img src="/assets/home-1/img/contact-img-2.svg" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs