import './App.css';
import { ThemeProvider } from 'styled-components';
import { Header } from './layout/header/Header';
import Main from './layout/main/Main';
import { SectionSkills } from './layout/sections/SectionSkills';
import { SectionProjects } from './layout/sections/sectionProjects/SectionProjects';
import { SectionAbout } from './layout/sections/sectionAbout/sectionAbout';
import { Footer } from './layout/footer/footer';
import { GlobalStyle } from './styles/Global.styled';
import { useState } from 'react';
import { SwitchThemeButton } from './components/SwitchThemeButton/SwitchThemeButton';
import { SectionMail } from './layout/sections/sectionMail/sectionMail';
import { GotToTop } from './components/goToTop/GotToTop';
import { lightTheme, darkTheme } from './styles/Theme';

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
          <Header />
          <Main />
          <SectionAbout />
          <SectionSkills />
          <SectionProjects />
          <SectionMail />
          <Footer />
          <SwitchThemeButton toggleTheme={switchTheme} />
          <GotToTop />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
