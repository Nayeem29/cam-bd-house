import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';

const CustomerReview = ({ review }) => {
  const { image, name, comments, rating } = review;
  const star = Array(rating).fill(0);
  // console.log(star);
  return (
    <div className="card-body mx-3">
      <div className="card bg-base-100 shadow-xl">
        <div className="w-20 h-24 rounded-full flex items-center justify-between my-3">
          <img className='ml-3' src={image} alt='' />
          <h2 className="card-title ml-10">{name}</h2>
        </div>
        <div className="card-actions justify-end">
          <p className='text-center flex justify-center'>{
            star.map((s, index) =>
              <FaStar key={index} />)
          }</p>
        </div>
        <p className='text-justify mx-5 my-2'>
          <FaQuoteLeft />
          {comments}
        </p>
      </div>
    </div>
  );
};

export default CustomerReview;