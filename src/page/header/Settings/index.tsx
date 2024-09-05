import React, { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {Select, Form, Checkbox} from 'antd';
import { useGlobalContext } from 'contexts/GlobalContext';
import MarkSettings from './Mark.tsx';
import './settings.scss';

const { Option } = Select;

const Settings = () => {
  const { t, i18n } = useTranslation('header');
  const { globalSettings, changeGlobalSetting } = useGlobalContext();

  const changeLanguage = useCallback((e) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
    changeGlobalSetting('language', value);
  }, [i18n, changeGlobalSetting]);

  const changeOtherSetting = useCallback((e) => {
    const { checked, name } = e.target;
    changeGlobalSetting(name, checked);
  }, [changeGlobalSetting]);

  return (
    <div className="settings">
      <span className="setting-title">
        {t('settings title')}
      </span>
      <MarkSettings />
      <Form className="form">
        <Form.Item label={t('language')} className="form-item">
          <Select
            value={globalSettings.language}
            onChange={changeLanguage}
          >
            <Option value="en">English</Option>
            <Option value="zh">中文</Option>
          </Select>
        </Form.Item>

        <div className="form-item settings-title">其他</div>
        {[
          { name: 'disableInspectExportInner', label: t('exports inner selecting not allowed'), tip: t('exports inner selecting not allowed tip') },
          { name: 'disableInspectInComponent', label: t('disable inspect in component'), tip: t('disable inspect in component tip') },
          { name: 'notShowStyleProperties', label: t('do not show style properties'), tip: t('do not show style properties tip')}
        ].map(setting => (
          <Form.Item key={setting.name} className="form-item form-item-checkbox">
            <Checkbox
              name={setting.name}
              checked={globalSettings[setting.name]}
              onChange={e => changeOtherSetting(e, setting.name)}
            >
              {setting.label}
            </Checkbox>
            <div className="help-block">{setting.tip}</div>
          </Form.Item>
        ))}
      </Form>
      </div>
    );
  };
  
  export default memo(Settings);