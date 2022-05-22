import React from 'react';

const Footer = () => {
  return (
    <div className='mt-20'>
      <footer className="footer p-10 mx-auto">
        <div className='mx-auto'>
          <span className="footer-title">Services</span>
          <p className="p p-hover">Branding</p>
          <p className="p p-hover">Design</p>
          <p className="p p-hover">Marketing</p>
          <p className="p p-hover">Advertisement</p>
        </div>
        <div className='mx-auto'>
          <span className="footer-title">Company</span>
          <p className="p p-hover">About us</p>
          <p className="p p-hover">Contact</p>
          <p className="p p-hover">Jobs</p>
          <p className="p p-hover">Press kit</p>
        </div>
        <div className='mx-auto'>
          <span className="footer-title">Legal</span>
          <p className="p p-hover">Terms of use</p>
          <p className="p p-hover">Privacy policy</p>
          <p className="p p-hover">Cookie policy</p>
        </div>
      </footer>
      <div className='text-center'>
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;