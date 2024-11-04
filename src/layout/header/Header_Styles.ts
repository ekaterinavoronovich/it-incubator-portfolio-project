import styled, { css } from 'styled-components';
import { lightTheme, theme } from '../../styles/Theme';

//Header
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding-top: 40px;
`;
const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

// MobileMenu
const MobileMenu = styled.div`
  position: relative;
  & ul {
    display: flex;
    gap: 35px;
    padding-right: 30px;
    flex-direction: column;
  }

  & button {
    position: absolute;
    top: -25px;
    right: 0;
    background-color: ${lightTheme.BackgroundColor};
  }
`;
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${theme.z_index.popUp};
  background-color: ${lightTheme.BackgroundColor};
  display: none;
  ${props =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
//BurgerButton
const BurgerButton = styled.button<{ isOpen: boolean }>`
  margin-right: 20px;
  border: none;
  z-index: 99999;
  width: 40px;
  height: 40px;
  & span {
    display: block;
    width: 40px;
    height: 3px;
    background-image: ${theme.color.gradient};
    position: relative;

    ${props =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-image: linear-gradient(
          270deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 1) 100%
        );
      `}

    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background-image: ${theme.color.gradient};
      position: absolute;
      transform: translateY(-10px);
      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
        `}
    }
    &::before {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background-image: ${theme.color.gradient};
      position: absolute;
      transform: translateY(10px);
      ${props =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }
  }
`;

//DesktopMenu
const DesktopMenu = styled.div`
  & ul {
    display: flex;
    gap: 35px;
    padding-right: 30px;
  }
`;
//

export const S = {
  Header,
  Wrapper,
  MobileMenu,
  BurgerButton,
  DesktopMenu,
  MobileMenuPopup,
};
