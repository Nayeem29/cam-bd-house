import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/SharedComponnets/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Pages/SharedComponnets/Footer';
import Signup from './Pages/Login/Signup';
import Signin from './Pages/Login/Signin';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='/dashboard/myorders' element={<MyOrders />}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment />}></Route>
          <Route path='/dashboard/addreview' element={<AddReview />}></Route>
          <Route path='/dashboard/admin' element={
            <RequireAdmin><MakeAdmin /></RequireAdmin>
          }></Route>
          <Route path='/dashboard/addproduct' element={
            <RequireAdmin><AddProduct /></RequireAdmin>
          }></Route>
          <Route path='/dashboard/manageproduct' element={
            <RequireAdmin><ManageProducts /></RequireAdmin>
          }></Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
