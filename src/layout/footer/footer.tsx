import React from 'react'
import { Logo } from '../../components/logo/Logo'
import { SocialArea } from '../../components/socialArea/SocialArea'
import styled from 'styled-components'
import { Menu } from '../../components/menu/Menu'
import { FlexWrapper } from '../../components/wrapper/FlexWrapper'

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify='space-between'>
       <Logo/>
        <AreaContact>
        <Link href="tel:+91 12345 09876">+91 12345 09876</Link>
        <Link href="mailto:info@example.com">info@example.com</Link>
        <SocialArea/>
      </AreaContact>
      </FlexWrapper>
        <Line/>
        <FlexWrapper justify='space-between'>
         <Menu/>
        <Copyright>Designed and built by Pavan MG with Love & Coffee</Copyright>  
        </FlexWrapper>
       
        
    </StyledFooter>
  )
}

const StyledFooter =styled.footer`
  
`
const AreaContact =styled.div`
 display:flex;
  gap:35px;
`
const Link =styled.a`
  
`
const Line =styled.hr`
border:none;
background-color:#666;
height:2px
`
const Copyright =styled.small`
 
`