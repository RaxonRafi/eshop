import React from 'react'

import Container from '../../globalComponents/Container'
import { Helmet } from 'react-helmet-async'
import Banner from './components/Banner'
import SupportSection from './components/support'
import FeaturedProducts from './components/faturedProducts'
import Overview from './components/Overview'
import NewProducts from './components/newProducts'

const Home = () => {
 
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Banner/>
        <SupportSection/>
        <FeaturedProducts/>
        <Overview/>
        <NewProducts/>
      </Container>
    </>
  )
}

export default Home