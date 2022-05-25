import React from 'react';

const OrderRow = ({ index, order }) => {
  const { productName, userEmail, totalPrice } = order;

  return (

    <tr className='text-center'>
      <th>{index + 1}</th>
      <td>{userEmail}</td>
      <td>{productName}</td>
      <td>${totalPrice}</td>
      <td><button class="btn btn-ghost">Pending</button>
      </td>
      <td><button class="btn btn-ghost">Delete</button>
      </td>
    </tr>

  );
};

export default OrderRow;