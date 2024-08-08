import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Content from '../components/content'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen h-max w-full relative items-center'>
        <Navbar />
        <Header />
        <Content />
        <Card />
        <Footer />
    </div>
  )
}
