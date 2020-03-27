import React, { Fragment } from 'react';
import styled from 'styled-components';

import Header from './components/Header'
import Hero from './components/Hero'


function App() {
  return (
    <Fragment>
    <Header/>
    <Hero>We are Plant People</Hero>
    </Fragment>
  );
}

export default App;
