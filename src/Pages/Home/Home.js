import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CamParts from './CamParts';
import HomeReview from './HomeReview';

const Home = () => {
  return (
    <div>
      <Banner />
      <CamParts />
      <BusinessSummary />
      <HomeReview />
    </div>
  );
};

export default Home;