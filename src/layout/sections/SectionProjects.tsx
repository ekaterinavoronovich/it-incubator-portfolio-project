import styled from "styled-components"
import { Section } from "../../components/section/Section"
import { FlexWrapper } from "../../components/wrapper/FlexWrapper"
import ImageCart from '../../assets/images/Rectangle 4.jpg'
import { CartProject } from "../../components/icon/cartProject/CartProject"

export const SectionProjects = () => {
  return (
    <section>
    <Section titleText={'Projects'} subtitleText={"Things I’ve built so far"}/>
      <FlexWrapper justify={'center'} wrap={'wrap'} >
     
       <CartProject src={ImageCart} title={'Project Tile goes here'}
        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
        itemStack={'HTML , JavaScript, SASS, React'} 
        link={'#'} linkCode={'#'}/>
          <CartProject src={ImageCart} title={'Project Tile goes here'}
        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
        itemStack={'HTML , JavaScript, SASS, React'} 
        link={'#'} linkCode={'#'}/>
          <CartProject src={ImageCart} title={'Project Tile goes here'}
        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
        itemStack={'HTML , JavaScript, SASS, React'} 
        link={'#'} linkCode={'#'}/>
          <CartProject src={ImageCart} title={'Project Tile goes here'}
        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
        itemStack={'HTML , JavaScript, SASS, React'} 
        link={'#'} linkCode={'#'}/>
          <CartProject src={ImageCart} title={'Project Tile goes here'}
        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
        itemStack={'HTML , JavaScript, SASS, React'} 
        link={'#'} linkCode={'#'}/>
          <CartProject src={ImageCart} title={'Project Tile goes here'}
        text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
        itemStack={'HTML , JavaScript, SASS, React'} 
        link={'#'} linkCode={'#'}/>
     </FlexWrapper>

     <Mailarea>
      <p>For any questions please mail me:</p>
      <p><a href="mailto:hi@pavanmg.in">hi@pavanmg.in</a></p>
     </Mailarea>
    </section>
  

  )
}

const Mailarea=styled.div`
 font-family: DM Sans;
font-weight: 700;
font-size: 58px;
line-height: 121%;
letter-spacing: -0.02em;
text-align: center;
color: #1e0e62; 
`