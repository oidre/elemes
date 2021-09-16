import React from 'react';
import LeftArrowSvg from '@/components/assets/category/LeftArrowSvg';

function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      className="flex items-center space-x-2 pl-3 pr-5 py-1 bg-primary hover:bg-primary-light text-sm font-medium rounded-full text-white outline-none transform transition-transform"
      onClick={onClick}
    >
      <div className="py-2 px-3 bg-white rounded-full">
        <LeftArrowSvg />
      </div>
      <span>PREV</span>
    </button>
  );
}

export default PrevArrow;
