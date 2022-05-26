import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({ setDeleteOrder, deleteOrder, refetch }) => {
  const { _id } = deleteOrder;
  // console.log('modal', deleteOrder);
  const deleteProductOrder = () => {
    fetch(`http://localhost:5000/purchaseinfo/${_id}`, {
      method: 'Delete',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success(`Order No. ${_id} is deleted`)
          refetch();
          setDeleteOrder(null);
        } else {
          toast.error('Something went wrong! Please try again')
        }
      })
  }
  return (
    <div>
      {/* <!-- The button to open modal --> */}


      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="order-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure you want to delete Order No.{_id}</h3>

          <div class="modal-action">
            <button onClick={deleteProductOrder} class="btn btn-error">Delete</button>
            <label for="order-delete-modal" class="btn">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeleteModal;