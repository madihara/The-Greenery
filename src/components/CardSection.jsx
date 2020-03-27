import React from 'react'
import styled from 'styled-components'

import Card from './Card'

const cardsInfo = [
  {
    id: 1,
    title: 'Take our plant survey',
    description: 'Our master botanists will match you with plants that fit your lifestyle and preferences.',
    flexDirection: 'row',
    textAlign: 'left',
  },
  {
    id: 2,
    title: 'Create a profile',
    description: 'Sign up to view your profile and suggested plant species. View plants that match your survey results and choose some favorites to be stored in your profile.',
    flexDirection: 'row-reverse',
    textAlign: 'right',
  },
  {
    id: 3,
    title: 'Review and select a plan',
    description: 'View plants that match your survey results and choose some favorites to be stored in your profile woird ksi dkgi soidsfn sidfuj sdfoijdf sdfusdfi skjdsf dsfjlsd',
    flexDirection: 'row',
    textAlign: 'left',
  },
  {
    id: 4,
    title: 'Receive your plants!',
    description: `Complete with full care instructions, a beautiful hand crafted pot, and a healthy plant ready to grow beside you. This will ensure you proper take care of the plants and don't accidentally kill them.`,
    flexDirection: 'row-reverse',
    textAlign: 'right'
  }
]

const Container = styled.section`
  
`

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight:normal;
  color: white;
`


const CardSection = () => {
  return(
    <Container>
    <Title>How it works</Title>
      {cardsInfo.map(({title, description, id, flexDirection, textAlign}) => (
        <Card 
        title={title}
        description={description}
        flexDirection={flexDirection}
        id={id}
        textAlign={textAlign}>
        </Card>
      ))}
    </Container>
  )
}

export default CardSection