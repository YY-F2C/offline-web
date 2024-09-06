import React, { memo, useMemo, Fragment, useState, useCallback } from "react"
import {ChevronLeft, Settings} from 'react-feather'
import { useTranslation } from 'react-i18next';
import { Popover, Button } from 'antd';

import SettingsPanel from './Settings/index.tsx'

import styles from './index.module.scss'

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

    const [popVisible, setPopVisible] = useState(false);

    const handleVisibleChange = useCallback(() => {
        setPopVisible(prevPopVisible => !prevPopVisible);
      }, []);

    return (
        <header className={styles.header}>
            <a className={styles.logo} rel="noopener noreferrer" onClick={onBack}>
                <img src="https://med-fe.cdn.bcebos.com/f2c_offline/Frame%20298.png" alt="" />
            </a>
            <span className={styles.space} />
            {hasNames 
                ? (
                    <span className={styles.pagename}>
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
            <div>
                {hasNames && (
                <Popover
                    arrow={false}
                    className={styles.operates}
                    content={<SettingsPanel/>}
                    trigger="click"
                    open={popVisible}
                    placement="bottomRight"
                 >
                     <Button 
                        onClick={handleVisibleChange} 
                        className={styles.icon} 
                        type="text" 
                        icon={ <img src='https://med-fe.cdn.bcebos.com/f2c_offline/setting.png' alt=''/>} 
                        title={t?.('settings')} 
                    />
                 </Popover>
                )}
            </div>
        </header>
    )
}

export default memo(Header)