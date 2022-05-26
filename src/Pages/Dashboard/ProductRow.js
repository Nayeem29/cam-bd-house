import React from 'react';

const ProductRow = ({ product, index, setDeleteProduct }) => {
  const { name, available, price } = product

  return (
    <tr className='text-center'>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>${price}</td>
      <td>{available}</td>
      <td>
        <label onClick={() => setDeleteProduct(product)} htmlFor="product-delete-modal" class="btn btn-error">Delete</label>
      </td>
    </tr>
  );
};

export default ProductRow;