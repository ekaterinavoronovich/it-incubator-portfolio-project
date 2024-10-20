import styled from "styled-components"

export type SectionPropsType ={
titleText:string
subtitleText:string

}

export const Section = (props:SectionPropsType) => {
  return (
    <StyledTitleSection>
        <TitleSection>{props.titleText}</TitleSection>
        <Subtitle>{props.subtitleText}</Subtitle>
           
    </StyledTitleSection>
  )
}
const StyledTitleSection=styled.div`
  text-align:center;
`
const TitleSection=styled.h2`
font-family: Poppins;
font-weight: 700;
font-size: 48px;
line-height: 54%;
text-align: center;
color: #42446e; 
`
const Subtitle =styled.h3`
font-family: Poppins;
font-weight: 400;
font-size: 32px;
line-height: 81%;
text-align: center;
color: #666;
`