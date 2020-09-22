import React from 'react'

export const Icon = ({ onClick, classIcon1, classIcon2 }) => {
  return <i onClick={onClick} className={`${classIcon1} ${classIcon2}`} />
}
