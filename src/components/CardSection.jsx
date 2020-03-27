import React from 'react'
import styled from 'styled-components'

import Card from './Card'

const cardsInfo = [
  {
    id: 1,
    title: 'Take our plant survey',
    description: 'Our master botanists will match you with plants that fit your lifestyle and preferences.',
    flexDirection: 'row',
    image: ''
  },
  {
    id: 2,
    title: 'Create a profile',
    description: 'Sign up to view your profile and suggested plant species. View plants that match your survey results and choose some favorites to be stored in your profile.',
    flexDirection: 'row-reverse',
    image: ''
  },
  {
    id: 3,
    title: 'Review and select a plan',
    description: 'View plants that match your survey results and choose some favorites to be stored in your profile woird ksi dkgi soidsfn sidfuj sdfoijdf sdfusdfi skjdsf dsfjlsd',
    flexDirection: 'row',
    image: ''
  },
  {
    id: 4,
    title: 'Receive your plants!',
    description: 'Complete with full care instructions, a beautiful hand crafted pot, and a healthy plant ready to grow beside you.',
    flexDirection: 'row-reverse',
    image:'https://images.pexels.com/photos/2242471/pexels-photo-2242471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  }
]

const Container = styled.section`
  
`

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight:normal;
  padding: 5rem 0 3rem;
`


const CardSection = () => {
  return(
    <Container>
    <Title>How it works</Title>
      {cardsInfo.map(({title, description, id, flexDirection, image}) => (
        <Card 
        title={title}
        description={description}
        flexDirection={flexDirection}
        id={id}
        image={image}>
        </Card>
      ))}
    </Container>
  )
}

export default CardSection