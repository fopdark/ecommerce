'use client';

import React from 'react';
import Slider from 'react-slick';

import ProjectNew from './ProjectNew';

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const products = [
  {
    name: 'Dự án A',
    img: '/assets/img/epoxy/1.jpg',
    location: 'Vũng Tàu',
  },
  {
    name: 'Dự án B',
    img: '/assets/img/epoxy/2.jpg',
    location: 'Đà Lạt',
  },
  {
    name: 'Dự án C',
    img: '/assets/img/epoxy/3.jpg',
    location: 'Bảo Lộc',
  },
  {
    name: 'Dự án D',
    img: '/assets/img/epoxy/4.jpg',
    location: 'Bình Dương',
  },
  {
    name: 'Dự án E',
    img: '/assets/img/epoxy/5.jpg',
    location: 'Hồ Chí Minh',
  },
  {
    name: 'Dự án F',
    img: '/assets/img/epoxy/6.jpg',
    location: 'Hà Nội',
  },
  {
    name: 'Dự án G',
    img: '/assets/img/epoxy/7.jpg',
    location: 'Đà Nẵng',
  },
];

function ProjectSlider() {
  return (
    <div className="py-0">
      <Slider {...settings}>
        {products?.map((product, index) => (
          <div className="px-[1px]" key={index}>
            <ProjectNew
              img={product?.img}
              location={product?.location}
              name={product?.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
