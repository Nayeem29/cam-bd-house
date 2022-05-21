import React, { useEffect, useState } from 'react';
import Products from './Products';

const CamParts = () => {
  const [camparts, setCamparts] = useState([]);
  useEffect(() => {
    fetch('parts.json')
      .then(res => res.json())
      .then(data => setCamparts(data))
  }, [])
  return (
    <div className='mb-5 ml-2 lg:mx-5'>
      <h1 className='text-4xl font-bold text-[#525252] mb-12'>Our Featured Products</h1>
      <hr className=' h-2 w-full' />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
          camparts.map(cam => <Products
            key={cam._id}
            cam={cam}
          ></Products>)
        }
      </div>
    </div>
  );
};

export default CamParts;