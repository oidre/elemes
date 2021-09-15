import React from 'react';
import Star from '@/components/assets/Star';
import StarEmpty from '@/components/assets/StarEmpty';

function Card({ title, category, rating }) {
  let empty = 5 - +rating;

  return (
    <div className="prose text-sm md:text-base space-y-1">
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-gray-500 text-sm">{category}</div>
      </div>
      <div className="flex">
        {[...Array(+rating)].map((v, idx) => (
          <Star key={idx} />
        ))}
        {[...Array(empty)].map((v, idx) => (
          <StarEmpty key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Card;
