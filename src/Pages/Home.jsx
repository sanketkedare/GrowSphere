import React from 'react'
import Welcome from '../Components/Welcome'
import Menu from '../Components/Menu'

const Home = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-[#0a0f24] to-[#11162d] relative'>
      <Menu/>
      <Welcome/>
    </div>
  )
}

export default Home
