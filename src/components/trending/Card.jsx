import React from 'react';
import Star from '@/components/assets/Star';
import StarEmpty from '@/components/assets/StarEmpty';
import classNames from 'classnames';

function lowercase(text) {
  return String(text).toLowerCase();
}

function Card({ imageUrl, title, category, rating }) {
  let empty = 5 - +rating;
  return (
    <div
      className={classNames(
        { 'bg-category-2': lowercase(category) == 'pizza' },
        { 'bg-category-3': lowercase(category) == 'kebab' },
        { 'bg-category-4': lowercase(category) == 'salmon' },
        { 'bg-category-1': lowercase(category) == 'cupcake' },
        { 'bg-category-5': lowercase(category) == 'doughnut' },
        'hover:bg-card-pattern bg-blend-soft-light bg-contain px-4 py-8 space-y-5 rounded-lg shadow-sm',
      )}
    >
      <img src={imageUrl} className="h-20 w-20 rounded-md" />
      <div className="space-y-1">
        <div className="font-medium">{title}</div>
        <div className="text-primary text-sm">{category}</div>
        <div className="flex">
          {[...Array(+rating)].map((v, idx) => (
            <Star key={idx} />
          ))}
          {[...Array(empty)].map((v, idx) => (
            <StarEmpty key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
