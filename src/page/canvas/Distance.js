import React, {Fragment} from 'react'
import {toMarkPercentage, toPercentage} from 'utils/mark'
import {formattedNumber} from 'utils/style'
import './distance.scss'

const Distance = ({distanceData, globalSettings, percentageMode, pageRect, closedCommonParent}) => {
  return distanceData && distanceData.length ? (
    <Fragment>
      {distanceData.map((distance, index) => {
        const isVertical = !!distance.h
        const size = isVertical ? {height: toPercentage(distance.h)} : {width: toPercentage(distance.w)}
        const whichSide = isVertical ? 'height' : 'width'
        // todo distance top需细微调整
        return (
          <div
            key={index}
            className={`mark-distance mark-distance-${isVertical ? 'v' : 'h'}`}
            style={{
              left: toPercentage(distance.x),
              top: toPercentage(distance.y),
              ...size,
            }}
          >
            <div className="mark-distance-sizing">
              {!!percentageMode
                ? percentageMode === 'auto'
                  ? toMarkPercentage(distance.distance / closedCommonParent[whichSide])
                  : toMarkPercentage(distance.distance / pageRect[whichSide])
                : formattedNumber(distance.distance, {...globalSettings, diffSize: distance.diff})}
            </div>
          </div>
        )
      })}
    </Fragment>
  ) : null
}

export default Distance
