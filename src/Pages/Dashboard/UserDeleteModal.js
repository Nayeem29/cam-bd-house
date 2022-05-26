import React from 'react';
import { toast } from 'react-toastify';

const UserDeleteModal = ({ userModal, setUserModal }) => {
  const { productName, _id } = userModal;
  fetch(`https://serene-caverns-13504.herokuapp.com/purchaseinfo/${_id}`, {
    method: 'DELETE',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.deletedCount > 0) {
        toast.success(`${productName} is deleted from your orders`);
        setUserModal(null);
      }
      // else {
      //   toast.error('Something went wrong! Please try again');
      // }

    })
  return (
    <div>
      <input type="checkbox" id="user-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure you want to remove {productName}?</h3>

          <div class="modal-action">
            <button class="btn btn-error">Delete</button>
            <label for="user-delete-modal" class="btn">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeleteModal;