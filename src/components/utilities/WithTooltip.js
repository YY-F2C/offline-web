import Tooltip from 'rc-tooltip'
import React from 'react'

const WithTooltip = ({yes, tooltipProps, children}) =>
  yes ? <Tooltip {...tooltipProps}>{children}</Tooltip> : children

export default WithTooltip
