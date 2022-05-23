import React from 'react';

const Products = ({ cam, handleOrder }) => {
  const { name, image, description, minOrderQuantity, available, price, _id } = cam;
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-2xl text-[#525252] font-bold mb-3">{name}</h1>
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
        </div>
        <div className='align-middle'>

          <div className='sm:ml-2 ml-0'>
            <h1 className="text-base font-normal">Min Order:
              <span className='text-xl font-medium'> {minOrderQuantity}</span>
            </h1>
            <h1 className="text-base font-normal">Available:
              <span className='text-xl font-medium'> {available}</span>
            </h1>
            <h1 className="text-base font-normal">
              Price: <span className='text-xl font-medium'>${price} per unit</span>
            </h1>
          </div>
          <p className="py-6 text-justify">
            {description.length > 100 ? description.slice(0, 100) + '...' : description}
          </p>
          <button onClick={() => handleOrder(_id)}
            className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;