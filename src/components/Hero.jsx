import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background: url('https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
`

const Title = styled.section`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  padding-top: 15%;

  @media screen and (max-width: 874px) {
    font-size: 3rem;
    padding-top: 20%;
  
  }
`

const ArrowBox = styled.a`
  position: absolute;
  top: 92%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Arrow = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  transform: rotate(45deg);
  margin: -12px;
  animation: animate 2s infinite;
   
  &:nth-child(2){
    animation-delay: -0.2s;
    transform: rotate(45deg) translate(-20px, -20px);
  }

  &:nth-child(3){
    animation-delay: -0.4s;
    transform: rotate(45deg) translate(-20px, -20px);
  }

  @keyframes animate{
    0%{
      opacity: 0;
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  }
`

const Hero = () => {
  return(
  <Background>
    <Title>We are plant people.</Title>
    <ArrowBox>
      <Arrow/>
      <Arrow/>
      <Arrow/>
    </ArrowBox>
  </Background>

  )
}

export default Hero;