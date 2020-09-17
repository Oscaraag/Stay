import React from 'react'

export const HamburgerMenu = ({ MenuHandler, isOpen }) => {
  return (
    <div onClick={MenuHandler} className={`hamburger ${isOpen}`}>
      <div className='hamburger-line' />
    </div>
  )
}
