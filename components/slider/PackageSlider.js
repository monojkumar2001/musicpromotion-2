import SwiperCore, { Pagination, Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import PackageCard from "@components/cards/PackageCard";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const PackageSlider = ({ data, sliderValue }) => {
  return (
    <div className="package-slider">
      <div className="package-card-items">
        {data.map((item, i) => (
          <div className="package-card-item" key={i}>
            <PackageCard index={i} {...item} sliderValue={sliderValue} />
          </div>
        ))}
      </div>
      <div className="new-pagination flex items-center justify-center my-4"></div>
    </div>
  );
};

export default PackageSlider;
