import React, { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {Select, Form, Checkbox} from 'antd';
import { useGlobalContext } from 'contexts/GlobalContext';
import MarkSettings from './Mark/index';
import FormConfigProvider from 'contexts/FormConfigProvider';
import styles from './index.module.scss'

const { Option } = Select;



const Settings = () => {
  const { t, i18n } = useTranslation('header');
  const { globalSettings, changeGlobalSetting } = useGlobalContext();

  const changeLanguage = useCallback((value) => {
    console.log(value, ' changeLanguage value');
    i18n.changeLanguage(value);
    changeGlobalSetting('language', value);
  }, [i18n, changeGlobalSetting]);

  const changeOtherSetting = useCallback((e) => {
    const {checked, name} = e.target
    changeGlobalSetting(name, checked);
  }, [changeGlobalSetting]);

  return (
    <div className={styles.settings}>
      <div className={styles.title}>
        {t('settings title')}
      </div>
      <MarkSettings />
      <FormConfigProvider>
        <Form>
          <Form.Item label={t('language')}>
            <Select
              value={globalSettings.language}
              onChange={changeLanguage}
            >
              <Option value="en">English</Option>
              <Option value="zh">中文</Option>
            </Select>
          </Form.Item>

          <div className={styles.settingTip}>其他</div>
          {[
            { name: 'disableInspectExportInner', label: t('exports inner selecting not allowed'), tip: t('exports inner selecting not allowed tip') },
            { name: 'disableInspectInComponent', label: t('disable inspect in component'), tip: t('disable inspect in component tip') },
            { name: 'notShowStyleProperties', label: t('do not show style properties'), tip: t('do not show style properties tip')}
          ].map(setting => (
            <Form.Item key={setting.name}>
              <Checkbox
                name={setting.name}
                checked={globalSettings[setting.name]}
                onChange={e => changeOtherSetting(e, setting.name)}
              >
                <span className={styles.settingLabel}>{setting.label}</span>
              </Checkbox>
              <div className={styles.settingLabelTip}>{setting.tip}</div>
            </Form.Item>
          ))}
        </Form>
      </FormConfigProvider>
    </div>
    );
  };
  
  export default memo(Settings);