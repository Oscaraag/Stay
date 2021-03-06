import React from 'react'
import { PortfolioDescription } from '../PortfolioDescription'
import { Icon } from '../Icon'
import { LinkHandler } from '../../utils/LinkHandler'

export const PortfolioItem = ({ showPortfolioImg, siteName, handlePortfolioDescription, showWebName, srcImage, imageName, offsetY }) => {
  const openPortfolioItem = () => {
    const PAGEURL = `https://${siteName}`
    LinkHandler(PAGEURL)
  }

  return (
    <div className='portfolio-item'>

      <figure className={`portfolio-img-container ${showPortfolioImg}`}>
        <img src={srcImage} alt={imageName} />
      </figure>

      <PortfolioDescription onClik={handlePortfolioDescription} offsetY={offsetY} ItemName='Stay' ItemType='Personal website' />

      <div className={`portfolio-name-container ${showWebName}`}>

        <div className='portfolio-name-title'>

          <span onClick={openPortfolioItem}>{siteName}</span>

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
