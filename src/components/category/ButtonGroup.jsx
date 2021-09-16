import React from 'react';
import LeftArrowSvg from '@/components/assets/category/LeftArrowSvg';
import RightArrowSvg from '@/components/assets/category/RightArrowSvg';

function ButtonGroup() {
  return function ButtonGroup({ next, previous, ...rest }) {
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
  };
}

export default ButtonGroup;
