import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/SharedComponnets/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Pages/SharedComponnets/Footer';
import Signup from './Pages/Login/Signup';
import Signin from './Pages/Login/Signin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
