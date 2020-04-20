import React, { Fragment } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

import CardSection from '../components/CardSection'
import Hero from '../components/Hero'
import Survey from '../pages/Survey'

const SurveySection = styled.div`
   background: url('https://images.pexels.com/photos/1856422/pexels-photo-1856422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
   height: 80vh;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Button = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 50px;
  background: #243A27;
  color: white;
  font-size: 1rem;
  box-shadow: 0 0 4px 1px #848484;
  cursor: pointer;

  &:hover{
    transform: scale(1.05);
  }
`

const HomePage=() => {
  return(
    <Fragment>
      <Hero>We are Plant People</Hero>
      <CardSection/>
      <SurveySection>
        <Fade left><Button>Take the survey</Button></Fade>
      </SurveySection>
      <Survey />
    </Fragment>
  )
}

export default HomePage