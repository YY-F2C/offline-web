import { Button } from 'antd'
import {withGlobalContextConsumer} from 'contexts/GlobalContext'
import React, { useCallback, useMemo } from 'react'
import { MUZHI_PADDING_Android, MUZHI_PADDING_IOS } from 'src/utils/const'
import {toMarkPercentage} from 'utils/mark'
import {formattedNumber} from 'utils/style'

const Dimension = ({whichSide, actualSize, percentageMode, closedCommonParent, pageRect, globalSettings, selectedFontSize, isShow = false}) => {
  // const selectedFontSizeAndroid = selectedFontSize  * 1080 / 1242;
  
  const diffSize = useMemo(() => {
    let diff = 0;
    if (whichSide === 'width') {
      diff = 0;
    } else {
      const {platform, paddingFormat} = globalSettings;
      if(paddingFormat) {
        if(platform === 1 || platform === 3) {
          diff = (MUZHI_PADDING_IOS[selectedFontSize]?.top || 0) + (MUZHI_PADDING_IOS[selectedFontSize]?.bottom || 0);
        }else if(platform === 2 || platform === 4) { 
          diff = (MUZHI_PADDING_Android[selectedFontSize]?.top || 0) + (MUZHI_PADDING_Android[selectedFontSize]?.bottom || 0);
        }
      }
    }
    return diff;
  },[globalSettings, selectedFontSize])
  
  return (
    isShow?
    <div className={`layer-sizing layer-${whichSide}`}>
      {!!percentageMode && closedCommonParent
        ? percentageMode === 'auto'
          ? toMarkPercentage((actualSize + diffSize) / closedCommonParent[whichSide])
          : toMarkPercentage((actualSize + diffSize) / pageRect[whichSide])
        : formattedNumber(actualSize, {...globalSettings, diffSize})}
    </div> : null
  )
}
export default withGlobalContextConsumer(Dimension)
