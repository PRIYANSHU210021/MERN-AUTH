import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
    {/* <div> */}
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Home
