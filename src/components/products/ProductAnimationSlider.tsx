'use client';

import { Button } from 'antd';
import React, { useState } from 'react';
import Slider from 'react-slick';

import ProductCard from './ProductCard';

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
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
  {
    img: '',
  },
];

function ProductAnimationSlider(props: any) {
  const { title, categories, isPrice } = props;
  const [selectedCategory, setSelectedCategory] = useState<any>(0);

  return (
    <div className="py-10">
      <h2 className="font-bold text-2xl">{title}</h2>
      <div className="flex gap-2 py-4">
        {categories?.map((category: any, index: number) => (
          <Button
            key={index}
            type={index === selectedCategory ? 'primary' : 'default'}
            onClick={() => setSelectedCategory(index)}
          >
            {category}
          </Button>
        ))}
      </div>
      <Slider {...settings}>
        {products?.map((_, index) => (
          <div className="" key={index}>
            <ProductCard
              img="https://kccvietnam.com/thumbs/280x250x1/upload/product/list2-5200.jpg"
              name="Sơn Lót Epoxy Keraseal PS50"
              isPrice={isPrice}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductAnimationSlider;
