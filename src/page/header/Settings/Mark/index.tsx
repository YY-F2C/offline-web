import React, { useCallback, memo } from 'react';
import InputNumber from 'rc-input-number';
import { useTranslation } from 'react-i18next';
import { Form, Select } from 'antd';
import { useGlobalContext } from 'contexts/GlobalContext';
import FormConfigProvider from 'contexts/FormConfigProvider';
import { ANDROID_DENSITY, IOS_DENSITY, NUMBER_FORMATS, PLATFORMS, UNITS, WEB_MULTIPLE } from 'utils/const';
import styles from './index.module.scss';

const resolutions = [WEB_MULTIPLE, IOS_DENSITY, ANDROID_DENSITY, IOS_DENSITY, ANDROID_DENSITY]
const { Option } = Select;

const MarkSettings = () => {
  const [form] = Form.useForm(); 
  const { t } = useTranslation('header');
  
  const { globalSettings, changeGlobalSetting } = useGlobalContext();
  
  const { platform, resolution, unit, remBase, numberFormat } = globalSettings;
  const calculateResolution = (name: string, value: number) => {
    
    if (name === 'platform') {
      form.setFieldsValue({
        resolution: (value === 2 || value === 4) ? 1 : 0
      })
      return (value === 2 || value === 4) ? 1 : 0
    }
    if (name === 'unit' && (value === 3 || value === 4)) {
      form.setFieldsValue({
        resolution: 0
      })
      return 0;
    }
    return resolution;
  };

  const calculateUnit = (name: string, value: number) => {
    const val = value > 2 ? value - 2 : value
    if (name === 'platform') {
      form.setFieldsValue({
        unit: value === 0 ? 2 : val - 1,
      })
      return value === 0 ? 2 : val - 1;
    }
    return unit;
  };

  const handleChange = useCallback((changedValues, allValues) => {
    // console.log(value, );
    // const {name} = value;
    // const { name, value } = e.target;
    const [name, value] = Object.entries(changedValues)[0];
    const changedSettings = {
      [name]: +value,
    };
    
    if (name !== 'resolution') {
      changedSettings.resolution = calculateResolution(name, +value);
    }
    if (name !== 'unit') {
      changedSettings.unit = calculateUnit(name, +value);
    }
    changeGlobalSetting({allValues, ...changedSettings});
  },[globalSettings]);

  const handleRemBaseChange = useCallback(value => {
    changeGlobalSetting({ remBase: value });
  },[]);

  const baseVisible = platform === 0 && (unit === 3 || unit === 4);
  const unitMaps = [
    [2, 3, 4, 5],
    [0, 2],
    [1, 2],
    [0, 2],
    [1, 2],
  ]; // [Web, iOS, Android, Muzhi IOS, Muzhi Android]

  return (
    <>
      <div className={styles.settingTip}>{t('settings mark')}</div>
      <FormConfigProvider>
        <Form
          form={form}
          colon={false}
          layout="horizontal"
          initialValues={{
              platform,
              resolution,
              unit,
              remBase,
              numberFormat,
          }}
          onValuesChange={handleChange}
          >
          <Form.Item label={t('settings platform')} name="platform">
              <Select 
                getPopupContainer={triggerNode => triggerNode.parentNode} 
                placeholder={t('platform placeholder')}
              >
              {PLATFORMS.map((platform: string, index: number) => (
                  <Option key={index} value={index}>
                      {platform}
                  </Option>
              ))}
              </Select>
          </Form.Item>

          <Form.Item label={platform === 0 ? t('multiple') : t('pixel density')} name="resolution">
              <Select
                getPopupContainer={triggerNode => triggerNode.parentNode}
                disabled={baseVisible}
              >
                {resolutions[platform].map((resolution: string, index: number) => (
                    <Option key={index} value={index}>
                    {resolution.label}
                    </Option>
                ))}
              </Select>
          </Form.Item>

          <Form.Item label={t('unit')} name="unit">
              <Select
                getPopupContainer={triggerNode => triggerNode.parentNode}
                placeholder={t('unit placeholder')}
              >
              {unitMaps[platform].map(index => (
                  <Option key={index} value={index}>
                  {UNITS[index]}
                  {UNITS[index] === 'rpx' && t('miniprogram')}
                  </Option>
              ))}
              </Select>
          </Form.Item>

          {baseVisible ? (
              <Form.Item label={t('(r)em base')} name="remBase">
              <InputNumber
                name="remBase"
                placeholder={t('(r)em base placeholder')}
                min={1}
                max={100}
                precision={0}
                value={remBase}
                onChange={handleRemBaseChange}
              />
              </Form.Item>
          ) : null}
           <div className={styles.settingTip}>{t('format')}</div>
          <Form.Item label={t('number format')} name="numberFormat">
              <Select getPopupContainer={triggerNode => triggerNode.parentNode}>
              {NUMBER_FORMATS.map((format: string, index: number) => (
                  <Option key={index} value={index}>
                  {t(format)}
                  </Option>
              ))}
              </Select>
          </Form.Item>
        </Form>
      </FormConfigProvider>
    </>
    
  
  );
};

export default memo(MarkSettings);