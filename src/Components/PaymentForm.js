import React, { useState, useEffect } from 'react';
import './PaymentForm.css'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm  from './checkoutForm';
import axios from 'axios';

const stripePromise = loadStripe("pk_test_51KsUhHCHeGImMMcj5zEigiKz3ereibGcZtMaWeq3u1IOptHRV1SahqMi2rjMw6yjO1WtmH0RExvUytT8lo9UN4fH00b4j5pfna");

const Paymentform = ({ price }) => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios.post('https://localhost:7056/api/Payment/create-intent')
      .then((res) => {
        setClientSecret(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='payment-form-container'>
      <div className='title-container'>
          <span className='title'>Payment Form</span>
          <span className='subtitle'>Please complete with your card details</span>
      </div>

      <div style={{position: 'absolute', top: '50%', transform: 'translate(0, -50%)'}}>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        )}
      </div>
    </div>
  );
}

export default Paymentform;
