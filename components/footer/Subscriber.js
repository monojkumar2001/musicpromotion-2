import React,{useState} from "react";
import axios from "axios";

const Subscriber = () => {
    const [inputField, setInputField] = useState({
        email: "",
        success:"",
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
        formData.append("email", inputField.email);
        axios
          // .post("https://api.nftconstructer.com/api/demo", formData)
          .post("api/subscriber", formData)
          .then((res) => {
            if (res.data.status === 200) {
              setInputField({
                email: "",
                success: res.data.msg,
                error_log : []
              });
              // push('/v1/thankYou');
            }else{
              setInputField( {
                ...inputField,
                error_log : res.data.data
              })
            }
          });
      };

  return (
    <div>
        <h4 className="footer-link-title">Get In Touch</h4>
        <p>
            Get the ideas, tools and tips you need to grow your sound
            straight to your inbox.
        </p>

        <div className="subscribe-form">
            <form onSubmit={allInfoSubmit}>
                <div className="input-group">
                    <input
                        name="email"
                        type="email"
                        onChange={inputsHandler}
                        value={inputField.email}
                        placeholder="Enter Your Email"
                        className="subscribe-input"
                    />
                   
                    <button type="submit" className="submit-button">
                        Subscribe
                    </button>
                </div>
                
            </form>
        </div>
        <small style={{ color:'red' }}>{inputField.error_log.email}</small>
        <small style={{ color:'green' }}>{inputField.success}</small>
    </div>
  )
}

export default Subscriber