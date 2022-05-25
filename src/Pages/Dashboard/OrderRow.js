import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ index, order }) => {
  const { productName, userEmail, totalPrice, _id } = order;

  return (

    <tr className='text-center'>
      <th>{index + 1}</th>
      <td>{userEmail}</td>
      <td>{productName}</td>
      <td>${totalPrice}</td>
      <td>
        {order.paid ? <button class="btn btn-xs btn-disabled">Paid</button>
          : <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-xs btn-primary">Checkout</button></Link>}
      </td>
      <td><button class="btn btn-ghost">Delete</button>
      </td>
    </tr>

  );
};

export default OrderRow;