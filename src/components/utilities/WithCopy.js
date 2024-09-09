import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import { Popover } from 'antd';
import {copySomething} from 'utils/helper'

const WithCopy = ({children, text, className, callback, props}) => {
  const [visible, setVisible] = useState(false)
  const { t } = useTranslation('utilities')
  
  const onCopied = () => {
    const timer = setTimeout(() => {
      setVisible(false)
      clearTimeout(timer)
    }, 1000)
  }
  const afterCopy = () => {
    setVisible(true)
    onCopied()
    callback && callback()
  }
  return (
    <Popover
      content={t('copied tip')}
      trigger="click"
      open={visible}
      arrow={false}
      {...props}
    >
      <span className={className} onClick={copySomething(text, afterCopy)}>
        {children}
      </span>
    </Popover>
  )
}

export default WithCopy
