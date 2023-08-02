import React from "react";
import Image from "next/image";
import Link from "next/link";
const ContactUs = ({ type = "one" }) => {
  return (
    <div className={`contact-con type-${type}`}>
      <div className="container">
        <div className="contact-us-wrapper" data-aos="fade-up"
        data-aos-duration="1000">
          <div className="contact-us-logo">
            <Image width={66} height={56} src="/assets/home-1/img/contact-logo.svg" alt="" />
          </div>
          <div className="contact-us-content" >
            <h1 className="section-title">Is Your Project Not In The List</h1>
            <p>
              If you can describe it, chances are your dedicated team of
              developers can create it, feel free to send us a message to
              confirm.{" "}
            </p>
            <Link href={"/contact"}>
              <button className="contact-us-btn">Contact Us</button>
            </Link>
          </div>
          <div className="contact-us-img-1">
            <Image width={510} height={438} src="/assets/home-1/img/contact-img-1.svg" alt="Music Promotion Today" />
          </div>
          <div className="contact-us-img-2">
            <Image width={358} height={455} src="/assets/home-1/img/contact-img-2.svg" alt="Music Promotion Today" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
