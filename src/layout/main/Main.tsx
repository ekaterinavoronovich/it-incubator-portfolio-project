import styled from "styled-components"
import { FlexWrapper } from '../../components/wrapper/FlexWrapper'
import PhotoImg from '../../assets/images/50353683 1.png'
 const Main = () => {
  return (
    <StyledMain>
    <FlexWrapper  justify={'space-around'} align={'center'}>   
      <div>
     <span>Hi 👋,</span>
     <p>My name is<br/>
        Pavan MG<br/>
        I build things for web</p>
      </div>
     <Photo src={PhotoImg} alt="photo"/>
    </FlexWrapper>
    </StyledMain>
  )
}
const StyledMain =styled.div`
  min-height:350px;
`
const Photo=styled.img `
  width:350px;
  height:350px;
 object-fit:cover;

`

export default Main;
