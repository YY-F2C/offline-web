import React from 'react';
import { ConfigProvider } from 'antd';

const FormConfigProvider = ({ children, config = {} }) => {
    const {selectorBg} = config;
    const formTheme = {
        token: {
            controlOutline: 'none',
            colorPrimaryHover: 'none',
        },
        components: {
            Form: {
                labelFontSize: 12,
                itemMarginBottom: 12,
            },
            Select: {
                colorBorder: 'none',
                colorPrimary: 'none',
                fontSize: 12,  
                selectorBg: selectorBg || '#f5f6fa',
                optionFontSize: 12,
                optionSelectedBg: '#b0eeee',
                optionActiveBg: '#e6fafa',
            },
        },
    };
  return <ConfigProvider theme={formTheme}>{children}</ConfigProvider>;
};

export default FormConfigProvider;