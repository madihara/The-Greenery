import React, {useState} from 'react'
import styled from 'styled-components'
import {TiMessages} from 'react-icons/ti'

const Button = styled.button`
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 50px;
  right: 40px;
  height: 60px;
  width: 60px;
  background-color: black;
  color: white;
  box-shadow: -1px 2px 1px #848484;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`

const ChatButton = () => {
  const [openButton, setOpen]= useState();
  return (
    <Button>
      <TiMessages style={{fontSize: '30px'}}/>
    </Button>
  )
}

export default ChatButton