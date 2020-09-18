import React from 'react'
import { Link } from 'react-scroll'

export const HeaderNav = ({ showMenu, setShowMenu, setIsOpen }) => {
  const isVisibleHandler = () => {
    setShowMenu('hidden')
    setIsOpen(true)
  }

  return (
    <div className={`list ${showMenu} `}>
      <ul className='list-item'>
        <li>
          <Link
            onClick={isVisibleHandler}
            to='home'
          >Home
          </Link>
        </li>
        <li>
          <Link onClick={isVisibleHandler} to='about-me'>About me</Link>
        </li>
        <li>
          <Link onClick={isVisibleHandler} to='skills'>Skills</Link>
        </li>
        <li>
          <a onClick={isVisibleHandler} href='#'>Portfolio</a>
        </li>
      </ul>
    </div>

  )
}
