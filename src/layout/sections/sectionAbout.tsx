import React from 'react'
import styled from 'styled-components'
import ImgRight from '../../assets/images/drawing.png'
export const SectionAbout = () => {
  return (
    <StyledAbout>
      <AreaLeft>
      <SectionSubtitle>About Me</SectionSubtitle>
      <Text>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</Text>
       <SectionSubtitle>Work Experience</SectionSubtitle>
        <ul>
         <li>
          <div>
            <p>Junior Web Developer</p>
            <p>Full time</p>
          </div>
          <div>
            <p>Dr. Rajkumar’s Learning App</p>
            <p>Sep 2021 - Dec 2021</p>
          </div>
         </li>
        </ul>
       <SectionSubtitle>Education</SectionSubtitle>
        <ul>
         <li>
          <div>
            <p>Junior Web Developer</p>
            <p>Full time</p>
          </div>
          <div>
            <p>Dr. Rajkumar’s Learning App</p>
            <p>Sep 2021 - Dec 2021</p>
          </div>
         </li>
        </ul>
        </AreaLeft>
        <img src={ImgRight}/>
    </StyledAbout>
  )
}

const StyledAbout=styled.section`
  background-color: #f3e4e4;
    position:relative;
  & img {
    position:absolute;
    right:-130px;
    top:-170px;
  }
`
const AreaLeft =styled.div`
  width:70%;

`
const SectionSubtitle=styled.h3`
 font-family: Poppins;
font-weight: 700;
font-size: 42px;
line-height: 124%;
letter-spacing: -0.01em;
color: #42446e; 
`
const Text=styled.section`
font-family:Poppins;
font-weight: 400;
font-size: 18px;
line-height: 144%;
color: #666;
`
