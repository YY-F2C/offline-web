import React, { useCallback, memo } from 'react';
import InputNumber from 'rc-input-number';
import { useTranslation } from 'react-i18next';
import { Form, Select } from 'antd';
import { useGlobalContext } from 'contexts/GlobalContext';
import FormConfigProvider from 'contexts/FormConfigProvider';
import { ANDROID_DENSITY, IOS_DENSITY, NUMBER_FORMATS, PLATFORMS, UNITS, WEB_MULTIPLE } from 'utils/const';
import styles from './index.module.scss';

const resolutions = [WEB_MULTIPLE, IOS_DENSITY, ANDROID_DENSITY];
const { Option } = Select;

const MarkSettings = () => {
  const { t } = useTranslation('header');
  
  const { globalSettings, changeGlobalSetting } = useGlobalContext();
  
  const { platform, resolution, unit, remBase, numberFormat } = globalSettings;

  const calculateResolution = (name, value) => {
    if (name === 'platform') {
      return value === 2 ? 1 : 0;
    }
    if (name === 'unit' && (value === 3 || value === 4)) {
      return 0;
    }
    return resolution;
  };

  const calculateUnit = (name, value) => {
    if (name === 'platform') {
      return value === 0 ? 2 : value - 1;
    }
    return unit;
  };

  const handleChange = useCallback((value) => {
    const {platform} = value;
    
    // const { name, value } = e.target;
    // const changedSettings = {
    //   [name]: +value,
    // };
    // if (name !== 'resolution') {
    //   changedSettings.resolution = calculateResolution(name, +value);
    // }
    // if (name !== 'unit') {
    //   changedSettings.unit = calculateUnit(name, +value);
    // }
    changeGlobalSetting(value);
  },[]);

  const handleRemBaseChange = useCallback(value => {
    changeGlobalSetting({ remBase: value });
  },[]);

  // const baseVisible = platform === 0 && (unit === 3 || unit === 4);
  const unitMaps = [
    [2, 3, 4, 5],
    [0, 2],
    [1, 2],
  ]; // [Web, iOS, Android]

  return (
    <>
      <div className={styles.settingTip}>{t('settings mark')}</div>
      <FormConfigProvider>
        <Form
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
              <Select placeholder={t('platform placeholder')}>
              {PLATFORMS.map((platform, index) => (
                  <Option key={index} value={index}>
                      {platform}
                  </Option>
              ))}
              </Select>
          </Form.Item>

          <Form.Item label={platform === 0 ? t('multiple') : t('pixel density')} name="resolution">
              <Select disabled={unit === 3 || unit === 4}>
              {resolutions[platform].map((resolution, index) => (
                  <Option key={index} value={index}>
                  {resolution.label}
                  </Option>
              ))}
              </Select>
          </Form.Item>

          <Form.Item label={t('unit')} name="unit">
              <Select placeholder={t('unit placeholder')}>
              {unitMaps[platform].map(index => (
                  <Option key={index} value={index}>
                  {UNITS[index]}
                  {UNITS[index] === 'rpx' && t('miniprogram')}
                  </Option>
              ))}
              </Select>
          </Form.Item>

          {unit === 3 || unit === 4 ? (
              <Form.Item label={t('(r)em base')} name="remBase">
              <InputNumber
                  min={1}
                  max={100}
                  precision={0}
                  onChange={handleRemBaseChange}
              />
              </Form.Item>
          ) : null}
           <div className={styles.settingTip}>{t('format')}</div>
          <Form.Item label={t('number format')} name="numberFormat">
              <Select>
              {NUMBER_FORMATS.map((format, index) => (
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