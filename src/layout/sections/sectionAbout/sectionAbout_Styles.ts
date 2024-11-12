import styled from 'styled-components';
import { themeMain } from '../../../styles/Theme';

const About = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
  color: ${props => props.theme.fontColor};
  & ul {
    font-weight: 500;
    font-size: 12px;
    color: #a7a7a7;
  }
  & div img {
    position: absolute;
    right: -130px;
    top: -22px;
    @media ${themeMain.media.tablet} {
      display: none;
    }
  }
`;

const TextWrapper = styled.div`
  min-width: 375px;
  width: 50%;
  @media ${themeMain.media.tablet} {
    width: 100%;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 42px;
  color: ${props => props.theme.fontAccentColor};
  margin-bottom: 40px;
`;
const Text = styled.section`
  font-size: 18px;
  color: ${props => props.theme.fontAccentColor};
  margin-bottom: 50px;
`;

export const S = {
  About,
  TextWrapper,
  SectionSubtitle,
  Text,
};
