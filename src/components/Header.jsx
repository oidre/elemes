import React from 'react';
import MenuIcon from '@/components/assets/MenuIcon';
import PrimaryButton from '@/components/PrimaryButton';
import logo from '@/assets/logo.png';
import classNames from 'classnames';

const navigation = [
  { name: 'Home', href: '#', current: true, isHot: false },
  { name: 'About', href: '#', current: false, isHot: false },
  { name: 'Promotions', href: '#', current: false, isHot: true },
  { name: 'Blogs', href: '#', current: false, isHot: false },
  { name: 'Contact Us', href: '#', current: false, isHot: false },
];

function Header() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex">
          <img src={logo} className="w-32 md:w-auto" />
        </div>

        <div className="hidden lg:block sm:ml-6">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-gray-700' : 'hover:text-gray-700',
                  'px-3 py-2 text-sm font-medium text-gray-500 relative',
                )}
              >
                {item.isHot && (
                  <span className="absolute -mt-3 top-0 right-0 bg-red-500 text-xs rounded-full py-0.5 px-2 text-white">
                    HOT
                  </span>
                )}
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="hidden lg:block px-4 py-3 outline-none text-sm font-medium text-gray-600 hover:text-gray-700"
          >
            Masuk
          </button>
          <PrimaryButton>Daftar Sekarang</PrimaryButton>
        </div>
      </div>
      <div className="px-4 py-2 flex w-full justify-between md:hidden fixed z-50 bottom-0 left-0 bg-white">
        <MenuIcon text="Home" />
        <MenuIcon text="Promotions" />
        <MenuIcon text="Others" />
      </div>
    </div>
  );
}

export default Header;
