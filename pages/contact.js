import AppLayout from "../components/layout/AppLayout";
import React,{useState,useEffect} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const Contact = () => {
    const { push } = useRouter();
    const [inputField, setInputField] = useState({
      name: "",
      email: "",
      message: "",
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
      formData.append("name", inputField.name);
      formData.append("email", inputField.email);
      formData.append("message", inputField.message);
      axios
        // .post("https://api.nftconstructer.com/api/demo", formData)
        .post("api/second-contact", formData)
        .then((res) => {
          if (res.data.status === 200) {
            Swal.fire('Success',res.data.msg,'success')
            setInputField({
              name: "",
              message: "",
              email: "",
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
  
	return ( <>
          <div className="contact-header" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="contact-header-wrapper">
                <h1>Contact With Us</h1>
                <p>Our team wants to learn more about your project. Take some time to schedule a call and connect with us today. At Nftconstructer, we always respect your wishes and privacy and never share information with anyone or project details with people not employed by the company. Your security is our top priority.</p>
            </div>
            </div>  
        <div className='contact'>
        <div className='container'>
            <div className='contact-wrapper'>
                <div className='contact-left' data-aos="fade-up"
            data-aos-duration="1000">
                
                   <h2 className="contact-title">Lets talk with our awesome team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                
                    <div className='contact-contect'>
                        <div className='contact-item'>
                            <img src="/assets/contact/call.png" alt="" />	
                            <div className='contact-items'>
                                <span>call</span>
                                <p>+13025977087</p>
                            </div>
                        </div>
                        <div className='contact-item'>
                            <img src="/assets/contact/email.png" alt="" />	
                            <div className='contact-items'>
                                <span>Email</span>
                                <p>support@musicpromotiontoday.com</p>
                            </div>
                        </div>
                        <div className='contact-item'>
                            <img src="/assets/contact/location.png" alt="" />	
                            <div className='contact-items'>
                                <span>Location</span>
                                <p>Address  30N Gould St sheridan WY 82801,United States</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-right' data-aos="fade-up"
            data-aos-duration="1000">
                <form className="contact-form" onSubmit={allInfoSubmit}>
                    <div className="form-field">
                        <label htmlFor="name">Your Name</label>
                        <div className="input-field">
                            <div className="input-img">
                                <img src="/assets/contact/user.png"/>
                            </div>
                            <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={inputsHandler} 
                            value={inputField.name}
                            placeholder="Full name here"
                        />
                        </div>
                        <small style={{ color:'red' }}>{inputField.error_log.name}</small>
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Your mail</label>
                        <div className="input-field">
                            <div className="input-img">
                                <img src="/assets/contact/email.png"/>
                            </div>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={inputsHandler} 
                            value={inputField.email}
                            placeholder="Your email address"
                        />
                        </div>
                        <small style={{ color:'red' }}>{inputField.error_log.email}</small>
                    </div>
                    <div className="form-field">
                        <label htmlFor="name">Message</label>
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Type your message here"
                            onChange={inputsHandler} 
                            value={inputField.message}
                        />
                        <small style={{ color:'red' }}>{inputField.error_log.message}</small>
                    </div>
                    {/* <button className="form-btn" type="submit">Send message</button> */}
                    <button type="submit" className="form-btn">Send message</button>
                 </form>
                </div>
            </div>
        </div>
    </div>
    </>
	);
};

Contact.layout = AppLayout;
Contact.title = "Contact";

export default Contact;


