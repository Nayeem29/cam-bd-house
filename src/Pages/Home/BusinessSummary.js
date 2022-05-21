import React from 'react';
import help from '../../Assests/need-help.jpg';
import app from '../../Assests/download-app.png';
import service from '../../Assests/b2b service.png';
import loan from '../../Assests/business-loan-icon.webp';

const BusinessSummary = () => {
  return (
    <div className='ml-5 mt-24'>
      <h1 className='text-3xl font-semibold text-[#525252]'>Learn More About
        <span className='text-4xl font-bold'> CAM BD HOUSE</span>
      </h1>
      <hr className='h-2 mx-12 my-3' />
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>

        <div className="card my-2 card-compact bg-base-100">
          <figure><img src={loan} className='w-1/3' alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title mx-auto font-bold text-3xl">Business Loan</h2>
            <p className='text-lg text-[#525252] '>Get quick and felxible business loan with multiple benefits</p>
          </div>
        </div>
        <div className="card my-2 card-compact bg-base-100">
          <figure><img src={service} className='w-1/3' alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title mx-auto font-bold text-3xl">Dial B2B Service</h2>
            <p className='text-lg text-[#525252] '>Get Suppliers Info on Phone/ SMS/ Email/ Whats App</p>
          </div>
        </div>
        <div className="card my-2 card-compact bg-base-100">
          <figure><img src={help} className='w-1/3' alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title mx-auto font-bold text-3xl">Need Help</h2>
            <p className='text-lg text-[#525252] '>Browse Help topic and Self-Service links</p>
          </div>
        </div>
        <div className="card my-2 card-compact bg-base-100">
          <figure><img src={app} className='w-1/3' alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title mx-auto font-bold text-3xl">Download APP</h2>
            <p className='text-lg text-[#525252] '>Get easy access on Products and Service on the go!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;