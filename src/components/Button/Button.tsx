import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

export const BurgerButton: React.FC<{ isOpen: boolean }> = (props: {
  isOpen: boolean;
  ToggleMenuHandler: void;
}) => {
  return (
    <Button isOpen={props.isOpen} onClick={props.ToggleMenuHandler}>
      <span></span>
    </Button>
  );
};

export default BurgerButton;

const Button = styled.button<{ isOpen: boolean }>`
  margin-right: 20px;
  border: none;
  z-index: 99999;
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
