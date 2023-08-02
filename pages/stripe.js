import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/stripe/CheckoutForm';
import '../components/stripe/script.js'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51L3bi8F2EaVIlcpBUq2As6xjGYv9mOTnuTVSBpiD2y8TF6ZLTL60FXyBK03RIbOGT7M1yrbO4J32V1aU1bSQXlYI00L14EHGL7");

const successMessage = () => {
  return (
    <div className="success-msg">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
      </svg>
      <div className="title">Payment Successful</div>
    </div>
  )
}



function Stripe() {
    const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h4>Stripe Integration - <a href="https://www.cluemediator.com/" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h4>
      </div>

      <div className="row s-box">
        {paymentCompleted ? successMessage() : <React.Fragment>
          <div className="col-md-5 order-md-2 mb-4">
            joney
          </div>
          <div className="col-md-7 order-md-1">
            <Elements stripe={stripePromise}>
              <CheckoutForm amount={2000} setPaymentCompleted={setPaymentCompleted} />
            </Elements>
          </div>
        </React.Fragment>}
      </div>

    </div>
  );
}

export default Stripe;