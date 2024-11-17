import styled from 'styled-components';
import { themeMain } from '../../styles/Theme';
import ImgAroundFoto from '../../assets/images/Abstract.svg';
import { FlexWrapper } from '../../components/wrapper/FlexWrapper';

const Main = styled.section`
  min-height: 100vh;
  margin-top: 120px;
  font-weight: 700;
  font-size: clamp(2.625rem, 1.4098rem + 2.5316vw, 3.625rem);
  overflow: hidden;
  line-height: 121%;
  color: ${props => props.theme.fontAccentColor};
  & span:not(:first-child) {
    background-image: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const MainTitle = styled.h1`
  font-size: inherit;
  & p {
    display: none;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template: repeat(1, 1fr) / repeat(2, 1fr);
  @media ${themeMain.media.mobile} {
    grid-template: repeat(2, 1fr) / repeat(1, 1fr);
  }
`;
const TextWrapper = styled.div`
  min-height: 350px;
  align-self: center;

  color: ${props => props.theme.fontAccentColor};
  @media ${themeMain.media.mobile} {
    margin-top: 40px;
  }
`;
const PhotoWrapper = styled.div`
  position: relative;
  height: 100vh;
  & img:first-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media ${themeMain.media.mobile} {
    height: auto;
  }
`;
const Photo = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 350px;
`;

export const S = {
  Main,
  MainTitle,
  PhotoWrapper,
  Photo,
  TextWrapper,
  Wrapper,
};
