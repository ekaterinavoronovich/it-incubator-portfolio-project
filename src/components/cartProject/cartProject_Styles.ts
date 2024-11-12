import styled from 'styled-components';
import { lightTheme, themeMain } from '../../styles/Theme';
import sprite from '../../assets/images/sprite.svg';
import iconGithab from '../../assets/images/github (2).svg';
import linkChain from '../../assets/images/link-chain.svg';

const CartWrapper = styled.div`
  max-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;

  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.backgroundCardColor};
  border-radius: 20px;
`;
const ImgCart = styled.img`
  width: 100%;
  border-radius: inherit;
`;
const DescriptionWrapper = styled.div`
  padding: 30px;
`;
const Button = styled.a`
  background-color: #42446e;
  padding: 10px 15px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 20px;
  line-height: 93%;
  border-radius: inherit;
`;
const ImgWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 20px;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(2px);
      transition: ${themeMain.animation.transition};
    }
    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  ${Button} {
    position: absolute;
    opacity: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${themeMain.animation.transition};
  }
`;
const Title = styled.h4`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 28px;
  line-height: 93%;
  text-align: center;
  color: #000;
`;
const Description = styled.p`
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 18px;
  line-height: 144%;
  color: #666;
  margin: 20px 0 20px 0;
`;
const Stack = styled.ul`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  color: ${lightTheme.fontAccentColor};
  margin-bottom: 20px;
  & li {
    font-size: 14px;
  }
  & :first-child {
    margin-left: 5px;
  }
`;
const Link = styled.a`
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  line-height: 162%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #000;
  display: inline;
  position: relative;
  &:first-child::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('${linkChain}');
    background-size: cover;
    position: absolute;
    top: 4px;
    left: -25px;
  }
  &:last-child::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('${iconGithab}');
    background-size: cover;
    position: absolute;
    top: 4px;
    left: -25px;
  }
`;

export const S = {
  Link,
  Stack,
  Description,
  Title,
  ImgWrapper,
  DescriptionWrapper,
  ImgCart,
  CartWrapper,
  Button,
};
