import Tooltip from 'rc-tooltip'
import React from 'react'
import { Popover } from 'antd';

const WithTooltip = ({yes, tooltipProps, children}) =>{
  const {visible, overlay } = tooltipProps;
  return yes ? 
    <Popover 
      open={visible} 
      content={overlay} 
      arrow={false}
      {...tooltipProps}
    >
      {children}
    </Popover> : children
}
 

export default WithTooltip
