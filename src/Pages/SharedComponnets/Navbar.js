import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const MenuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/portfolio'>Portfolio</Link></li>
    {
      user && <li><Link to='/dashboard'>Dashboard</Link></li>
    }
    <li><Link to='/blogs'>Blogs</Link></li>
    {
      user && <li className='flex items-center'>{user.displayName}</li>
    }
  </>
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/signin')
  }
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-36">
            {
              MenuItems
            }
            <li tabIndex="0">
              {user ?

                <button onClick={logOut} className="btn btn-ghost">Logout</button>

                :
                <>
                  <Link to='/signin' className="justify-between">
                    Login
                  </Link>
                </>
              }
            </li>
          </ul>
        </div>
        <Link to='/home' className="btn btn-ghost normal-case text-xl">CAM BD HOUSE</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {
            MenuItems
          }
          <li tabIndex="0">
            {user ?
              <button onClick={logOut} className="btn btn-ghost">Logout</button>
              :
              <>
                <Link to='/signin' className="justify-between">
                  Login
                </Link>
              </>
            }
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <label tabIndex='1' htmlFor="my-dashboard" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;