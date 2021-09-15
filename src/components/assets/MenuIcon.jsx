import React from 'react';
import IconBurger from '@/components/assets/icons/IconBurger';

function MenuIcon({ text }) {
  return (
    <div className="flex flex-col items-center text-xs text-gray-600 space-y-1">
      <IconBurger />
      <span>{text}</span>
    </div>
  );
}

export default MenuIcon;
