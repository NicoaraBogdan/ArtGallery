import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Paymentform from './PaymentForm';

const PUBLIC_KEY = "pk_test_51KsUhHCHeGImMMcj5zEigiKz3ereibGcZtMaWeq3u1IOptHRV1SahqMi2rjMw6yjO1WtmH0RExvUytT8lo9UN4fH00b4j5pfna";

const stripePromise = loadStripe(PUBLIC_KEY);

const Stripecontainer = ({ price }) => {
    return (
            <Elements stripe={stripePromise}> 
                <Paymentform price={price}/>
            </Elements>
    );
}

export default Stripecontainer;
