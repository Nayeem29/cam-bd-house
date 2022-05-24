import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../SharedComponnets/Loading';

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const { data: product, isLoading, refetch } = useQuery(['camera', id], () => fetch(`http://localhost:5000/camera/${id}`)
    .then(res => res.json()))
  const [quantity, setQuantity] = useState(product?.minOrderQuantity || 0);
  const [error, setError] = useState(false);
  if (isLoading) {
    return <Loading />
  }
  refetch()
  const { name, image, description, minOrderQuantity, available, price } = product;
  let quantityError;
  const handleQuantityInput = (e) => {

    setQuantity(e.target.value || e.defaultValue);
    if (quantity > available || quantity < minOrderQuantity) {
      setError(true);
      quantityError = <p>Invalid Quantity given</p>
    } else {
      setError(false);
    }
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = user?.email;
    // const orderQuantity = e.target.quantity.value;
    const purchaseInfo = {
      userName: username,
      userEmail: email,
      productName: name,
      productId: id,
      totalPrice: quantity * price,
      quantity
    }
    // console.log(purchaseInfo);
    fetch('http://localhost:5000/purchaseinfo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(purchaseInfo)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Your Order is placed, Please complete the payment');
        }
      })

  }

  return (
    <div className="hero h-fit bg-base-200">
      <div className="hero-content ml-5 flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
        <div className='ml-12'>
          <h1 className="text-5xl font-bold my-5">{name}</h1>
          <p className="text-3xl font-bold my-5">Price: ${price}</p>
          <form onSubmit={handleSubmitForm}>
            <div className="form-control w-full max-w-xs">
              <input type="text" placeholder="Your Name" name='username' className="input mb-5 input-bordered w-full max-w-xs" />
              <input type="text" value={user?.email} className="input mb-5 text-gray-500 input-bordered w-full max-w-xs" />
              <label className="label">
                <span className="label-text font-semibold">We don't take less than {minOrderQuantity} order for this item</span>
              </label>
              <input onChange={(event) => handleQuantityInput(event)}
                defaultValue={minOrderQuantity} type="number" name='quantity' className="input input-bordered w-full max-w-xs" />
              {error &&
                <label className="label">
                  <span className="label-text-alt text-red-600">{quantityError}</span>
                </label>}
              <p className='text-2xl font-semibold my-5'>Total Price: ${quantity * price}</p>
              <input type="text" placeholder="Your Address" className="input mb-5 input-bordered w-full max-w-xs" />
              <input className="btn btn-primary"
                disabled={quantity < minOrderQuantity || quantity > available}
                type='submit' value='Place Order' />
            </div>
          </form>

          <div className='my-12 mr-12'>
            <h1 className='text-2xl font-semibol'>Description:</h1>
            <div className="divider my-0"></div>
            <p className="py-6 mt-0 pt-0">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;