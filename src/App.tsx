import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import Main from './layout/main/Main';
import { SectionSkills } from './layout/sections/SectionSkills';
import { SectionProjects } from './layout/sections/SectionProjects';
import { SectionAbout } from './layout/sections/sectionAbout';
import { Footer } from './layout/footer/footer';


function App() {
    return (
        <div className="App">
        <Header/>
        <Main/>
        <SectionAbout/>
        <SectionSkills/>
        <SectionProjects/>
        <Footer/>
       
        </div>
    );
}

export default App;

