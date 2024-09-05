import cn from 'classnames';
import { memo, useCallback, useEffect, useState } from "react";
import { GitHub, Package } from 'react-feather';
import { useTranslation, withTranslation } from 'react-i18next';

import {getMockFile} from 'api';
import {getPagedFrames, getSelectedPagedFrames} from 'utils/frame';

import './entry.scss';

const Entry = memo((props: any) => {
    const { onDataGot, onComponentsOptionChange, backFromDemo } = props;

    const [coffeeVisible, setCoffeeVisible] = useState(false);
    const [isLoadingDemo, setIsLoadingDemo] = useState(false);

    const { t } = useTranslation('entry');

    const gotoDemo = useCallback(async (e?: any) => {
        e?.preventDefault();
        setIsLoadingDemo(true);

        const fileData = await getMockFile();
        
        const {components, styles, exportSettings} = fileData;
        const pagedFrames = getSelectedPagedFrames(getPagedFrames(fileData));

        onComponentsOptionChange && onComponentsOptionChange(true);
        setIsLoadingDemo(false);

        onDataGot && onDataGot(fileData, components, styles, exportSettings, pagedFrames)
    }, [onDataGot, onComponentsOptionChange])

    useEffect(() => {
        const {search} = window.location
        const urlParams = new URLSearchParams(search)
        const isDemo = urlParams.get('demo')
        if (isDemo && !backFromDemo) {
            gotoDemo();
        }
    })

    return (
        <div className="app-entry">
            <div className="entry-container">
            <div className="entry-logo">
                <img src='https://med-fe.cdn.bcebos.com/f2c_offline/Frame%20298.png' />
            </div>
            <div className={cn('entry-main', {hide: coffeeVisible})}>
                <p>{t('use plugin description')}</p>
                <div className="main-buttons">
                <a
                    className="btn btn-lg btn-primary btn-round"
                    href="https://www.figma.com/community/plugin/1248187540929489451/f2c-figma-to-code-react-rn-vue-html-yy-d2c"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Package size={16} /> {t('start now')}
                </a>
                <button className="btn btn-lg btn-black-o btn-round" onClick={gotoDemo} disabled={isLoadingDemo}>
                    {isLoadingDemo ? t('demo loading') : t('demo')}
                </button>
                <a
                    className="btn btn-lg btn-black-o btn-round"
                    href="https://github.com/YY-F2C/offline-web"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub size={14} /> GITHUB
                </a>
                </div>
            </div>
            </div>
        </div>
    )
})

export default Entry;
