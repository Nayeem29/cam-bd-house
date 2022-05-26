import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ index, order, setUserModal }) => {
  const { productName, userEmail, totalPrice, _id } = order;

  return (

    <tr className='text-center'>
      <th>{index + 1}</th>
      <td>{userEmail}</td>
      <td>{productName}</td>
      <td>${totalPrice}</td>
      <td>
        {order.paid ? <button class="btn btn-disabled">Paid</button>
          : <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-primary">Checkout</button></Link>}
      </td>
      <td>
        {!order.paid &&
          <label onClick={() => setUserModal(order)} htmlFor="user-delete-modal" class="btn btn-error">Delete</label>

          // <label onClick={() => setUserModal(order)} htmlFor="user-delete-modal" class="btn disabled">Delete</label>
        }
      </td>
    </tr>

  );
};

export default OrderRow;