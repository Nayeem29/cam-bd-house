import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedComponnets/Loading';
import OrderRow from './OrderRow';
import UserDeleteModal from './UserDeleteModal';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [userModal, setUserModal] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/purchase?userEmail=${user.email}`, {
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
  }, [user, navigate, userModal])
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full mt-4">

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
                setUserModal={setUserModal}
              ></OrderRow>
              )}

          </tbody>
        </table>
      </div>
      {
        userModal && <UserDeleteModal
          userModal={userModal}
          setUserModal={setUserModal}
        ></UserDeleteModal>
      }
    </div>
  );
};

export default MyOrders;