'use client';

import React from 'react';
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

function ProductSlider(props: any) {
  const { isPrice } = props;

  return (
    <div className="py-0">
      <Slider {...settings}>
        <div className="">
          <ProductCard
            img="https://kccvietnam.com/thumbs/260x185x1/upload/product/son-epoxy-kccvietnamcom-et5660-7703.jpg"
            name="Sơn Lót Epoxy Keraseal PS50"
            isPrice={isPrice}
          />
        </div>
        <div>
          <ProductCard
            img="https://kccvietnam.com/thumbs/260x185x1/upload/product/son-epoxy-kccvietnamcom-et5660-7703.jpg"
            name="Sơn Epoxy Hệ Lăn Keraseal ADO20"
            isPrice={isPrice}
          />
        </div>
        <div>
          <ProductCard
            img="https://kccvietnam.com/thumbs/260x185x1/upload/product/son-epoxy-kccvietnamcom-et5660-7703.jpg"
            name="Sơn Epoxy Keraseal ADO121 "
            isPrice={isPrice}
          />
        </div>
        <div>
          <ProductCard
            img="https://kccvietnam.com/thumbs/260x185x1/upload/product/son-epoxy-kccvietnamcom-et5660-7703.jpg"
            name="Sơn Epoxy Hệ Lăn Keraseal ADO20"
            isPrice={isPrice}
          />
        </div>

        <div className="">
          <ProductCard
            img="https://kccvietnam.com/thumbs/260x185x1/upload/product/son-epoxy-kccvietnamcom-et5660-7703.jpg"
            name="Sơn Epoxy Hệ Lăn Keraseal ADO20"
            isPrice={isPrice}
          />
        </div>
        <div>
          <ProductCard
            img="https://kccvietnam.com/thumbs/260x185x1/upload/product/son-epoxy-kccvietnamcom-et5660-7703.jpg"
            name="Sơn Epoxy Hệ Lăn Keraseal ADO20"
            isPrice={isPrice}
          />
        </div>
      </Slider>
    </div>
  );
}

export default ProductSlider;
