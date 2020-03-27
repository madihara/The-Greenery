import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: 80vh;
  margin: 0 3rem;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  background: #fff;
`

const Title = styled.h2`
  max-width: 50%;
`
const Description = styled.p`
  max-width: 50%;
`


const Card = ({ flexDirection, title, description, image}) =>{
  return(
    <Container
    style={{
      flexDirection: flexDirection
    }}>
      
        <Title>{title}</Title>
        <Description>{description}</Description>
    </Container>
  )
}

export default Card;