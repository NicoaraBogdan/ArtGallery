import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../../Components/checkoutForm";
import "./test.css";
import axios from "axios";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe("pk_test_51KsUhHCHeGImMMcj5zEigiKz3ereibGcZtMaWeq3u1IOptHRV1SahqMi2rjMw6yjO1WtmH0RExvUytT8lo9UN4fH00b4j5pfna");

export default function Test() {
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
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}