import React from 'react';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import Card from '@/components/hero/Card';
import HeroImage from '@/assets/hero.png';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center my-3">
      <div className="space-y-10">
        <div className="prose-sm lg:prose-lg text-lg text-primary font-medium w-64 lg:w-96">
          <h1>Good Food Us Good Mood</h1>
        </div>

        <div className="flex relative md:hidden">
          <div className="z-10 absolute bottom-0 right-0 flex items-center space-x-4 pr-4 pl-2 py-3 rounded-xl shadow-xl backdrop-filter backdrop-blur-xl">
            <img src={HeroImage} className="h-14 w-14" />
            <Card title="Green Salad Tomato" category="Tomato" rating={4} />
          </div>
          <div>
            <div className="lg:hidden bg-gray-50 p-5 rounded-full">
              <img src={HeroImage} className="h-40 w-40" />
            </div>
          </div>
        </div>

        <div className="prose w-full lg:w-4/5">
          <p>
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of food that we buy.
          </p>
        </div>
        <div className="space-x-3">
          <PrimaryButton>Daftar Sekarang</PrimaryButton>
          <SecondaryButton>About Us</SecondaryButton>
        </div>
      </div>

      <div className="mr-10 relative pl-20 hidden md:block">
        <div className="absolute bottom-8 left-0 flex items-center space-x-4 pr-16 pl-4 py-4 rounded-xl shadow-xl backdrop-filter backdrop-blur-xl">
          <img src={HeroImage} className="h-14 w-14" />
          <Card title="Green Salad Tomato" category="Tomato" rating={4} />
        </div>
        <div>
          <div className="hidden md:block bg-gray-50 p-14 rounded-full">
            <img src={HeroImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
