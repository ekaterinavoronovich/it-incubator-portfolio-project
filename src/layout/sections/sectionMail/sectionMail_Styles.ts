import styled from 'styled-components';
import { lightTheme } from '../../../styles/Theme';

const Mailarea = styled.section`
  font-family: DM Sans;
  font-weight: 700;
  font-size: clamp(2.625rem, 1.4098rem + 2.5316vw, 3.625rem);
  line-height: 121%;
  color: ${lightTheme.fontAccentColor};
  text-align: center;
  margin: 200px 0 220px 0;
  & a {
    margin-top: 10px;
    background-image: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const S = {
  Mailarea,
};
