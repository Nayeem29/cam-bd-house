import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CamParts from './CamParts';

const Home = () => {
  return (
    <div>
      <Banner />
      <CamParts />
      <BusinessSummary />
    </div>
  );
};

export default Home;