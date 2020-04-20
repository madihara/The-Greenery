import React from 'react'
import styled from 'styled-components'
import {TiMessages} from 'react-icons/ti'

const Button = styled.button`
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 20px;
  right: 40px;
  height: 60px;
  width: 60px;
  background-color: black;
  color: white;

  &:hover{
    transform: scale(1.1);
  }
`

const ChatButton = () => {
  return (
    <Button>
      <TiMessages style={{fontSize: '30px'}}/>
    </Button>
  )
}

export default ChatButton