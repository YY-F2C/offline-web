import React from 'react';
import { ConfigProvider } from 'antd';

const TabsConfigProvider = ({ children, config={} }) => {
    const { 
        titleFontSize, 
    } = config;
    const tabsTheme = {
        components: {
            Tabs: {
                motion: false,
                algorithm: true,
                itemSelectedColor: '#00c8c8',
                inkBarColor: '#00c8c8',
                itemHoverColor: '#00c8c8',
                titleFontSize: titleFontSize || 12,
                horizontalItemPadding: '16px 20px 9px 20px',
                
            }
        }
    };
    
  return <ConfigProvider theme={tabsTheme}>{children}</ConfigProvider>;
};

export default TabsConfigProvider;