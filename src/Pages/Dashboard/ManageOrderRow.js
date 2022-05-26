import React from 'react';

const ManageOrderRow = ({ order, refetch, index, setDeleteOrder }) => {
  const { userName, productName, paid } = order;
  return (
    <tr className='text-center'>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{productName}</td>
      <td>
        {paid ? <button class="btn btn-xs btn-primary">Paid</button>
          : <button class="btn btn-xs btn-primary">Unpaid</button>}
      </td>
      <td><button class="btn btn-ghost">Delete</button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;