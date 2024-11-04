import LogoSVG from '../../assets/images/logo 1.svg';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
export const Logo = () => {
  return (
    <div>
      <a
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <img src={LogoSVG} alt="Logo" />
      </a>
    </div>
  );
};
