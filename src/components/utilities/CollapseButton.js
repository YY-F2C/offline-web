import cn from 'classnames'
import {withGlobalContextConsumer} from 'contexts/GlobalContext'
import React from 'react'
import {ChevronLeft, ChevronRight} from 'react-feather'
import {withTranslation} from 'react-i18next'
import './collapse-button.scss'

const CollapseButton = ({placement = 'left', globalSettings, changeGlobalSetting, t}) => {
  const isLeft = placement === 'left'
  const {leftCollapse, rightCollapse} = globalSettings
  const collapsed = isLeft ? leftCollapse : rightCollapse

  const toggleCollapse = () => {
    changeGlobalSetting(isLeft ? 'leftCollapse' : 'rightCollapse', !collapsed)
  }

  return (
    <button
      className={cn('collapse-button', `collapse-button-${placement}`)}
      onClick={toggleCollapse}
      title={t(`hide ${placement} sider`)}
    >
      {collapsed ? (
        isLeft ? (
          <ChevronRight size={16} />
        ) : (
          <ChevronLeft size={16} />
        )
      ) : isLeft ? (
        <ChevronLeft size={16} />
      ) : (
        <ChevronRight size={16} />
      )}
    </button>
  )
}

export default withGlobalContextConsumer(withTranslation('common')(CollapseButton))
