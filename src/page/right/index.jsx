import React, { useState, useEffect, useMemo, Fragment } from 'react'
import cn from 'classnames'
import { CollapseButton } from 'components/utilities'
import { withGlobalContextConsumer } from 'contexts/GlobalContext'
import TabsConfigProvider from 'contexts/TabsConfigProvider'
import { useTranslation } from 'react-i18next';
import NoElements from './NoElements'
import Slicing from './Slicing'
import {STYLE_TYPES} from 'utils/const'
import { Tabs, TabPane, Layout} from 'antd';
import {asyncForEach, getImageUrl, isAllImageFill} from 'utils/helper'
import {ExportItem, StyleItem} from './items'
import RightPanel from './Panel'
import StyleDetail from './PanelDetail'
import Mark from './Mark'
import './index.scss'

const {Sider} = Layout;

const Right = (props) => {
  const [detailVisible, setDetailVisible] = useState(false)
  const [styleDetail, setStyleDetail] = useState({})
  const [propsPanelState, setPropsPanelState] = useState('leaved')

  const toggleDetail = () => {
    setDetailVisible(!detailVisible)
  }

  const openStyleDetail = (styleDetail) => {
    setStyleDetail(styleDetail)
    toggleDetail()
  }

  const handlePropsPanelAnimationEnd = () => {
    if (propsPanelState === 'entering' || propsPanelState === 'leaving') {
      const newState = propsPanelState === 'entering' ? 'entered' : 'leaved'
      setPropsPanelState(newState)
      if (newState === 'leaved') {
        props.onPropsPanelLeave && props.onPropsPanelLeave()
      }
    }
  }
  const { t } = useTranslation('right'); 
  useEffect(() => {
    if (!props.prevHasElementSelected && props.hasElementSelected) {
      setPropsPanelState('starting')
      setTimeout(() => {
        setPropsPanelState('entering')
      }, 10)
    }

    if (props.prevHasElementSelected && !props.hasElementSelected) {
      setPropsPanelState('leaving')
      if (detailVisible) {
        toggleDetail()
      }
    }
  }, [props.hasElementSelected, props.prevHasElementSelected, detailVisible])

  const {
    mode,
    isMock,
    styles,
    elementData,
    exportSettings,
    documentName,
    closestComponent,
    currentExportIds,
    currentIndex,
    onSiderTransitionEnd,
    versionData,
    globalSettings,
  } = props
  const { rightCollapse } = globalSettings

  const onChange = (key) => {
    console.log(key);
  };

  const buildMark = useMemo(() => {
    return elementData ? 
      <Mark
        mode={mode}
        isMock={isMock}
        elementData={elementData}
        closestComponent={closestComponent}
        styles={styles}
        exportSettings={exportSettings}
        currentExportIds={currentExportIds}
        currentIndex={currentIndex}
        propsPanelState={propsPanelState}
        onPropsPanelTransitionEnd={handlePropsPanelAnimationEnd}
        detailVisible={detailVisible}
        onCloseDetail={toggleDetail}
        onShowDetail={openStyleDetail}
      />
    : <NoElements />
  }, [elementData]);

  return (
    <div className="right">
      <TabsConfigProvider>
      <Layout>
        <Sider width="240px" style={{ backgroundColor: '#FFFFFF', overflowY: 'initial'}} trigger={null}>
          <Tabs
              indicator={{ size: (origin) => origin - 20}} 
              centered 
              defaultActiveKey="1" 
              onChange={onChange} 
            >
              <TabPane tab="标注" key="1">
                {buildMark}
              </TabPane>
              <TabPane tab="切图" key="2">
                <Slicing
                  mode={mode}
                  isMock={isMock}
                  styles={styles}
                  exportSettings={exportSettings}
                  documentName={documentName}
                  propsPanelState={propsPanelState}
                  onShowDetail={openStyleDetail}
                  versionData={versionData}
                />
                </TabPane>
          </Tabs>
        </Sider>
      </Layout>
      </TabsConfigProvider>
    </div>
  )
}

export default withGlobalContextConsumer(Right)