import {ChevronLeft, Settings} from 'react-feather'
import React, { memo, useMemo, Fragment } from "react"
import { useTranslation } from 'react-i18next';

import LangSetting from 'page/entry/LangSetting';

import Overlay from './Overlay'
import SettingsPanel from './Settings'

import './header.scss'

const Header = (props) => {
    const {
        pageName, 
        frameName,
        mode,
        documentName,
        isComponent,
        onBack,
    } = props;

    const { t } = useTranslation(); 
    
    const hasNames = useMemo(() => {
        return !!(pageName && frameName);
    }, [pageName, frameName]);

    const logoVisible = mode === 'local' ? true : !hasNames;

    return (
        <header className="app-header">
            <a className="header-logo" rel="noopener noreferrer" onClick={onBack}>
                <img src="https://med-fe.cdn.bcebos.com/f2c_offline/Frame%20298.png" alt="" />
            </a>
            {/* {logoVisible 
                ? (
                    <a className="header-logo" rel="noopener noreferrer">
                        <img src="https://med-fe.cdn.bcebos.com/f2c_offline/Frame%20298.png" alt="" />
                    </a>
                ) 
                : (
                    <span className="header-back" onClick={onBack}>
                        <ChevronLeft size={24} />
                    </span>
                )
            } */}
            {/* <span className="header-filename">{documentName}</span> */}
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
                : (
                    <span className="header-pagename">F2C Offline</span>
                )
            }
            <div className="header-operates">
                {hasNames && (
                    <Overlay overlay={<SettingsPanel />} overlayClassName="header-overlay header-overlay-settings">
                    <span title={t?.('settings')}>
                        <img src='https://med-fe.cdn.bcebos.com/f2c_offline/setting.png' alt=''/>
                    </span>
                    </Overlay>
                )}
            </div>
        </header>
    )
}

export default memo(Header)