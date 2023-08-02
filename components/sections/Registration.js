import React,{useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";



const Registration = () => {
  const { push } = useRouter();
  const [inputField, setInputField] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    site: "",
    error_log : []
  });
  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", inputField.first_name);
    formData.append("last_name", inputField.last_name);
    formData.append("email", inputField.email);
    formData.append("phone", inputField.phone);
    formData.append("company", inputField.company);
    formData.append("site", inputField.site);
    axios
      // .post("https://api.nftconstructer.com/api/demo", formData)
      .post("api/contact", formData)
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire('Success',res.data.msg,'success')
          setInputField({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            company: "",
            site: "",
            error_log : []
          });
          // push('/v1/thankYou');
        } else if(res.data.status == 203){
          setInputField( {
            ...inputField,
            botSubmit : res.data.data
          })
        }else {
          setInputField( {
            ...inputField,
            error_log : res.data.error
          })
        }
      });
  };


  return (
    <>
      <div className="registration-input">
        <div className="container">
          <div className="registration_box">
            <div className=" registration_left " data-aos="fade-up"
        data-aos-duration="1000">
              <div className="registration_title">
                <p className="create-stort-title">The bottom line?</p>
                <h1>With NFT Constructer you get</h1>
              </div>
              <div className="registration_disc">
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
                      A" <span>dream team</span> " of top-performing developers
                      that none of your competitors can steal from you.
                    </p>
                  </div>
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
                      A" <span>dream team</span> " of top-performing developers
                      that none of your competitors can steal from you.
                    </p>
                  </div>
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
                      A" <span>dream team</span> " of top-performing developers
                      that none of your competitors can steal from you.
                    </p>
                  </div>
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
                      A" <span>dream team</span> " of top-performing developers
                      that none of your competitors can steal from you.
                    </p>
                  </div>
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
                      A" <span>dream team</span> " of top-performing developers
                      that none of your competitors can steal from you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="registration_icons">
                <div className="registration-img-item">
                  <img src="/assets/home-1/img/reg-img-1.svg" alt="" />
                </div>
                <div className="registration-img-item">
                  <img src="/assets/home-1/img/reg-img-2.svg" alt="" />
                </div>
                <div className="registration-img-item">
                  <img src="/assets/home-1/img/reg-img-3.svg" alt="" />
                </div>
                <div className="registration-img-item">
                  <img src="/assets/home-1/img/reg-img-4.svg" alt="" />
                </div>
                <div className="registration-img-item">
                  <img src="/assets/home-1/img/reg-img-5.svg" alt="" />
                </div>
                <div className="registration-img-item">
                  <img src="/assets/home-1/img/reg-img-6.svg" alt="" />
                </div>
                <div className="registration-img-item">
                  <img src="/assets/home-1/img/reg-img-7.svg" alt="" />
                </div>
                <div className="registration-img-item">
                  <img src="/assets/home-1/img/reg-img-8.svg" alt="" />
                </div>
                <div className="registration-img-item">
                  <img src="/assets/home-1/img/reg-img-9.svg" alt="" />
                </div>
                <div className="registration-img-item">
                  <img src="/assets/home-1/img/reg-img-10.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="registration_right" data-aos="fade-up"
        data-aos-duration="1500">
              <div className="registration_right_box">
                <form onSubmit={allInfoSubmit}>
                  <div className="form_email">
                    <label>First Name</label>
                    <input type="text" placeholder="E.g . Buzz" name="first_name"  onChange={inputsHandler} value={inputField.first_name}/>
                    <small style={{ color:'red' }}>{inputField.error_log.first_name}</small>
                  </div>
                  <div className="form_email">
                    <label>Last Name</label>
                    <input type="text" placeholder="E.g . Aldrin" name="last_name"  onChange={inputsHandler} value={inputField.last_name}/>
                    <small style={{ color:'red' }}>{inputField.error_log.last_name}</small>
                  </div>
                  <div className="form_email">
                    <label>Email</label>
                    <input type="text" placeholder="E.g . buzz@nasa.gov" name="email"  onChange={inputsHandler} value={inputField.email}/>
                    <small style={{ color:'red' }}>{inputField.error_log.email}</small>
                  </div>
                  <div className="form_email">
                    <label>Company</label>
                    <input type="text" placeholder="E.g . NASA" name="company"  onChange={inputsHandler} value={inputField.company}/>
                    <small style={{ color:'red' }}>{inputField.error_log.company}</small>
                  </div>
                  <div className="form_companey form_email">
                    <label>Company Site</label>
                    <select name="site"  onChange={inputsHandler} value={inputField.site}>
                      <option value="1">Select One</option>
                      <option value="2">Select two</option>
                      <option value="3">Select three</option>
                      <option value="4">Select four</option>
                    </select>
                    <small style={{ color:'red' }}>{inputField.error_log.site}</small>
                  </div>
                  <div className="form_email">
                    <label>Phone Number</label>
                    <input type="text" placeholder="E.g 234 5678" name="phone"  onChange={inputsHandler} value={inputField.phone}/>
                    <small style={{ color:'red' }}>{inputField.error_log.phone}</small>
                  </div>
                  <div className="registration_right_box_disc">
                    <p>
                      We need your phone number for the demo. We'll never use it
                      for any other purposes.
                    </p>
                  </div>
                  <div className="registration_form_btn">
                    <button className="custom-btn">Let’s Talk</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
