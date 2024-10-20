import React from 'react'

import styled from 'styled-components'
type CartProjectPropsType ={
src:string,
title:string
text:string
itemStack:string
link:string
linkCode:string

}
export const CartProject=(props:CartProjectPropsType)=> {
  return (
    <CartWrapper >
      <ImgCart src={props.src}/>
      <Title>{props.title}</Title>
      <Description>{props.text}</Description>
      <Stack>Tech stack
        <li>
          {props.itemStack}
        </li>
      </Stack>
      <Link href={props.link}>Live Preview</Link>
      <Link href={props.linkCode}>View Code</Link>

    </CartWrapper>
  )
}
  
const CartWrapper=styled.div`
max-width:375px;
display:flex;
flex-direction:column;
gap:20px;
box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
background: #fff;
border-radius: 20px;

`
const ImgCart=styled.img`
width:100%;
border-radius:inherit;
`
const Title=styled.h4`
font-family: Poppins;
font-weight: 500;
font-size: 28px;
line-height: 93%;
text-align: center;
color: #000;
`
const Description=styled.p`
font-family: var(--font-family);
font-weight: 300;
font-size: 18px;
line-height: 144%;
color: #666;
`
const Stack=styled.ul`
display:inline-flex;

`
const Link=styled.a`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
line-height: 162%;
text-decoration: underline;
text-decoration-skip-ink: none;
color: #000;
display:inline;
`
