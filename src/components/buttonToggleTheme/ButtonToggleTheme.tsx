
import React, {MouseEvent}from 'react'
import styled from 'styled-components';



const ButtonToggleTheme = (switchTheme:any) => {
  return (
    <Button onClick={switchTheme}>Switch Theme</Button>
  )
}

const Button=styled.button`
background: ${props=> props.theme.BackgroundColor};
border:2px solid #018c0f;
border-radius: 30px;
cursor: pointer;
font-size:0.6rem;
padding: 7px 18px;

`
export default ButtonToggleTheme
