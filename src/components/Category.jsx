import React from 'react';
import HeaderSection from '@/components/HeaderSection';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CupcakeSvg from '@/components/assets/category/CupcakeSvg';
import PizzaSvg from '@/components/assets/category/PizzaSvg';
import KebabSvg from '@/components/assets/category/KebabSvg';
import SalmonSvg from '@/components/assets/category/SalmonSvg';
import DoughnutSvg from '@/components/assets/category/DoughnutSvg';
import Card from '@/components/category/Card';
import LeftArrowSvg from '@/components/assets/category/LeftArrowSvg';
import RightArrowSvg from '@/components/assets/category/RightArrowSvg';

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function ButtonGroup({ next, previous, goToSlide, ...rest }) {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="hidden md:flex md:space-x-2 absolute right-0 bottom-0 carousel-button-group">
      <button
        type="button"
        className="flex items-center space-x-2 pl-3 pr-5 py-1 bg-primary hover:bg-primary-light text-sm font-medium rounded-full text-white outline-none transform transition-transform"
        onClick={() => previous()}
      >
        <div className="py-2 px-3 bg-white rounded-full">
          <LeftArrowSvg />
        </div>
        <span>PREV</span>
      </button>
      <button
        type="button"
        className="flex items-center space-x-2 pr-3 pl-5 py-2 bg-primary hover:bg-primary-light text-sm font-medium rounded-full text-white outline-none transform transition-transform"
        onClick={() => next()}
      >
        <span>NEXT</span>
        <div className="py-2 px-3 bg-white rounded-full">
          <RightArrowSvg />
        </div>
      </button>
    </div>
  );
}

function Category() {
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
  ];
  return (
    <div className="mt-24">
      <HeaderSection title="Browser Our Category" subtitle="Receipt" />
      <Carousel
        responsive={responsive}
        infinite
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        className="md:h-80 h-56"
      >
        {categories.map((category) => (
          <Card
            key={category.id}
            image={category.image}
            title={category.title}
            count={category.count}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Category;
