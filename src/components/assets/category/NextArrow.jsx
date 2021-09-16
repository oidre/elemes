import React from 'react';
import RightArrowSvg from '@/components/assets/category/RightArrowSvg';

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      className="flex items-center space-x-2 pr-3 pl-5 py-2 bg-primary hover:bg-primary-light text-sm font-medium rounded-full text-white outline-none transform transition-transform"
      onClick={onClick}
    >
      <span>NEXT</span>
      <div className="py-2 px-3 bg-white rounded-full">
        <RightArrowSvg />
      </div>
    </button>
  );
}

export default NextArrow;
