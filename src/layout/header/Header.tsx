import React from 'react'
import styled from "styled-components";
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialArea } from '../../components/socialArea/SocialArea';

export const Header=() => {
  return (
    <StyledHeader>
     <Logo/>
     <Menu/>
      <SocialArea/>
    </StyledHeader>
  )
}
const StyledHeader=styled.header`
  width:100%;
  display:flex;
  justify-content:space-between;
`