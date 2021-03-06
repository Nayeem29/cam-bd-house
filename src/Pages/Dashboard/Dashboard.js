import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-dashboard" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        {/* <h1 className='text-3xl text-center font-bold'>My Dashboard:</h1> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-dashboard" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashboard'>My Profile</Link></li>
          {!admin &&
            <>
              <li><Link to='/dashboard/myorders'>My Orders</Link></li>
              <li><Link to='/dashboard/addreview'>Add Review</Link></li>
            </>
          }
          {
            admin &&
            <>
              <li><Link to='/dashboard/admin'>Make Admin</Link></li>
              <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
              <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
              <li><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
            </>
          }
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;