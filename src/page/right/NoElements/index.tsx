import React, {memo} from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module'

const NoElements = () => {
    const { t } = useTranslation('right');
    // console.log(t?.('no choose layer'));
    
    return (
        <div className={styles.noElements}>
            <div>
                <img className={styles.icon} src="https://med-fe.cdn.bcebos.com/f2c_offline/f2c_noElements_icon.png" alt="" />
            </div>
            <div className={styles.noLayer}>{t?.('no choose layer')}</div>
            <div className={styles.clickLayer}>{t?.('click left layer')}</div>
        </div>
    )
}

export default memo(NoElements);


