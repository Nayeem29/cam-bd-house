import React from 'react';

const Portfolio = () => {
  return (
    <div className='min-h-screen'>

      <div class="lg:flex mt-12">
        <div class="card w-96 px-3 bg-base-100 shadow-xl ml-12 py-20">
          <h2 class="text-4xl font-bold">Nayeem Hasan</h2>
          <p className='my-3'>Email: nayeembracu29@gmail.com</p>
          <p className='font-bold'>React Web Developer</p>
        </div>
        <div class="card w-full lg:w-2/3 bg-base-100 shadow-xl px-12 mx-12">
          <div class="flex flex-col items-start justify-between">
            <div className='flex items-center justify-between'>
              <div className='mr-12'>
                <h2 className='text-3xl font-bold'>Education:</h2>
                <div class="divider w-full my-0"></div>
                <p className='text-2xl font-bold'>BRAC University</p>
                <p className='text-2xl font-semibold'>Computer Science</p>
                <small>Graduated in 2019</small>
              </div>
              <div className='mt-12'>
                <p className='text-2xl font-bold'>Adamjee Cantonment College</p>
                <p className='text-2xl font-semibold'> Science</p>
                <small>Period: 2011-2013</small>
              </div>
            </div>
            <div className='my-12'>
              <h2 className='text-3xl font-bold'>Experience:</h2>
              <div class="divider"></div>
              <p className='text-2xl font-bold'>Executive in ServicEngine BPO</p>
              <small>Working Period: 1/11/2018 - 20/06/2021</small>
            </div>
          </div>
        </div>
      </div>
      <div class="card w-full px-3 bg-base-100 shadow-xl mt-12 ml-12 mb-16 py-12">
        <h2 class="text-4xl font-bold">Projects:</h2>
        <div class="divider"></div>
        <div class="overflow-x-auto">
          <table class="table w-full">

            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Live link</th>
                <th>Git Hub Link</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th>1</th>
                <td>T-Glass Store</td>
                <td>
                  <a href='https://react-t-glass-store.netlify.app/' target='_blank' rel="noreferrer noopener" className="link"> https://react-t-glass-store.netlify.app/</a>
                </td>
                <td>
                  <a href='https://github.com/programming-hero-web-course-4/product-analysis-website-Nayeem29' target='_blank' rel="noreferrer noopener" className="link"> https://github.com/programming-hero-web-course-4/product-analysis-website-Nayeem29
                  </a>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Walk Visa Consultant</td>
                <td>
                  <a href='https://walk-visa-consultancy.web.app/' target='_blank' rel="noreferrer noopener" className="link"> https://walk-visa-consultancy.web.app/</a>
                </td>
                <td>
                  <a href='https://github.com/programming-hero-web-course-4/independent-service-provider-Nayeem29' target='_blank' rel="noreferrer noopener" className="link"> https://github.com/programming-hero-web-course-4/independent-service-provider-Nayeem29
                  </a>
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td>Perfumers House</td>
                <td>
                  <a href='https://perfumers-warehouse.web.app/' target='_blank' rel="noreferrer noopener" className="link">https://perfumers-warehouse.web.app/</a>
                </td>
                <td>
                  <a href='https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-Nayeem29' target='_blank' rel="noreferrer noopener" className="link"> https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-Nayeem29
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;