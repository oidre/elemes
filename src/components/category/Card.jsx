import React from 'react';
import classNames from 'classnames';

function lowercase(text) {
  return String(text).toLowerCase();
}

function Card({ image, title, count }) {
  return (
    <div
      className={classNames(
        { 'bg-category-2': lowercase(title) == 'pizza' },
        { 'bg-category-3': lowercase(title) == 'kebab' },
        { 'bg-category-4': lowercase(title) == 'salmon' },
        { 'bg-category-1': lowercase(title) == 'cupcake' },
        { 'bg-category-5': lowercase(title) == 'doughnut' },
        'hover:bg-card-pattern bg-blend-soft-light bg-contain px-4 py-8 space-y-5 rounded-lg shadow-sm flex flex-col justify-center items-center mr-4 hover:scale-y-110 transform transition-all',
      )}
    >
      {image}
      <div className="space-y-1 flex flex-col items-center">
        <div className="font-medium">{title}</div>
        <div className="text-sm">{count} items</div>
      </div>
    </div>
  );
}

export default Card;
