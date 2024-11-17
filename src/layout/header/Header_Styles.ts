import styled, { css } from 'styled-components';
import { themeMain } from '../../styles/Theme';

//Header
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding-top: 40px;

  background-color: ${props => props.theme.BackgroundColor};
  & svg {
    fill: ${props => props.theme.fontColor};
  }
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
    background-color: ${props => props.theme.BackgroundColor};
  }
`;
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${themeMain.z_index.popUp};
  background-color: ${props => props.theme.BackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 0.8s ease-in-out;
  ${props =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);
    `}
`;
//BurgerButton
const BurgerButton = styled.button<{ isOpen: boolean; theme: string }>`
  margin-right: 20px;
  border: none;
  z-index: 99999;
  width: 40px;
  height: 40px;
  & span {
    display: block;
    width: 40px;
    height: 3px;
    background-image: ${themeMain.color.gradient};
    position: relative;
    transition: all 0.3s ease-in-out;
    ${props =>
      props.isOpen &&
      props.theme === 'light' &&
      css<{ isOpen: boolean; theme: string }>`
        background-image: linear-gradient(
          270deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 1) 100%
        );
      `}
    ${props =>
      props.isOpen &&
      props.theme === 'dark' &&
      css<{ isOpen: boolean; theme: string }>`
        background-image: linear-gradient(90deg, rgba(25, 25, 25, 1) 0%, rgba(25, 25, 25, 1) 100%);
      `}

    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background-image: ${themeMain.color.gradient};
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
      background-image: ${themeMain.color.gradient};
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
