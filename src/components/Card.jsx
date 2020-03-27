import React from 'react'
import styled from 'styled-components'

import Fade from 'react-reveal'


const Container = styled.div`
  height: 60vh;
  margin: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  background: #fff;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  padding: 0 3rem;

  @media screen and (max-width: 900px){
    margin: 0;
    height: 100%;
    padding: 2rem 3rem;
  }
`

const Title = styled.h2`
  max-width: 35%;
  min-width: 250px;
  font-size: 6rem;
  text-transform: lowercase;
  line-height: 70px;
`
const Description = styled.p`
  max-width: 40%;
  min-width: 250px;
`


const Card = ({ flexDirection, title, description, textAlign}) =>{
  return(
    <Fade up>
    <Container
    style={{
      flexDirection: flexDirection,
      textAlign: textAlign
    }}>
      
        <Title>{title}</Title>
        <Description>{description}</Description>
    </Container>
    </Fade>
  )
}

export default Card;

