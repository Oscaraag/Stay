import React, { useState } from 'react'
import { PortfolioItem } from '../components/PortfolioItem'

import { useScrollParallax } from '../hooks/useScrollParallax'

import descriptionImg from '../../public/img/web.png'
import portfolioOA from '../../public/img/portfolioOA.png'

export const PortfolioItemContainer = () => {
  const [imgSrc, setImageSrc] = useState(portfolioOA)
  const [showWebName, setShowWebName] = useState('')

  const { offsetY } = useScrollParallax()

  const handlePortfolioDescription = () => {
    imgSrc === portfolioOA ? setShowWebName('show-web-name') : setShowWebName('')
    imgSrc === portfolioOA ? setImageSrc(descriptionImg) : setImageSrc(portfolioOA)
  }
  return (
    <>

      <PortfolioItem
        siteName='Stay.dev' handlePortfolioDescription={handlePortfolioDescription} showWebName={showWebName} offsetY={offsetY} srcImage={imgSrc}
      />

    </>
  )
}
