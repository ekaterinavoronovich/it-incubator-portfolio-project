import { Icon } from "../../components/icon/Icon"
import { Section } from "../../components/section/Section"
import { FlexWrapper } from "../../components/wrapper/FlexWrapper"
import TestIcon from '../../assets/images/html.svg'

export const SectionSkills = () => {
  return (
    <section>
    <Section titleText={'My Tech Stack'} subtitleText={"Technologies I’ve been working with recently"}/>
      <FlexWrapper justify={'center'}>
       <Icon iconId={'htm-icon'} width={'120px'} height={'120px'} viewBox={"0 0 120px 120px"}/>
       <Icon iconId={'js-icon'} width={'120px'} height={'120px'} viewBox={"0 0 120px 120px"}/>
       <Icon iconId={'tailwind'} width={'120px'} height={'120px'} viewBox={"0 0 120px 120px"}/>
       <Icon iconId={'vscode'} width={'120px'} height={'120px'} viewBox={"0 0 120px 120px"}/>
       <Icon iconId={'sass-icon'} width={'120px'} height={'120px'} viewBox={"0 0 120px 120px"}/>
       <Icon iconId={"react-icon"} width={'120px'} height={'120px'} viewBox={"0 0 120px 120px"}/>
       <Icon iconId={'git-icon'} width={'120px'} height={'120px'} viewBox={"0 0 120px 120px"}/>
       <Icon iconId={"css-icon"} width={'120px'} height={'120px'} viewBox={"0 0 120px 120px"}/>
       <Icon iconId={"Redux"} width={'120px'} height={'120px'} viewBox={"0 0 120px 120px"}/>
       <Icon iconId={"TS"} width={'120px'} height={'120px'} viewBox={"0 0 120px 120px"}/>
       
     </FlexWrapper>
    </section>
  

  )
}