import React from "react";

const RegistrationIcon = () => {
  return (
    <>
      <div className="registration_icons">
        {itemIcon.map((item) => {
          return (
            <div className="registration-img-item" key={item.id}>
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RegistrationIcon;

const itemIcon = [
  {
    id: 1,
    img: "/assets/home-1/img/reg-img-1.svg",
  },
  {
    id: 2,
    img: "/assets/home-1/img/reg-img-2.svg",
  },
  {
    id: 3,
    img: "/assets/home-1/img/reg-img-3.svg",
  },
  {
    id: 4,
    img: "/assets/home-1/img/reg-img-4.svg",
  },
  {
    id: 5,
    img: "/assets/home-1/img/reg-img-5.svg",
  },
  {
    id: 6,
    img: "/assets/home-1/img/reg-img-6.svg",
  },
  {
    id: 7,
    img: "/assets/home-1/img/reg-img-7.svg",
  },
  {
    id: 8,
    img: "/assets/home-1/img/reg-img-8.svg",
  },
  {
    id: 9,
    img: "/assets/home-1/img/reg-img-9.svg",
  },
  {
    id: 10,
    img: "/assets/home-1/img/reg-img-10.svg",
  },
];
