import React from 'react'
import { PortfolioItemContainer } from '../containers/PortfolioItemContainer'

import '../styles/Portfolio.scss'

export const Portfolio = () => {
  return (
    <div name='portfolio' className='portfolio-container'>
      <PortfolioItemContainer />
    </div>
  )
}
