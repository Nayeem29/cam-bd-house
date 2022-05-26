import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedComponnets/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  const { data: orders, isLoading, refetch } = useQuery('purchaseinfo', () => fetch('http://localhost:5000/purchaseinfo', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => {
    console.log(res);
    return res.json()
  }))
  if (isLoading) {
    return <Loading />
  }
  if (orders) {
    console.log(orders);
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full mt-4">

          <thead>
            <tr className='text-center'>
              <th></th>
              <th>User Name</th>
              <th>Product Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              orders?.map((order, index) => <ManageOrderRow
                key={order._id}
                index={index}
                order={order}
                setDeleteOrder={setDeleteOrder}
                refetch={refetch}
              ></ManageOrderRow>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;