import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderRow from './OrderRow';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/purchaseinfo?userEmail=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return res.json()
        })
        .then(data => {
          setOrders(data)
        })
    }
  }, [user, navigate])
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr className='text-center'>
              <th></th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
              orders.map((order, index) => <OrderRow
                key={order._id}
                index={index}
                order={order}
              ></OrderRow>
              )}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;