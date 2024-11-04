import styled from 'styled-components';
import { lightTheme, theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/wrapper/FlexWrapper';

const Main = styled.section`
  min-height: 100vh;
  margin-top: 104px;
  display: flex;
  font-weight: 700;
  font-size: clamp(2.625rem, 1.4098rem + 2.5316vw, 3.625rem);
  line-height: 121%;
  color: ${lightTheme.fontAccentColor};
  & span:not(:first-child) {
    background-image: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & h1 {
  }
  & ${FlexWrapper} {
    @media ${theme.media.mobile} {
      flex-wrap: wrap;
    }
  }
`;
const MainTitle = styled.h1`
  font-size: inherit;
  & p {
    display: none;
  }
`;
const Photo = styled.img`
  max-width: 350px;
  width: 100%;
`;

export const S = {
  Main,
  MainTitle,
  Photo,
};
