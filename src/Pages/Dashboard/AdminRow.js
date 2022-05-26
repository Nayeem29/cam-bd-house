import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ index, user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://serene-caverns-13504.herokuapp.com/users/admin/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          toast.success('New Admin is created!!')
          refetch()
        }
      })
  }
  return (
    <tr className='text-center'>
      <th>{index + 1}</th>
      <td>{email}</td>
      {role ?
        <td><button class="btn btn-disabled ">Admin</button>
        </td>
        :
        <td>
          <button onClick={makeAdmin}
            class="btn btn-ghost">Make Admin</button>
        </td>
      }
      <td><button class="btn btn-ghost">Delete</button>
      </td>
    </tr>

  );
};

export default AdminRow;