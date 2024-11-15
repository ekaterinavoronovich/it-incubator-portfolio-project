import styled from 'styled-components';
import { themeMain } from '../../styles/Theme';
import ImgAroundFoto from '../../assets/images/Abstract.png';
import { FlexWrapper } from '../../components/wrapper/FlexWrapper';

const Main = styled.section`
  min-height: 100vh;
  margin-top: 104px;
  display: flex;
  font-weight: 700;
  font-size: clamp(2.625rem, 1.4098rem + 2.5316vw, 3.625rem);
  line-height: 121%;
  color: ${props => props.theme.fontAccentColor};
  & span:not(:first-child) {
    background-image: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & h1 {
  }
  & ${FlexWrapper} {
    @media ${themeMain.media.mobile} {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
`;
const MainTitle = styled.h1`
  font-size: inherit;
  & p {
    display: none;
  }
`;
const TextWrapper = styled.div`
  max-width: 630px;
  width: 100%;
  min-height: 350px;
  color: ${props => props.theme.fontAccentColor};
  @media ${themeMain.media.mobile} {
    margin-top: 40px;
  }
`;
const PhotoWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${ImgAroundFoto}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  /* position: relative;
  & img:first-child {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -120px;
    right: 250px; }*/
`;
const Photo = styled.img`
  max-width: 350px;
  width: 100%;
`;

export const S = {
  Main,
  MainTitle,
  PhotoWrapper,
  Photo,
  TextWrapper,
};
