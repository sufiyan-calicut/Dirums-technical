import React from 'react';
import HomeIcon from '../../assets/icons/Home.svg';
import categoryIcon from '../../assets/icons/categories.svg';
import HomeAndLiving from '../../assets/icons/Home And Living.svg';
import ArtWork from '../../assets/icons/ArtWork.svg';
import Account from '../../assets/icons/Account.svg';

const Footer = () => {
  return (
    <div className="w-full bg-footerGray flex items-center justify-evenly sm:hidden h-14">
      <div>
        <img src={HomeIcon} alt="" />
      </div>
      <div>
        <img src={categoryIcon} alt="" />
      </div>
      <div>
        <img src={HomeAndLiving} alt="" />
      </div>
      <div>
        <img src={ArtWork} alt="" />
      </div>
      <div>
        <img src={Account} alt="" />
      </div>
    </div>
  );
};

export default Footer;
