import React from 'react'

import Container from '../../globalComponents/Container'
import { Helmet } from 'react-helmet-async'
import Banner from './components/Banner'
import SupportSection from './components/support'

const Home = () => {
 
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Banner/>
        <SupportSection/>
      </Container>
    </>
  )
}

export default Home