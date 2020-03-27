import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  border-radius: 10px;
`

const Button = ({children})=> {
  return(
    <Btn
  >{children}</Btn>
  )
}

export default Button