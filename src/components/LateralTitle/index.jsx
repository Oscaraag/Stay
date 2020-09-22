import React from 'react'

export const LateralTitle = ({ LateralTitle, classNameContainer, classNameH1 }) => {
  return (
    <div className={classNameContainer}>
      <span className={classNameH1}>{LateralTitle}</span>

    </div>
  )
}
