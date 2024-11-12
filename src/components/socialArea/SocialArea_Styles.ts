import styled from 'styled-components';
import { themeMain } from '../../styles/Theme';

const Link = styled.a`
  transition: ${themeMain.animation.transition};
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover {
    fill: ${props => props.theme.fontAccentColor};
    transform: translateY(-4px);
  }
`;

export const S = {
  Link,
};
