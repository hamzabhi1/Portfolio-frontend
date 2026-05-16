import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';  
import Footer from '../components/Footer';
import About from './About';
import Skills from './Skills';
import Services from './Services';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Footer />
    </div>
  )
}

export default Home
