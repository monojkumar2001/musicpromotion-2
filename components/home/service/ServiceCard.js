import React from 'react'
import Link from "next/link";
import Image from 'next/image';
const ServiceCard = ({img,heading,dec,link}) => {
  return (
  <div className="services-card" >
    <div className="services-icon">
      <Image width={42} height={42} src={img} alt="music promotion today" />
    </div>
        <h3>{heading}</h3>
        <p className="service-dis">{dec}</p>
        <Link href={link}><button className="learn-more-btn">Learn More</button></Link>
    </div>
  )
}

export default ServiceCard