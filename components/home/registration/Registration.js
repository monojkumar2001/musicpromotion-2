import React from "react";
import RegistrationListItem from "./RegistrationListItem";
const Registration = () => {
  return (
    <>
      <div className="registration-input">
        <div className="container">
          <div className="registration_box">
         <RegistrationListItem />
            <div className="registration_right" data-aos="fade-up"
        data-aos-duration="1500">
              <div className="registration_right_box">
                <form action="">
                  <div className="form_email">
                    <label>First Name</label>
                    <input type="text" placeholder="E.g . Buzz" />
                  </div>
                  <div className="form_email">
                    <label>Last Name</label>
                    <input type="text" placeholder="E.g . Aldrin" />
                  </div>
                  <div className="form_email">
                    <label>Email</label>
                    <input type="text" placeholder="E.g . buzz@nasa.gov" />
                  </div>
                  <div className="form_email">
                    <label>Company</label>
                    <input type="text" placeholder="E.g . NASA" />
                  </div>
                  <div className="form_companey form_email">
                    <label>Company Site</label>
                    <select>
                      <option value="">Select One</option>
                      <option value="">Select One</option>
                      <option value="">Select One</option>
                      <option value="">Select One</option>
                    </select>
                  </div>
                  <div className="form_email">
                    <label>Phone Number</label>
                    <input type="text" placeholder="E.g 234 5678" />
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
