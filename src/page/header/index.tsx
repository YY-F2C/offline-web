import React, { memo, useMemo, Fragment } from "react"
import {ChevronLeft, Settings} from 'react-feather'
import { useTranslation } from 'react-i18next';
import { Popover, Button } from 'antd';
import LangSetting from 'page/entry/LangSetting';

import Overlay from './Overlay'
import SettingsPanel from './Settings/index.tsx'

import './header.scss'

const Header = (props: any) => {
    const {
        pageName, 
        frameName,
        isComponent,
        onBack,
    } = props;

    const { t } = useTranslation('header'); 
    
    const hasNames = useMemo(() => {
        return !!(pageName && frameName);
    }, [pageName, frameName]);

    return (
        <header className="app-header">
            <a className="header-logo" rel="noopener noreferrer" onClick={onBack}>
                <img src="https://med-fe.cdn.bcebos.com/f2c_offline/Frame%20298.png" alt="" />
            </a>
            <span className="header-space" />
            {hasNames 
                ? (
                    <span className="header-pagename">
                        {!isComponent && (
                        <Fragment>
                            {pageName}
                            <span> / </span>
                        </Fragment>
                        )}
                        {frameName}
                    </span>
                )
                : null
            }
            <div className="header-operates">
                {hasNames && (
                <Popover
                     content={<SettingsPanel/>}
                     trigger="click"
                     placement="bottomRight"
                     overlayClassName="header-overlay"
                 >
                     <Button type="link" icon={ <img src='https://med-fe.cdn.bcebos.com/f2c_offline/setting.png' alt=''/>} title={t?.('settings')} />
                 </Popover>
                )}
            </div>
        </header>
    )
}

export default memo(Header)