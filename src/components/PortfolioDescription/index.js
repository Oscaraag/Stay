import React from 'react'

export const PortfolioDescription = ({ onClik, ItemName, ItemType, offsetY }) => {
  return (
    <div onClick={onClik} style={{ transform: `translateY(-${offsetY * 0.05}px)` }} className='portfolio-description'>
      <h1>{ItemName}</h1>
      <h2>{ItemType}</h2>
    </div>
  )
}
