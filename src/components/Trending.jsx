import React from 'react';
import Star from '@/components/assets/Star';
import StarEmpty from '@/components/assets/StarEmpty';
import Card from '@/components/trending/Card';
import PrimaryButton from '@/components/PrimaryButton';
import HeaderSection from '@/components/HeaderSection';

function Trending() {
  let trendings = [
    {
      id: 1,
      imageUrl: '/images/pizza-paperoni.png',
      title: 'Pizza Paperoni',
      category: 'Pizza',
      rating: 4,
    },
    {
      id: 2,
      imageUrl: '/images/pizza-meat.png',
      title: 'Pizza Meat',
      category: 'Pizza',
      rating: 3,
    },
    {
      id: 3,
      imageUrl: '/images/doner-kebab.png',
      title: 'Doner Kebab',
      category: 'Kebab',
      rating: 5,
    },
    {
      id: 4,
      imageUrl: '/images/salmon-roll.png',
      title: 'Salmon Roll',
      category: 'Salmon',
      rating: 4,
    },
    {
      id: 5,
      imageUrl: '/images/cupcake-choco.png',
      title: 'Cupcake Choco',
      category: 'Cupcake',
      rating: 4,
    },
    {
      id: 6,
      imageUrl: '/images/doughnut-milk.png',
      title: 'Doughnut Milk',
      category: 'Doughnut',
      rating: 5,
    },
    {
      id: 7,
      imageUrl: '/images/doughnut-unicorn.png',
      title: 'Doughnut Unicorn',
      category: 'Doughnut',
      rating: 4,
    },
    {
      id: 8,
      imageUrl: '/images/kathi-kebab.png',
      title: 'Kathi Kebab',
      category: 'Kebab',
      rating: 4,
    },
  ];
  return (
    <div className="mt-24 mb-48 space-y-10">
      <HeaderSection title="Browser Our Trending" subtitle="Receipt" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {trendings.map((trend) => (
          <Card
            key={trend.id}
            imageUrl={trend.imageUrl}
            title={trend.title}
            category={trend.category}
            rating={trend.rating}
          />
        ))}
      </div>
      <div className="hidden md:flex md:justify-center">
        <PrimaryButton>All Receipt</PrimaryButton>
      </div>
    </div>
  );
}

export default Trending;
