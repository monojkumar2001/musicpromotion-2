

import CustomSlider from "../CustomSlider";
import PackageSlider from "../slider/PackageSlider";
import { useState } from "react";

const PricingSection = ({ type = "one",image,title }) => {
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <section id="pricing" className={`type-${type}`}>
      <div className="pricing-container" >
        <h1 className="heading" data-aos="fade-up"
            data-aos-duration="1000">
          Customize Your <span>Package</span> <br /> <span>According</span> to
          Your Need
        </h1>
        <p className="sub-heading" data-aos="fade-up"
            data-aos-duration="1000">Ready to skyrocket your popularity?</p>
        <div className="save-btn " data-aos="fade-up"
            data-aos-duration="1000">
          <p>Save 20%</p>
        </div>

        <CustomSlider setSliderValue={setSliderValue}/>
        <PackageSlider sliderValue={sliderValue} image={image} title={title} />
      </div>
    </section>
  );
};

export default PricingSection;
