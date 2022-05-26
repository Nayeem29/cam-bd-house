import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedComponnets/Loading';
import CustomerReview from './CustomerReview';

const HomeReview = () => {
  const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://serene-caverns-13504.herokuapp.com/review').then(res => res.json()));

  if (isLoading) {
    return <Loading />
  }
  // refetch();
  return (
    <div className='mt-28'>
      <h1 className='text-3xl ml-5 font-semibold text-[#525252]'>What Our Customers are saying</h1>
      <hr className='h-2 mx-5 mt-2' />
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        {
          reviews?.map((review) => <CustomerReview
            key={review._id}
            review={review}
          ></CustomerReview>)
        }
      </div>
    </div>
  );
};

export default HomeReview;