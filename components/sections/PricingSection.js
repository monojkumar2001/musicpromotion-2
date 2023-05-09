import PackageCard from "@components/cards/PackageCard";
import CustomSlider from "@components/CustomSlider";
import PackageSlider from "@components/slider/PackageSlider";
import { useState } from "react";

const PricingSection = ({ data, type = "one" }) => {
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <section id="pricing" className={`type-${type}`}>
      <div className="pricing-container">
        <h1 className="heading">
          Customize Your <span>Package</span> <br /> <span>According</span> to
          Your Need
        </h1>
        <p className="sub-heading">Ready to skyrocket your popularity?</p>
        <div className="save-btn">
          <p>Save 20%</p>
        </div>

        <CustomSlider setSliderValue={setSliderValue} />
        <PackageSlider data={data} sliderValue={sliderValue} />
      </div>
    </section>
  );
};

export default PricingSection;
