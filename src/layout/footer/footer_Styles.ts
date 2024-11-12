import styled from 'styled-components';
import { themeMain } from '../../styles/Theme';
import { FlexWrapper } from '../../components/wrapper/FlexWrapper';

const Footer = styled.footer`
  & nav ul {
    display: flex;
    gap: 20px;

    @media ${themeMain.media.lg} {
      display: none;
    }
  }
  & nav span {
    color: ${props => props.theme.fontAccentColor};
  }
  & svg {
    fill: ${props => props.theme.fontAccentColor};
  }
  margin-bottom: 60px;
  & div:nth-child(2) {
    @media ${themeMain.media.tablet} {
      justify-content: center;
    }
  }
`;
const AreaContact = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
  & a {
    white-space: nowrap;
  }
  & ${FlexWrapper}:nth-child(1) {
    @media ${themeMain.media.tablet} {
      flex-direction: column;
    }
  }
`;

const Line = styled.hr`
  border: none;
  background-color: rgba(102, 102, 102, 0.5);
  height: 2px;
  margin: 40px 0 40px 0;
`;
const Copyright = styled.small`
  & span {
    background-image: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const S = {
  Copyright,
  Line,
  AreaContact,
  Footer,
};
