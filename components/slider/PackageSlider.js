import SwiperCore, { Pagination, Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import PackageCard from "../cards/PackageCard";
import axios from "axios";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const PackageSlider = ({ sliderValue,image,title }) => {

  const [price,setPrice] = useState([])
  let path = '';
  const { pathname } = useRouter();
  if (pathname == '/') {
      path = 'home';
  } else {
      path = pathname.replaceAll("/", "");
  }

  useEffect(() => {
      axios.get(`api/package/${path}`).then(res => { setPrice(res.data); console.log(res.data) })
  }, [pathname])

  return (
    <div className="package-slider">
      <div className="package-card-items">
        {price.map((item, i) => (
          <div className="package-card-item" key={i} data-aos="fade-up"
          data-aos-duration="1000">
            <PackageCard item={item} sliderValue={sliderValue} image={image} title={title} />
          </div>
        ))}
      </div>
      <div className="new-pagination flex items-center justify-center my-4"></div>
    </div>
  );
};

export default PackageSlider;
