import Tooltip from 'rc-tooltip';
import React, { memo, useCallback } from 'react'
import {Globe} from 'react-feather';
import { useTranslation } from 'react-i18next';

import { useGlobalContext } from 'contexts/GlobalContext';

const languages = {
  en: 'English',
  zh: '中文',
}

const LangSetting = (props: any) => {
    const {placement = 'top'} = props;

    const { i18n } = useTranslation();
    const { globalSettings, changeGlobalSetting } = useGlobalContext();
    const {language} = globalSettings

    const changeLanguage = useCallback((e: any) => {
      const {value} = e?.target || {};

      i18n.changeLanguage(value)
      changeGlobalSetting('language', value)
    }, [i18n, changeGlobalSetting])

    return (
      <Tooltip overlay="Change Language" placement={placement} align={{offset: [0, 3]}}>
        <a className="footer-language" onClick={e => e.preventDefault()} href="/">
          <select value={language} onChange={changeLanguage}>
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
          <Globe size={14} />
          {/* @ts-ignore */}
          <span>{languages[language]}</span>
        </a>
      </Tooltip>
    );
}

export default memo(LangSetting);
