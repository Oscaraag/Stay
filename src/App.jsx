import React from 'react'
import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Skills } from './pages/Skills'
import { Portfolio } from './pages/Portfolio'
import { Footer } from './components/Footer'
import { Layout } from './components/Layout'

export const App = () => {
  return (
    <Layout title='Oscar Angel' subtitle='Sitio personal de Oscar Angel, Frontend developer, Trabajemos juntos!'>
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </Layout>

  )
}
