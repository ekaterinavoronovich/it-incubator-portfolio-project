import styled from 'styled-components';
import { lightTheme, theme } from '../../../styles/Theme';

const About = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
  color: ${lightTheme.fontColor};
  & ul {
    font-weight: 500;
    font-size: 12px;
    color: #a7a7a7;
  }
  & div img {
    position: absolute;
    right: -130px;
    top: -22px;
    @media ${theme.media.tablet} {
      display: none;
    }
  }
`;

const TextWrapper = styled.div`
  min-width: 375px;
  width: 50%;
  @media ${theme.media.tablet} {
    width: 100%;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 42px;
  color: ${lightTheme.fontAccentColor};
  margin-bottom: 40px;
`;
const Text = styled.section`
  font-size: 18px;
  color: ${lightTheme.fontAccentColor};
  margin-bottom: 50px;
`;

export const S = {
  About,
  TextWrapper,
  SectionSubtitle,
  Text,
};
