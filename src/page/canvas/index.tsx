import cn from 'classnames'
import { WithCopy } from 'components/utilities'
import { withGlobalContextConsumer } from 'contexts/GlobalContext'
import React, { useEffect, useState } from 'react'
import { Copy } from 'react-feather'
import { calculateMarkData, generateRects, toPercentage } from 'utils/mark'
import Dimension from './Dimension'
import Distance from './Distance'
import Ruler from './Ruler'
import './canvas.scss'
import canvasWrapper from './canvasWrapper'
import useBearStore from '../../store'
import { IPageRect, IRectNode } from '../../types'
import { MUZHI_PADDING_Android, MUZHI_PADDING_IOS,WEB_MULTIPLE } from 'src/utils/const'
import { Button, Form } from 'antd'

const resolutions = [WEB_MULTIPLE, WEB_MULTIPLE, WEB_MULTIPLE, WEB_MULTIPLE, WEB_MULTIPLE]
export interface CanverProps{
  currentImageUrl:string
  canvasData: any
  id: string
  elementData: any
  onSelect: any
  onDeselect: any
  onGetExports: any
  siderCollapseFlag: any,
  globalSettings: any,
  size: any,
  percentageMode: any
  frameBound: any
  spacePressed: any
} 

function Canvas(props: CanverProps){
    
    // const [isLoading, setIsLoading] = useState( false)
    const [rects, setRects] = useState<IRectNode[]>([])
    const [pageRect, setPageRect] = useState<IPageRect>( {height: '', width: ''})
    const [selectedRect, setSelectedRect] = useState( null)
    const [selectedIndex, setSelectedIndex] = useState( 0)
    const [hoveredRect, setHoveredRect] = useState( null)
    const [hoveredIndex, setHoveredIndex] = useState( null)
    const [markData, setMarkData] = useState( {})
    const [isChanging, setIsChanging] = useState( false)
    const [closedCommonParent, setClosedCommonParent] = useState( null)
    const [closedCommonParentPath, setClosedCommonParentPath] = useState( '')
    const [closestComponentIndex, setClosestComponentIndex] = useState( undefined)
    const [closestComponent, setClosestComponent] = useState( null)
   const resetMark = () => {
      setClosestComponentIndex( undefined)
      setClosestComponent( null)
      setSelectedRect( null)
      setSelectedIndex( 0)
      setHoveredRect( null)
      setHoveredIndex( null)
      setMarkData( {})
      setClosedCommonParent( null)
      setClosedCommonParentPath( '')
  }
  const generateMark = () => {
    const {canvasData, onGetExports, globalSettings} = props
    const {absoluteBoundingBox: pageRect} = canvasData
    const {rects, exportIds} = generateRects([canvasData], pageRect, globalSettings)
    onGetExports && onGetExports(exportIds)
    setRects(rects);
    setPageRect(pageRect)
  }
  const getBound = () => {
    const {frameBound} = props
    const {top, bottom, left, right} = frameBound
    const frameStyle = {
      top: toPercentage(top / (pageRect.height + top + bottom)),
      left: toPercentage(left / (pageRect.width + left + right)),
      height: toPercentage(pageRect.height / (pageRect.height + top + bottom)),
      width: toPercentage(pageRect.width / (pageRect.width + left + right)),
    }
    return frameStyle
  }
  // 改变选中后的高度和top值
  const getLayerBoundStyle = rect => {
    let {top, left, width, height} = rect.maskedBound || rect 
    const {platform, paddingFormat, resolution} = globalSettings;
    
    const selectedFontSize = rect?.node?.style?.fontSize * resolutions[platform][resolution].value
    
    if(paddingFormat && selectedFontSize) {
      if((platform === 1 || platform === 3) && MUZHI_PADDING_IOS[selectedFontSize]) {
        top -= (MUZHI_PADDING_IOS[selectedFontSize].top || 0)
        height += (MUZHI_PADDING_IOS[selectedFontSize].top + MUZHI_PADDING_IOS[selectedFontSize].bottom)
      }else if((platform === 2 || platform === 4) && MUZHI_PADDING_Android[selectedFontSize]) {
        top -= (MUZHI_PADDING_Android[selectedFontSize].top || 0)
        height += (MUZHI_PADDING_Android[selectedFontSize].top + MUZHI_PADDING_Android[selectedFontSize].bottom)
      }
    }
    
    return {
      top: toPercentage(top / pageRect.height),
      left: toPercentage(left / pageRect.width),
      width: toPercentage(width / pageRect.width),
      height: toPercentage(height / pageRect.height),
    }
  }
  const getMaskedLayerHoveredBoundStyle = type => {
    const {top, left, width, height} = type === 'selected' ? selectedRect : hoveredRect
    return {
      top: toPercentage(top / pageRect.height),
      left: toPercentage(left / pageRect.width),
      width: toPercentage(width / pageRect.width),
      height: toPercentage(height / pageRect.height),
    }
  }
  const getActiveAndMaskedType = index => {
    if (index === selectedIndex && selectedRect && selectedRect.maskedBound) {
      return 'selected'
    } else if (index === hoveredIndex && hoveredRect && hoveredRect.maskedBound) {
      return 'hovered'
    }
    return false
  }
  const getClosedCommonParent = (hoveredRect, selectedRect) => {
    if (!hoveredRect || !selectedRect) {
      return {closedCommonParentPath: [], closedCommonParent: null}
    }
    if (hoveredRect.index === selectedRect.index) {
      let closedCommonParent
      if (hoveredRect.index === 0) {
        closedCommonParent = hoveredRect
      } else {
        const indexedPaths = [...hoveredRect.paths]
        indexedPaths.pop()
        closedCommonParent = rects.filter(({paths}) => paths.join('-') === indexedPaths.join('-'))[0]
      }
      return {
        closedCommonParentPath: closedCommonParent.paths,
        closedCommonParent,
      }
    }
    const closedCommonParentPath: any[] = []
    const hoveredPaths = hoveredRect.paths
    const selectedPaths = selectedRect.paths
    const sortedPaths = [hoveredPaths, selectedPaths].sort((a, b) => a.length - b.length)
    const [shorterOne, longerOne] = sortedPaths
    let i = 0
    while (i < shorterOne.length) {
      if (shorterOne[i] === longerOne[i]) {
        closedCommonParentPath.push(shorterOne[i])
      } else {
        break
      }
      i++
    }
    const closedCommonParent = rects.filter(({paths}) => paths.join('-') === closedCommonParentPath.join('-'))[0]
    return {closedCommonParentPath, closedCommonParent}
  }
  const isPercentageHighlight = (rect, index) => {
    if (percentageMode === 'auto') {
      return closedCommonParentPath === rect.paths.join('-')
    }
    if (percentageMode === 'root') {
      return index === 0 && selectedRect && hoveredRect
    }
    return false
  }
  const selectMask = rect => {
    if (!rect.maskedBound) {
      return
    }
    const {maskIndex} = rect.maskedBound
    onSelect(rects[maskIndex], maskIndex)
  }
  // get closest parent component to highlight
  const getClosestComponent = closestComponentIndex => {
    const hasIndex = closestComponentIndex !== undefined
    let closestComponent
    if (hasIndex) {
      const {node} = rects[closestComponentIndex]
      const {variantProperties} = node
      if (node.type === 'COMPONENT') {
        const {name, description} = node
        closestComponent = {name, description, variantProperties}
      } else {
        const {name, description} = node.mainComponent
        closestComponent = {name, description, variantProperties}
      }
    } else {
      closestComponent = null
    }
    return closestComponent
  }
  const onSelect = (rect, index: number) => {
    if (props.spacePressed) return
    const {closestComponentIndex} = rect
    const closestComponent = getClosestComponent(closestComponentIndex)
    props.onSelect && props.onSelect(rect, index, closestComponent)

    if (hoveredIndex === index) {
      const {closedCommonParentPath, closedCommonParent} = getClosedCommonParent(hoveredRect, rect)
     
        setClosedCommonParentPath(closedCommonParentPath.join('-'))
        setClosedCommonParent(closedCommonParent)
    }

      setSelectedRect( rect)
      setSelectedIndex( index)
      setClosestComponentIndex(closestComponentIndex)
      setClosestComponent(closestComponent)
  }
  const onHover = (rect, index) => {
    const {platform, paddingFormat, resolution} = globalSettings
    const selectedFontSize = (elementData?.node?.style?.fontSize || 0) * resolutions[platform][resolution].value;
    
    const markData = calculateMarkData(selectedRect, rect, pageRect, {platform, paddingFormat, selectedFontSize})
    const {closedCommonParentPath, closedCommonParent} = getClosedCommonParent(rect, selectedRect)
      setHoveredRect(rect)
      setHoveredIndex(index)
      setMarkData(markData)
      setClosedCommonParentPath(closedCommonParentPath.join('-'))
      setClosedCommonParent(closedCommonParent)
  }
  const onLeave = () => {
      setHoveredRect(null)
      setHoveredIndex(null)
      setMarkData({})
      setClosedCommonParentPath('')
      setClosedCommonParent(null)
  }
  const handleImgLoaded = () => {
    setIsChanging(false)
  }
  const customInspectDisabledClass = node => {
    const {disableInspectFunction} = globalSettings
    return disableInspectFunction && disableInspectFunction(node)
  }

  useEffect(() =>{
    generateMark()

  }, [])

  useEffect(() =>{
    const sub = useBearStore.subscribe((state, prevState) => {
      const index = rects.findIndex(rect => rect.id == state.selectedNodeId)
      if(index > -1) {
        onSelect(rects[index], index)
      }
    })
    return () => sub()
  }, [rects, onSelect])
  

  const { elementData, id, currentImageUrl, globalSettings, size, percentageMode } = props;
  // 处理 elementData 变化
  useEffect(() => {
    if (!elementData) {
      resetMark();
    }
  }, [elementData]);

  // 处理 id 或 currentImageUrl 变化
  useEffect(() => {
    setIsChanging(true);
    resetMark();
    generateMark();
  }, [id, currentImageUrl]);

  // 处理 globalSettings 变化
  useEffect(() => {
    resetMark();
    generateMark();
  }, [globalSettings.disableInspectInComponent, globalSettings.disableInspectExportInner]);
  
    const {disableInspectInComponent, platform, resolution} = globalSettings
    const frameStyle = getBound()
    const selectedFontSize = (elementData?.node?.style?.fontSize || 0) * resolutions[platform][resolution].value;

    // 选中不需要hover直接展示尺寸
    const isDimensionShow = () => {
      let isShow = false;
      if(!selectedIndex && hoveredIndex){
        isShow = false;
      }else if(selectedIndex === 0 && !hoveredIndex){
        isShow = true;
      }else if( selectedIndex && hoveredIndex === 0 ){
        isShow = false;
      }else if(selectedIndex && !hoveredIndex){
        isShow = true;
      }else if(selectedIndex && hoveredIndex && selectedIndex !== hoveredIndex){
        isShow = false;
      }else if(selectedIndex && hoveredIndex && selectedIndex === hoveredIndex){
        isShow = true;
      }
      return isShow;
    }

    return (
      <div className="container-mark" onMouseLeave={onLeave}>
        <div
          className={cn('mark-layers', {
            'mark-layers-exports-visible': selectedIndex === 0,
          })}
          style={frameStyle}
        >
          {rects[0] && !rects[0].isComponent && (
            <div className="mark-artboard-name" onClick={() => onSelect(rects[0], 0)}>
              {rects[0].title}
            </div>
          )}
          {selectedIndex !== null && selectedIndex !== hoveredIndex && <Ruler rulerData={markData.rulerData} />}
          {rects.map((rect, index) => {
            const {clazz, isComponent} = rect
            const activeAndMaskedType = getActiveAndMaskedType(index)

            const style = activeAndMaskedType
              ? getMaskedLayerHoveredBoundStyle(activeAndMaskedType)
              : getLayerBoundStyle(rect)
            return (
              <div
                key={index}
                className={cn('layer', ...clazz, {
                  selected: selectedIndex === index,
                  hovered: hoveredIndex === index && hoveredIndex !== selectedIndex,
                  'closest-component': closestComponentIndex === index,
                  'component-inspect-disabled': disableInspectInComponent && isComponent,
                  'custom-inspect-disabled': customInspectDisabledClass(rect.node),
                  'percentage-highlight': isPercentageHighlight(rect, index),
                })}
                style={style}
                onClick={() => onSelect(rect, index)}
                onDoubleClick={() => selectMask(rect)}
                onMouseOver={() => onHover(rect, index)}
              >
                {isComponent && closestComponentIndex === index && (
                  <div className="layer-component">
                    <WithCopy text={closestComponent.name} className="component-copy">
                      {closestComponent.name}
                      <Copy size={12} />
                    </WithCopy>
                  </div>
                )}
                {['width', 'height'].map(whichSide => (
                  <Dimension
                    selectedFontSize={selectedFontSize}
                    key={whichSide}
                    whichSide={whichSide}
                    actualSize={whichSide === 'width' ? rect.actualWidth : rect.actualHeight}
                    percentageMode={percentageMode}
                    closedCommonParent={closedCommonParent}
                    pageRect={pageRect}
                    isShow={isDimensionShow()}
                  />
                ))}
              </div>
            )
          })}
          {selectedIndex !== hoveredIndex && (
            <Distance
              distanceData={markData.distanceData}
              globalSettings={globalSettings}
              percentageMode={percentageMode}
              pageRect={pageRect}
              closedCommonParent={closedCommonParent}
            />
          )}
        </div>
        <img
          src={currentImageUrl}
          alt="frame"
          style={{
            width: size.width,
            height: size.height,
            opacity: isChanging ? 0 : 1,
          }}
          onLoad={handleImgLoaded}
        />
      </div>
    )
}

export default canvasWrapper(withGlobalContextConsumer(Canvas))
