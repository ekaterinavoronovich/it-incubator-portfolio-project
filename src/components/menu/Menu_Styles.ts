import styled from 'styled-components';
import { themeMain } from '../../styles/Theme';
import { Link } from 'react-scroll';

const StyledMenu = styled.nav``;

const NavLink = styled(Link)`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: transparent;
  @media ${themeMain.media.lg} {
    font-size: 18px;
  }
`;
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: #666;
  transition: ${themeMain.animation.transition};
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;
const ListItem = styled.li`
  position: relative;
  transition: ${themeMain.animation.transition};
  &::before {
    content: '';
    display: inline-block;
    height: 2px;
    background-image: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }

  &:hover {
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
    &::before {
      transform: scale(1);
    }
  }
`;
export const S = {
  StyledMenu,
  NavLink,
  Mask,
  ListItem,
};
