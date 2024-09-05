import Tooltip from 'rc-tooltip'
import React from 'react'

const Overlay = ({children, ...props}) => (
  <Tooltip
    trigger={['click']}
    overlayStyle={{width: 320}}
    align={{
      offset: [30, -14],
    }}
    placement="bottomRight"
    showArrow={false}
    transitionName="rc-tooltip-slide"
    {...props}
  >
    {children}
  </Tooltip>
)

export default Overlay
