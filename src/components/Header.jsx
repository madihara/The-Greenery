import React from 'react'
import styled, { css } from 'styled-components'

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
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`
const Link = styled.li`
  padding: 0 3px;
`



const Header = () => {
  return(
    <div>
     <Head>
       <Logo src={logo}/>
       <Title src={title} />
       <Navigation>
         <List>
           <Link>Home</Link>
           <Link>About</Link>
           <Link>Subscribe</Link>
         </List>
       </Navigation>
    </Head>
     
    </div>
  )
}

export default Header