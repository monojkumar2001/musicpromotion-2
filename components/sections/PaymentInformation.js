import React,{useState,useEffect} from "react";
import Link from "next/link";
import axios from "axios";
import {
  useStripe, useElements,
  CardNumberElement, CardExpiryElement, CardCvcElement
} from '@stripe/react-stripe-js';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.



function PaymentInformation({amount,items}) {

  useEffect(() => {
    console.log(items);
  }, [])
  
const [error, setError] = useState('')

  const [personal, setPersonal] = useState({
    'cardNo' : '',
    'expiryDate' : '',
    'cvc' : '',
    'name' : '',
    'address' : '',
    'city' : '',
    'state' : '',
    'country' : '',
    'postcode' : '',
  });

  const stripe = useStripe();
  const elements = useElements();

  const inputHandle = (e) => {
    setPersonal({
      ...personal,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
   

    const card = elements.getElement(CardNumberElement);
    const result = await stripe.createToken(card);
      if (result.error) {
        setError(result.error.message)
        console.log(result.error.message);
      } else {
        const token = {
          token : result.token.id
        }
        
        let formData = new FormData();
        formData.append('token',JSON.stringify(result.token));
        formData.append('cards',JSON.stringify(personal));
        formData.append('items',JSON.stringify(items));
        formData.append('amount',JSON.stringify(amount));
           axios.post('http://127.0.0.1:8000/api/payment',formData).then(res => {
            console.log(res.data);
            if(res.data.status === 200){
              if(!localStorage.getItem('auth_token')){
                localStorage.setItem('auth_token',res.data.token);
              }
              localStorage.removeItem('service_id');
              localStorage.removeItem('unit_price');
              localStorage.removeItem('service_price');
              localStorage.removeItem('service_image');
              localStorage.removeItem('service_title');
              localStorage.removeItem('slider_value');
              window.location.href = 'http://localhost:3001?token='+res.data.token
            }
          })
         .catch(err => err)
        }
  };


  return (
    <div className="customer-details-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="selected-service-header-left">
          <div className="selected-title">
            <h1>Selected Service</h1>
            <p>
              All transactions are secure and encrypted. Credit card information
              is never stored on our servers.
            </p>
          </div>
        </div>

        <div className="payment-information-credit-card">
          <span>
            <input type="radio" onChange={inputHandle} value="card" id="card" checked/> Credit Card
          </span>
          <img src="assets/oder-details/credit-card-img.svg" alt="" />
        </div>
        <p>Pay Securely using credit card</p>
        {error ?
        <div style={{ backgroundColor:"red",color:"white", marginTop:"20px",textAlign:"center", borderRedius:"15px", padding:"15px", width:"100%", heigint:"100%" }}>{error}</div> : ''
        }
        <div className="customer-form-input-con">
          <div className="customer-from-input">
            <label htmlFor="">Name On Card</label>
            <input type="text" name="name" value={personal.name} onChange={inputHandle}  />
          </div>

          <div className="customer-from-input">
            <div className="col-md-12 mb-3">
              <label htmlFor="cc-number">Card Number</label>
              <CardNumberElement
                id="cc-number"
                className="form-control inputField"
              />
            </div>
          </div>
          <div className="customer-from-input">
            <div className="col-md-12 mb-3">
              <label htmlFor="cc-number">Expiry Date</label>
              <CardExpiryElement
                id="expiry"
                className="form-control inputField"
              />
            </div>
          </div>
          <div className="customer-from-input">
            <div className="col-md-12 mb-3">
              <label htmlFor="cc-number">CVC</label>
                <CardCvcElement
                id="cvc"
                className="form-control inputField"
                
              />
            </div>
          </div>

          {/* <div className="customer-from-input">
            <label htmlFor="">Card No</label>
            <input type="text" name="cardNo" value={personal.cardNo}  onChange={inputHandle}  />
          </div>
          <div className="payment-form-input-item-con">
            <div className="customer-from-input">
              <label htmlFor="">Expiry (MM/YY)</label>
              <input type="text" name="expiryDate" value={personal.expiryDate}  onChange={inputHandle}  placeholder="MM / YY" />
            </div>
            <div className="customer-from-input">
              <label htmlFor="">CVC No</label>
              <input type="text" name="cvc" value={personal.cvc}  onChange={inputHandle}  placeholder="CVC" />
            </div>
          </div> */}
          <div className="customer-from-input">
            <label htmlFor="">Address</label>
            <input type="text" name="address" value={personal.address}  onChange={inputHandle}  />
          </div>
          <div className="payment-form-input-item-con">
            <div className="customer-from-input">
              <label htmlFor="">City</label>
              <input type="text" name="city" value={personal.city}  onChange={inputHandle}  />
            </div>
            <div className="customer-from-input">
              <label htmlFor="">State</label>
              <input type="text" name="state" value={personal.state}  onChange={inputHandle}  />
            </div>
          </div>
          <div className="payment-form-input-item-con">
            <div className="customer-from-input">
              <label htmlFor="">Country</label>
              <input type="text" name="country" value={personal.country}  onChange={inputHandle}  />
            </div>
            <div className="customer-from-input">
              <label htmlFor="">Zip/Postal Code</label>
              <input type="text" name="postcode" value={personal.postcode}  onChange={inputHandle}  />
            </div>
          </div>
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <Link href="/">privacy policy.</Link>
          </p>
          <button className="complete-payment-btn">Complete Payment</button>
        </div>
      </form>
    </div>
  );
}

export default PaymentInformation;
