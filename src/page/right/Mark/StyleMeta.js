import {CopiableInput} from 'components/utilities'
import React from 'react'
import {withTranslation} from 'react-i18next'

const StyleMeta = ({nodeStyles, type, t}) => {
  return (
    <ul className="section-items section-items-fill">
      <li className="item-block">
        <CopiableInput isQuiet labelWidth={60} label={t('style name')} value={nodeStyles[type].name} />
      </li>
      {nodeStyles[type].description && (
        <li className="item-block">
          <CopiableInput isQuiet labelWidth={60} label={t('style description')} value={nodeStyles[type].description} />
        </li>
      )}
    </ul>
  )
}

export default withTranslation('right')(StyleMeta)
