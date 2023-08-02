import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import LinkedinSaleCard from "./LinkedinSaleCard";
const LinkedinSales = ({ data, type = "one" }) => {
  return (
    <div className={`services type-${type}`}>
      <div className="container">
        <div
          className="title-wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="section-title">
            The #1 LinkedIn Sales Navigator Extractor
          </h1>
          <p>
            We Are Glad To Hear From People Their Positive Feedback About Our
            Service.
          </p>
        </div>
        <div
          className="linkedin-sales-wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Swiper
            spaceBetween={60}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Navigation, EffectCoverflow, A11y]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            breakpoints={{
              450: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              1240: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <LinkedinSaleCard
                name="Julia Hoffman"
                img="/assets/home-1/img/linkedin-sales-1.jpg"
                dis="Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry &#44s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a gal not only five centuries, but also the leap"
              />
            </SwiperSlide>
            <SwiperSlide>
              <LinkedinSaleCard
                name="Julia Hoffman"
                img="/assets/home-1/img/linkedin-sales-2.jpg"
                dis="Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry &#44s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a gal not only five centuries, but also the leap"
              />
            </SwiperSlide>
            <SwiperSlide>
              <LinkedinSaleCard
                name="Julia Hoffman"
                img="/assets/home-1/img/linkedin-sales-3.jpg"
                dis="Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry &#44s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a gal not only five centuries, but also the leap"
              />
            </SwiperSlide>
            <SwiperSlide>
              <LinkedinSaleCard
                name="Julia Hoffman"
                img="/assets/home-1/img/linkedin-sales-3.jpg"
                dis="Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry &#44s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a gal not only five centuries, but also the leap"
              />
            </SwiperSlide>
          </Swiper>
          <div className="slider-nav">
            <div className="prev">
              <svg
                width="12"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L1 7.5L8 14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="next">
              <svg
                width="12"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 14L8 7.5L1 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinSales;
