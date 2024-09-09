import {withGlobalContextConsumer} from 'contexts/GlobalContext'
import React, {useState, useEffect} from 'react'
import FormConfigProvider from 'contexts/FormConfigProvider';
import { Select } from 'antd'
import {ANDROID_COLOR_FORMATS, COLOR_FORMATS} from 'utils/const'
// import './color-format-select.scss'

const {Option} = Select;

const ColorFormatSelect = ({globalSettings, changeGlobalSetting}) => {
  const [colorFormat, setColorFormat] = useState(globalSettings.colorFormat || 0)
  const changeColorFormat = (value) => {
    setColorFormat(value)
    changeGlobalSetting && changeGlobalSetting('colorFormat', value)
  }

  useEffect(() => {
    setColorFormat(globalSettings.colorFormat)
  }, [globalSettings.colorFormat])

  const {platform} = globalSettings

  return (
    <FormConfigProvider config={{selectorBg: 'none'}}>
      <Select value={colorFormat} onChange={changeColorFormat}>
      {(platform === 2 ? ANDROID_COLOR_FORMATS : COLOR_FORMATS).map((format, index) => (
        <Option key={index} value={index}>
          {format}
        </Option>
      ))}
    </Select>
    </FormConfigProvider>

  )
}

export default withGlobalContextConsumer(ColorFormatSelect)
