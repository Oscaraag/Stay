
import React from 'react'
import { useShowMenu } from '../../hooks/useShowMenu'
import { HamburgerMenu } from '../HamburgerMenu'
import { HeaderNav } from '../HeaderNav/index'

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
          <HamburgerMenu MenuHandler={MenuHandler} isOpen={isOpen} />
          <HeaderNav setIsOpen={setIsOpen} showMenu={showMenu} setShowMenu={setShowMenu} />
        </nav>
      </header>
    </>
  )
}
