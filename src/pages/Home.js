import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../containers/Hero'
import '../styles/Header.scss'
export const Home = () => {
  return (
    <div name='home' className='home-container'>
      <Header />
      <Hero />
    </div>
  )
}
