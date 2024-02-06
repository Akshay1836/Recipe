import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import Recipes from './Recipes'
import Content from './Content'
import Icons from './Icons'

function Home() {
  return (
    <div className='relative'>
      <Icons/>
      <Recipes/>
    </div>
  )
}

export default Home