import 'styled-components';
interface defaultTheme {
  BackgroundColor: string;
  backgroundCardColor: string;
  fontColor: string;
  fontAccentColor: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    BackgroundColor: string;
    backgroundCardColor: string;
    fontColor: string;
    fontAccentColor: string;
  }
}
