
import React from 'react'
import { useShowMenu } from '../../hooks/useShowMenu'

import './styles.scss'

export const Header = () => {
  const { showMenu, setShowMenu, isOpen, setIsOpen } = useShowMenu()
  const MenuHandler = () => {
    setIsOpen(!isOpen)
    isOpen ? setShowMenu('display') : setShowMenu('hidden')
  }

  return (
    <>
      <header>
        <nav>
          <div onClick={MenuHandler} className={`hamburger ${isOpen}`}>
            <div className='hamburger-line' />
          </div>
          <div className={`list ${showMenu}`}>
            <ul className='list-item'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About me</a>
              </li>
              <li>
                <a href='#'>Skills</a>
              </li>
              <li>
                <a href='#'>Portfolio</a>
              </li>
            </ul>
          </div>

        </nav>
      </header>
    </>
  )
}
