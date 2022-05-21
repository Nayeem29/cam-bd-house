import React from 'react';
import banner1 from '../../Assests/bannerImg.jpg';
import banner2 from '../../Assests/bannerImg1.jpg';
import banner3 from '../../Assests/bannerImg3.jpg';

const Banner = () => {
  return (
    <>
      <h1 className='text-4xl font-bold text-[#525252] text-center mt-6 mb-2'>We provide Top Camera Products</h1>
      <div class="carousel w-full h-screen">
        <div id="slide1" class="carousel-item relative h-3/4 w-full">
          <img src={banner1} class="w-full" alt='' />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative h-3/4 w-full">
          <img src={banner2} class="w-full" alt='' />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative h-3/4 w-full">
          <img src={banner3} class="w-full" alt='' />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </>

  );
};

export default Banner;