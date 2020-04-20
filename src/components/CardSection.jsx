import React from 'react'
import styled from 'styled-components'

import Card from './Card'

const cardsInfo = [
  {
    id: 1,
    title: 'Take our plant survey',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt luctus felis non posuere. Donec aliquet vehicula molestie. Vestibulum eu justo ligula. Nullam non lacus et orci faucibus porta a volutpat mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus bibendum sapien sapien, ut lacinia est euismod in. Curabitur malesuada erat vitae auctor suscipit. Aenean ullamcorper turpis a lorem placerat, in posuere orci sodales. Donec porttitor libero ac mauris finibus fermentum. Nunc dui turpis, tempor ac felis ut, euismod pellentesque dui. Fusce sollicitudin porttitor suscipit. Sed lorem ex, hendrerit vel felis ut, venenatis bibendum tortor. Donec quis sollicitudin arcu, sed mattis elit.',
    flexDirection: 'row',
    textAlign: 'left',
  },
  {
    id: 2,
    title: 'Create a profile',
    description: 'Praesent in eros ex. Ut sagittis rhoncus risus, vel faucibus est accumsan sed. Pellentesque vel ante nisi. Aenean ornare mollis commodo. Donec condimentum aliquet velit at imperdiet. Mauris vitae massa maximus, luctus nisi quis, faucibus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec feugiat euismod tellus, et malesuada velit tempor id. Mauris quis velit feugiat, gravida tortor eget, fermentum nisl. Aliquam eu lacinia nunc. Fusce nisi est, venenatis sit amet ante eu, venenatis rhoncus ex. Aenean non varius augue. Duis id dui a quam interdum sagittis. Morbi id risus egestas, auctor enim sit amet, efficitur sem. Praesent viverra massa eu leo semper, nec semper tortor bibendum. Nam vulputate ligula nibh, vitae sagittis risus suscipit ac.',
    flexDirection: 'row-reverse',
    textAlign: 'right',
  },
  {
    id: 3,
    title: 'Review and select a plan',
    description: 'Praesent in eros ex. Ut sagittis rhoncus risus, vel faucibus est accumsan sed. Pellentesque vel ante nisi. Aenean ornare mollis commodo. Donec condimentum aliquet velit at imperdiet. Mauris vitae massa maximus, luctus nisi quis, faucibus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec feugiat euismod tellus, et malesuada velit tempor id. Mauris quis velit feugiat, gravida tortor eget, fermentum nisl. Aliquam eu lacinia nunc. Fusce nisi est, venenatis sit amet ante eu, venenatis rhoncus ex. Aenean non varius augue. Duis id dui a quam interdum sagittis. Morbi id risus egestas, auctor enim sit amet, efficitur sem. Praesent viverra massa eu leo semper, nec semper tortor bibendum. Nam vulputate ligula nibh, vitae sagittis risus suscipit ac.',
    flexDirection: 'row',
    textAlign: 'left',
  },
  {
    id: 4,
    title: 'Receive your plants!',
    description: `Praesent in eros ex. Ut sagittis rhoncus risus, vel faucibus est accumsan sed. Pellentesque vel ante nisi. Aenean ornare mollis commodo. Donec condimentum aliquet velit at imperdiet. Mauris vitae massa maximus, luctus nisi quis, faucibus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec feugiat euismod tellus, et malesuada velit tempor id. Mauris quis velit feugiat, gravida tortor eget, fermentum nisl. Aliquam eu lacinia nunc. Fusce nisi est, venenatis sit amet ante eu, venenatis rhoncus ex. Aenean non varius augue. Duis id dui a quam interdum sagittis. Morbi id risus egestas, auctor enim sit amet, efficitur sem. Praesent viverra massa eu leo semper, nec semper tortor bibendum. Nam vulputate ligula nibh, vitae sagittis risus suscipit ac.`,
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
      {cardsInfo.map(({title, description, id, flexDirection, textAlign, index}) => (
        <Card 
        title={title}
        number={id}
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