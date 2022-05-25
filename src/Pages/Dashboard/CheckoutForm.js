import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const { totalPrice, userName, userEmail, _id } = order;

  useEffect(() => {

    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ totalPrice })
    }).then(res => res.json()
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
      }))
  }, [totalPrice])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      setSuccess('');
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('[PaymentMethod]', paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail
          },
        },
      },
    );

    if (intentError) {
      setCardError(intentError?.message)
      setProcessing(false);
    } else {
      setCardError('');
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess('Congrats! Your Payment is Completed.');
      const payment = {
        order: _id,
        transactionId: paymentIntent.id
      }
      fetch(`http://localhost:5000/purchaseinfo/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      }).then(res => res.json())
        .then(data => {
          setProcessing(false)
          console.log(data);
        })
    }

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-xs btn-primary mt-3' type="submit" disabled={!stripe || !clientSecret || success}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red-600 text-sm'>{cardError}</p>
      }
      {success && <><p className='text-green-600 text-sm'>{success}</p>
        <p className='text-green-600 text-sm'>Your transaction id: {transactionId}</p>
      </>}

    </>
  );
};

export default CheckoutForm;