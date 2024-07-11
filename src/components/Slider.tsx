'use client';

import React from 'react';
import Slider from 'react-slick';

function SliderSlick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        <div className="">
          <img
            src="/assets/img/slide/slider-1.jpg"
            className="w-full h-[50vh]"
          />
        </div>
        <div>
          <img
            src="/assets/img/slide/slider-2.jpg"
            className="w-full h-[50vh]"
          />
        </div>
        <div>
          <img
            src="/assets/img/slide/slider-3.jpg"
            className="w-full h-[50vh]"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderSlick;
