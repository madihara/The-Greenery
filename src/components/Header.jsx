import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'

import LoginPage from '../pages/LoginPage'

import logo from '../images/cactus.png'
import title from '../images/title.png'

const Head = styled.nav`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.img`
  height: 60px;
  width: 60px;
`

const Title = styled.img`
  height: 50px;
`
const Navigation = styled.nav`
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  font-size: 0.8rem;
`

/*
const Link = styled.li`
  padding: 3px 10px;
  margin-left: 10px;
`
*/



const Header = () => {
  return(
    <div>
     <Head>
       <Router>
       <Logo src={logo} alt="logo"/>
       <Title src={title} />
       <Navigation>
         <List>
           <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>Log In</Link>
           
         </List>
       </Navigation>
       </Router>
    </Head>
     
    </div>
  )
}

export default Header