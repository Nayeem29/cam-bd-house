import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-dashboard" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h1 className='text-3xl text-center font-bold'>My Dashboard:</h1>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-dashboard" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashboard'>My Profile</Link></li>
          <li><Link to='/dashboard/myorders'>My Orders</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;