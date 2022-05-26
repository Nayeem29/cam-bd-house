import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({ setDeleteProduct, deleteProduct, refetch }) => {

  const { name, _id } = deleteProduct;
  const handleDeleteProduct = () => {
    fetch(`http://localhost:5000/camera/${_id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success(`${name} has been deleted`)
          refetch();
          setDeleteProduct(null)
        } else {
          toast.error('Something went wrong! Please try again.')
        }
      })
  }
  return (
    <div>
      <input type="checkbox" id="product-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure you want to delete {name}?</h3>
          {/* <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
          <div class="modal-action">
            <button onClick={handleDeleteProduct} class="btn btn-error">Delete</button>
            <label htmlFor="product-delete-modal" class="btn">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteModal;