import cn from 'classnames'
import React from 'react'
import './input-group.scss'

const InputGroup = ({children, className, isQuiet = false, onWrapperClick}) => {
  return (
    <span className={cn('input-group', className, {'input-group-quiet': isQuiet})} onClick={onWrapperClick}>
      {children}
    </span>
  )
}

export default InputGroup
