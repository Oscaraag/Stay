import React from 'react'
import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Skills } from './pages/Skills'
import { Portfolio } from './pages/Portfolio'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </>

  )
}
