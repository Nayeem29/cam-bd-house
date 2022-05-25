import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedComponnets/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
  const { data: users, isLoading, refetch } = useQuery('allusers', () => fetch('http://localhost:5000/users', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json())
  )
  if (isLoading) {
    return <Loading />
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">

        <thead>
          <tr className='text-center'>
            <th></th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
            users?.map((user, index) => <AdminRow
              key={user._id}
              index={index}
              user={user}
              refetch={refetch}
            ></AdminRow>
            )}

        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;