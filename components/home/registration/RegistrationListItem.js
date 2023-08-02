import React from "react";
import RegistrationIcon from "./RegistrationIcon";

const RegistrationListItem = () => {
  return (
    <>
      <div
        className=" registration_left "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="registration_title">
          <p className="create-stort-title">The bottom line?</p>
          <h1>With NFT Constructer you get</h1>
        </div>
        {itemData.map((item) => {
          return (
            <div className="registration_disc" key={item.id}>
              <div className="registration-items">
                <div className="registration-item-list">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 7L7.5 12.5L18 2"
                      stroke="#04AA33"
                      strokeWidth="3"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <p>
                    A <span>" {item.dream} "</span> {item.list}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <RegistrationIcon />
      </div>
    </>
  );
};

export default RegistrationListItem;

const itemData = [
  {
    id: 1,
    dream: "Dream Item",
    list: `of top-performing developers that none of your competitors can steal from you.`,
  },
  {
    id: 2,
    dream: "Dream Item",
    list: "of top-performing developers that none of your competitors can steal from you.",
  },
  {
    id: 3,
    dream: "Dream Item",
    list: "of top-performing developers that none of your competitors can steal from you.",
  },
  {
    id: 4,
    dream: "Dream Item",
    list: " of top-performing developers that none of your competitors can steal from you.",
  },
  {
    id: 5,
    dream: "Dream Item",
    list: "of top-performing developers that none of your competitors can steal from you.",
  },
];
