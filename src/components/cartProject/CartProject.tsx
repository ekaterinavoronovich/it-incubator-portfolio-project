import React from 'react';

import styled from 'styled-components';
import { FlexWrapper } from '../wrapper/FlexWrapper';
import { lightTheme } from '../../styles/Theme';

type CartProjectPropsType = {
  src: string;
  title: string;
  text: string;
  itemStack: Array<String>;
  link: string;
  linkCode: string;
};
export const CartProject = (props: CartProjectPropsType) => {
  return (
    <CartWrapper>
      <ImgWrapper>
        <ImgCart src={props.src} />
      </ImgWrapper>
      <DescriptionWrapper>
        <Title>{props.title}</Title>
        <Description>{props.text}</Description>

        <Stack>
          Tech stack:
          <li>{props.itemStack}</li>
        </Stack>
        <FlexWrapper justify={'center'} gap={'80px'}>
          <Link href={props.link}>Live Preview</Link>
          <Link href={props.linkCode}>View Code</Link>
        </FlexWrapper>
      </DescriptionWrapper>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  max-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;

  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 20px;
`;
const ImgCart = styled.img`
  width: 100%;
  border-radius: inherit;
`;
const DescriptionWrapper = styled.div`
  padding: 30px;
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
      backdrop-filter: blur(4px);
    }
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
    background-image: url('../../assets/images/link-chain.svg');
    background-size: cover;
    position: absolute;
    top: 4px;
    left: -22px;
  }
  &:last-child::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('../../assets/images/GitHub.svg');
    background-size: cover;
  }
`;
