import cn from 'classnames'
import React from 'react'
import {X} from 'react-feather'
import {withTranslation} from 'react-i18next'
import {Input} from 'antd';

function Search({visible, value, onChange, onClear, t}) {
  // function resetInput() {
  //   onClear()
  // }

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      onClear()
    }
  }
  
  return (
    <div className={cn('list-filter', {hide: !visible})}>
      <Input
        className="input"
        prefix={<img src='https://med-fe.cdn.bcebos.com/f2c_offline/f2c-search-icon.png' alt='' />}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={t('component placeholder')}
      />
      {/* {value && <X size={14} className="filter-clear" onClick={resetInput} />} */}
    </div>
  )
}

export default withTranslation('left')(Search)
