import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import ProductList from '../components/ProductList'
import SustainableGoalsCard from '../components/SustainableGoalsCard'

import Map from './Map'
import FarmStoryss from '../components/FarmStoryss'

const Home = () => {
  return (
    <div> <Navbar/>
          <Intro/>
          <ProductList/>
          <br/>
          <SustainableGoalsCard/>
          <Map/>
          <br/> 
          <br/> <br/> <br/> <br/> <br/>
<FarmStoryss/>
          <Footer/>
      </div>
  
  )
}

export default Home
