import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { Header } from './layout/header/Header';
import Main from './layout/main/Main';
import { SectionSkills } from './layout/sections/SectionSkills';
import { SectionProjects } from './layout/sections/sectionProjects/SectionProjects';
import { SectionAbout } from './layout/sections/sectionAbout/sectionAbout';
import { Footer } from './layout/footer/footer';
import { GlobalStyle } from './styles/Global.styled';
import { useState } from 'react';
import { darkTheme, lightTheme } from './styles/Theme';
import ButtonToggleTheme from './components/buttonToggleTheme/ButtonToggleTheme';
import { SectionMail } from './layout/sections/sectionMail/sectionMail';
import { Container } from './components/container/Container';
import { GotToTop } from './components/goToTop/GotToTop';

function App() {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <div className="App">
          {/* <ButtonToggleTheme switchTheme={switchTheme}/> */}
          <Header />
          <Main />
          <SectionAbout />
          <SectionSkills />
          <SectionProjects />
          <SectionMail />
          <Footer />
          <GotToTop />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
