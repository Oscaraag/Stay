import { useState } from 'react'

export const useShowMenu = () => {
  const [showMenu, setShowMenu] = useState('')
  const [isOpen, setIsOpen] = useState(true)

  return { showMenu, setShowMenu, isOpen, setIsOpen }
}
