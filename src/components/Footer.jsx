import React from 'react';
import IconMail from '@/components/assets/icons/IconMail';
import IconPhone from '@/components/assets/icons/IconPhone';
import IconInstagram from '@/components/assets/icons/IconInstagram';
import IconBackground from '@/components/assets/icons/IconBackground';
import InputButton from '@/components/InputButton';
import GroupLink from '@/components/footer/GroupLink';
import TextWithIcon from '@/components/footer/TextWithIcon';
import logo from '@/assets/logo.png';

function Footer() {
  return (
    <div className="hidden md:block p-4">
      <div className="p-8 flex justify-between bg-gray-50 rounded-xl">
        <div className="w-5/12">
          <div className="w-4/5 space-y-5">
            <img src={logo} className="w-32 md:w-auto" />

            <div className="text-sm text-gray-600">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </div>
            <div className="flex space-x-2">
              <IconBackground>
                <IconMail />
              </IconBackground>
              <IconBackground>
                <IconPhone />
              </IconBackground>
              <IconBackground>
                <IconInstagram />
              </IconBackground>
            </div>
          </div>
        </div>
        <GroupLink title="Categories">
          <a href="#">Cupcake</a>
          <a href="#">Pizza</a>
          <a href="#">Kebab</a>
          <a href="#">Salmon</a>
          <a href="#">Dougnut</a>
        </GroupLink>
        <GroupLink title="About Us">
          <a href="#">About Us</a>
          <a href="#">FAQ</a>
          <a href="#">Report Problem</a>
        </GroupLink>

        <div className="block space-y-5 w-3/12">
          <div className="font-medium">Newsletter</div>
          <div className="block text-sm text-gray-600 space-y-4">
            <div>
              Get now free 50% discount for all products on your first order
            </div>
            <InputButton />
            <TextWithIcon icon={<IconMail />} text="elemesid@gmail.com" />
            <TextWithIcon icon={<IconPhone />} text="0888 1111 2222" />
          </div>
        </div>
      </div>
      <div className="flex justify-center uppercase text-gray-600 mt-16">
        &copy; 2021 elemes id. all rights reserved
      </div>
    </div>
  );
}

export default Footer;
