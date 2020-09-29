import React, { useState } from 'react'
import { PortfolioItem } from '../components/PortfolioItem'

import { useScrollParallax } from '../hooks/useScrollParallax'

import portfolioOA from '../../public/img/oangel.png'

export const PortfolioItemContainer = () => {
  const [showPortfolioImg, setShowPortfolioImg] = useState('')
  const [showWebName, setShowWebName] = useState('')

  const { offsetY } = useScrollParallax()

  const handlePortfolioDescription = () => {
    showWebName === '' ? setShowWebName('show-web-name') : setShowWebName('')
    showPortfolioImg === '' ? setShowPortfolioImg('show') : setShowPortfolioImg('')
  }
  return (
    <>

      <PortfolioItem
        showPortfolioImg={showPortfolioImg}
        siteName='OAngel.dev'
        handlePortfolioDescription={handlePortfolioDescription}
        showWebName={showWebName}
        offsetY={offsetY}
        srcImage={portfolioOA}
      />

    </>
  )
}
