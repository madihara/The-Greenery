import React from 'react'
import styled from 'styled-components'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Foot = styled.div`
  background: white;
  display: flex;
  height: 100%;
  justify-content: space-around;
  flex-direction: row;
  padding: 2rem 4rem;
  line-height: 1rem;
  text-transform: uppercase;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  
`
const Title = styled.h3`
  font-weight: normal;
  font-size: 13px;
  border-bottom: 2px solid black;
`
const SubTitle = styled.h5`
  font-weight: normal;
  margin: 2px;
  font-size: 10px;
`
const Icon = styled.a`
  font-size: 24px;
  margin: 0 8px;
`

const Footer = () => {
  return(
    <>
    <Foot>
      <Column>
        <Title>Locations</Title>
        <SubTitle>Kalamazoo, MI</SubTitle>
        <SubTitle>Indianapolis, IN</SubTitle>
        <SubTitle>Lafayette, IN</SubTitle>
        <SubTitle>Sarasota, FL</SubTitle>
      </Column>
      <Column
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
      <Icon><FaFacebook/></Icon>
      <Icon><FaTwitter/></Icon>
      <Icon><MdEmail/></Icon>
      </Column>
      <Column style={{
        textAlign: 'right'
      }}>
      <Title>Navigation</Title>
      <SubTitle>Cart</SubTitle>
      <SubTitle>Take the Survey</SubTitle>
      <SubTitle>Log in</SubTitle>
      </Column>
    </Foot>
    <div
    style={{
      textAlign: 'center',
      textTransform:'uppercase',
      fontSize: '9px',
      background: 'white',
      padding: '1rem'
    }}
    >Copyright &copy; 2020  Madison Haradine</div>
    </>
  )
}

export default Footer