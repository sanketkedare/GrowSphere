import React from 'react'
import Welcome from '../Components/Home/Welcome'
import Menu from '../Components/Home/Menu'
import Goal from '../Components/Home/Goal'
import About from '../Components/Home/About'
import Contact from '../Components/Home/Contact'
import Partners from '../Components/Home/Partners'
import InvestmentProcess from '../Components/Home/Process'
import Footer from '../Components/Home/Footer'

const Home = () => {
  return (
    <div className='bg-[#0a0f24] text-[#f5f3f0]  relative'>
      <Menu/>
      <Welcome/>
      <Goal/>
      <InvestmentProcess/>
      <Partners/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
