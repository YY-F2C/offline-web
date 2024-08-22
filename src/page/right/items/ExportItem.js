import {getBlobData} from 'api'
import cn from 'classnames'
import {saveAs} from 'file-saver'
import React, {useState} from 'react'
import {Download, ExternalLink, Loader} from 'react-feather'
import {getImageUrl} from 'utils/helper'
import './export-item.scss'
import useBearStore from '../../../store'

const ExportItem = ({exportSetting, mode, isMock}) => {
  const [isDownloading, setDownloading] = useState(false)
  const name = exportSetting.fileName
  const imageUrl = getImageUrl(exportSetting, mode, isMock)
  const {protocol} = window.location
  const isHttpServer = /^http/.test(protocol)

  const handleSave = (e, name) => {
    if (isHttpServer) {
      e.preventDefault()
      setDownloading(true)
      getBlobData(imageUrl).then(blob => {
        saveAs(blob, name)
        setDownloading(false)
      })
    }
  }

  return (
    <div
      // href={imageUrl}
      // target="_blank"
      rel="noopener noreferrer"
      className={cn('export-item', {
        'export-item-downloading': isDownloading,
      })}
      onClick={e => useBearStore.getState().setSelectedNodeId(exportSetting.id)}
    >
      <div style={{backgroundImage: `url(${imageUrl})`}} />
      <span>{name}</span>
      <div className="operation" onClick={e => handleSave(e, name)}>
        {isDownloading ? (
        <Loader size={14} className="motion-loading" />
      ) : isHttpServer ? (
        <Download size={14} />
      ) : (
        <ExternalLink size={14} />
      )}</div>
 
    </div>
  )
}

export default ExportItem
