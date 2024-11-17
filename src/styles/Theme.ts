import { DefaultTheme } from 'styled-components';
export const lightTheme: DefaultTheme = {
  BackgroundColor: '#FFFFFF',
  backgroundCardColor: '#FFFFFF',
  fontColor: '#666666',
  fontAccentColor: '#42446E',
};
export const darkTheme: DefaultTheme = {
  BackgroundColor: '#191919',
  backgroundCardColor: '#363636',
  fontColor: '#ccc',
  fontAccentColor: '#ccc',
};
export const themeMain = {
  media: {
    lg: 'screen and (max-width:992px)',
    tablet: 'screen and (max-width:768px)',
    mobile: 'screen and (max-width:576px)',
  },
  color: {
    gradient: 'linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%)',
  },
  z_index: {
    popUp: '9999',
    header_fixed: '999',
  },
  animation: {
    transition: '0.2s ease-in-out',
  },
};
