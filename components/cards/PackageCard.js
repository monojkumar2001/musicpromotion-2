import Image from "next/image";
import Link from "next/link";
import React from "react";

const PackageCard = ({item,sliderValue,image,title}) => {

 const chooseOption = () => {
    localStorage.setItem('service_id',item.package_id);
    localStorage.setItem('service_title',title);
    localStorage.setItem('service_image',image);
    localStorage.setItem('slider_value',sliderValue);
    localStorage.setItem('unit_price',item.cur_price);
    localStorage.setItem('service_price',(item.cur_price * sliderValue) - (item.cur_price * sliderValue ) * (sliderValue > 1 ? 20 : 0)/100);
 }

  return (
    <div className="package-card">
      <div className="package-type">
        <h4>{item.package_type}</h4>
        {/* <p>{item.cur_price}</p> */}
      </div>
      <div className="pricing-info">
        <p className="price">${(item.cur_price * sliderValue) - (item.cur_price * sliderValue ) * (sliderValue > 1 ? 20 : 0)/100}</p>
        <p>{item.price}</p>

        <div className="package_lead">{item.lead}</div>
      </div>
      <ul className="upper-details">
        {item.includes.map((item,i) => (
          <li key={i} className="list-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="11.5" fill="#D9FFE6" />
              <path
                d="M7 12L10.1579 16L17 8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="item-text">{item}</p>
          </li>
        ))}
      </ul>
      <Link
        href="/order-details"
        target={"_blank"}
       
      >
       <button className="purchase-btn" onClick={chooseOption}> Purchase</button>
      </Link>
    </div>
  );
};

export default PackageCard;
