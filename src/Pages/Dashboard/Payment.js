import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../SharedComponnets/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3BdqJmBQp2aGy4ILSFzHhGVbP2fWJf2q3WZ11YTRouTQR50dxSBZEkoYPs2bQwtu2dUZO23SrM8dxnO3G9m0XR00EWbEFVbh');
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/purchase/${id}`;
  const { data: order, isLoading, refetch } = useQuery(['orders', id], () => fetch(url, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='flex items-center justify-center'>
      <div className='mt-24'>
        <div class="card w-full max-w-md bg-base-100 shadow-xl mb-12">
          <div class="card-body">
            <h2 class="card-title">Hello {order.userName},</h2>
            <h2 class="card-title">Pay for {order.productName}</h2>
            <p>Your product will be delivered within 7-10 working days!!</p>
            <p>Please pay: <span className='text-xl font-bold'> ${order.totalPrice}</span></p>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mb-5">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;