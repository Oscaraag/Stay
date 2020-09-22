import React from 'react'
import { PortfolioDescription } from '../PortfolioDescription'
import { Icon } from '../Icon'

export const PortfolioItem = ({ siteName, handlePortfolioDescription, showWebName, srcImage, imageName, offsetY }) => {
  return (
    <div className='portfolio-item'>

      <figure>
        <img className='portfolio-img-container' src={srcImage} alt={imageName} />
      </figure>

      <PortfolioDescription onClik={handlePortfolioDescription} offsetY={offsetY} ItemName='Stay' ItemType='Personal Web' />

      <div className={`portfolio-name-container ${showWebName}`}>

        <div className='portfolio-name-title'>

          <span>{siteName}</span>

        </div>

        <div className='portfolio-name-icons '>

          <Icon classIcon1='fab fa-html5 icon-glow-html' />

          <Icon classIcon1='fab fa-css3-alt icon-glow-css' />

          <Icon classIcon1='fab fa-react icon-glow-react' />

        </div>

      </div>

    </div>
  )
}
