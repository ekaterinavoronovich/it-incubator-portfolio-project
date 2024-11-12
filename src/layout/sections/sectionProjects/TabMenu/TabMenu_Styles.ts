import styled, { css } from 'styled-components';
import { themeMain } from '../../../../styles/Theme';

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    margin: 0 auto 40px;
  }
`;
const Link = styled.a<{ active: boolean }>`
  text-transform: uppercase;
  position: relative;

  &:hover {
    &::before {
      height: 5px;
    }
  }
  &::before {
    content: '';
    display: inline-block;
    background-image: ${themeMain.color.gradient};
    position: absolute;
    bottom: -3px;
    left: -3px;
    right: -3px;
    z-index: -1;
    height: 0px;
    transition: ${themeMain.animation.transition};
    ${props =>
      props.active &&
      css<{ active: boolean }>`
        height: 5px;
      `}
  }
`;
export const S = { StyledTabMenu, Link };
