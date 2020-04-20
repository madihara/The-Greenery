import React from 'react'

import ChatButton from './ChatButton'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) =>{
  return(
  <>
    <Header/>
    {children}
    <ChatButton />
    <Footer/>
  </>
  )
}

export default Layout