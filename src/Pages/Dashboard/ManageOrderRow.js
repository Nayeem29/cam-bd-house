import React from 'react';

const ManageOrderRow = ({ order, index, setDeleteOrder }) => {
  const { userName, productName, paid } = order;
  // console.log(order);
  return (
    <tr className='text-center'>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{productName}</td>
      <td>
        {paid ? <button class="btn btn-xs btn-primary">Paid</button>
          : <button class="btn btn-xs btn-primary">Unpaid</button>}
      </td>
      <td>
        <label onClick={() => setDeleteOrder(order)} htmlFor="order-delete-modal" class="btn btn-error">Delete</label>
      </td>
    </tr>
  );
};

export default ManageOrderRow;