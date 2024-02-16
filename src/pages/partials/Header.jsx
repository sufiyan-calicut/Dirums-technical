import React from 'react';
import NavbarIconsComponent from '../../components/headerComponents/NavbarIconsComponent';
import PromoInfo from '../../components/headerComponents/PromoInfo';

const Header = () => {
  return (
    <div>
      <PromoInfo />
      <NavbarIconsComponent />
    </div>
  );
};

export default Header;
