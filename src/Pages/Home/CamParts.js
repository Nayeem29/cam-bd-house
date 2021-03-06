import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from './Products';

const CamParts = () => {
  const [camparts, setCamparts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('https://serene-caverns-13504.herokuapp.com/camera')
      .then(res => res.json())
      .then(data => {
        setCamparts(data)
        // console.log(camparts);
        // console.log(camparts.slice(-3));
      })
  }, [])
  const handleOrder = (id) => {
    navigate(`/purchase/${id}`);
  }
  return (
    <div className='mb-5 ml-2 lg:mx-5'>
      <h1 className='text-4xl font-bold text-[#525252] mb-12'>Our Featured Products</h1>
      <hr className=' h-2 w-full' />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
          camparts.slice(-4).map(cam => <Products
            key={cam._id}
            cam={cam}
            handleOrder={handleOrder}
          ></Products>)
        }
      </div>
    </div>
  );
};

export default CamParts;