import React, { useRef } from 'react';
import HeaderSection from '@/components/HeaderSection';
import CupcakeSvg from '@/components/assets/category/CupcakeSvg';
import PizzaSvg from '@/components/assets/category/PizzaSvg';
import KebabSvg from '@/components/assets/category/KebabSvg';
import SalmonSvg from '@/components/assets/category/SalmonSvg';
import DoughnutSvg from '@/components/assets/category/DoughnutSvg';
import Card from '@/components/category/Card';
import NextArrow from '@/components/assets/category/NextArrow';
import PrevArrow from '@/components/assets/category/PrevArrow';
import ButtonGroup from '@/components/category/ButtonGroup';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Category() {
  const sliderRef = useRef(null);
  let categories = [
    {
      id: 1,
      image: <CupcakeSvg />,
      title: 'Cupcake',
      count: 22,
    },
    {
      id: 2,
      image: <PizzaSvg />,
      title: 'Pizza',
      count: 25,
    },
    {
      id: 3,
      image: <KebabSvg />,
      title: 'Kebab',
      count: 12,
    },
    {
      id: 4,
      image: <SalmonSvg />,
      title: 'Salmon',
      count: 22,
    },
    {
      id: 5,
      image: <DoughnutSvg />,
      title: 'Doughnut',
      count: 11,
    },
    {
      id: 6,
      image: <CupcakeSvg />,
      title: 'Cupcake',
      count: 22,
    },
    {
      id: 7,
      image: <PizzaSvg />,
      title: 'Pizza',
      count: 25,
    },
    {
      id: 8,
      image: <KebabSvg />,
      title: 'Kebab',
      count: 12,
    },
    {
      id: 9,
      image: <SalmonSvg />,
      title: 'Salmon',
      count: 22,
    },
    {
      id: 10,
      image: <DoughnutSvg />,
      title: 'Doughnut',
      count: 11,
    },
  ];
  const settings = {
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="mt-24">
      <HeaderSection title="Browser Our Category" subtitle="Receipt" />
      <Slider ref={sliderRef} {...settings}>
        {categories.map((category) => (
          <Card
            key={category.id}
            image={category.image}
            title={category.title}
            count={category.count}
          />
        ))}
      </Slider>
      <div className="hidden md:flex justify-end mt-10 space-x-2">
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  );
}

export default Category;
