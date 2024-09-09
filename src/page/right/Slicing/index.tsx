import {getBufferData} from 'api'
import cn from 'classnames'
import {saveAs} from 'file-saver'
import JSZip from 'jszip'
import React, {Fragment} from 'react'
import {Clock, DownloadCloud, Droplet, Image} from 'react-feather'
import {withTranslation} from 'react-i18next'
import {asyncForEach, getImageUrl, isAllImageFill} from 'utils/helper'
import {ExportItem, StyleItem} from '../items'

class RightPanel extends React.Component {
  state = {
    tabIndex: 0,
    percentage: 0,
    progressText: '',
  }
  
  setProgress = (percentage, progressText) => {
    this.setState({
      percentage,
      progressText,
    })
  }
  handleDownloadAll = async () => {
    const {percentage} = this.state
    if (percentage !== 0) return
    const {mode, isMock, exportSettings, documentName, t} = this.props
    const zip = new JSZip()
    const length = exportSettings.length
    const folderName = `${documentName.replace(/\//g, '-')}-exports`
    const exportsFolder = zip.folder(folderName)
    this.setProgress(1, t('downloading images'))

    await asyncForEach(exportSettings, async (exportSetting, index) => {
      const imgName = exportSetting.fileName
      const imgUrl = getImageUrl(exportSetting, mode, isMock)
      const imgData = await getBufferData(imgUrl)
      this.setProgress((index + 1) * Math.floor(90 / length), t('dealing with', {name: imgName}))
      exportsFolder.file(imgName, imgData, {base64: true})
    })

    this.setProgress(96, t('compressing files'))
    zip.generateAsync({type: 'blob'}).then(content => {
      saveAs(content, `${folderName}.zip`)
      this.setProgress(100, t('downloaded'))
      const timer = setTimeout(() => {
        this.setProgress(0, '')
        clearTimeout(timer)
      }, 800)
    })
  }
  componentDidMount() {
    console.log('ppp');
    // const { styles } = this.props
  }
  render() {
    const {mode, isMock, exportSettings, t} = this.props
    
    const {tabIndex, percentage, progressText} = this.state
    const {protocol} = window.location
    console.log(exportSettings, protocol, 'kkk');
    return (
      <div className="right-panel">
        <div className={cn('panel-exports')}>
          {/^http/.test(protocol) && !!exportSettings.length && (
            <div
              className={cn('exports-download-all', {
                'is-downloading': percentage,
              })}
              onClick={this.handleDownloadAll}
            >
              <span>{progressText || t('download all')}</span> {!percentage && <DownloadCloud size={14} />}
              <div className="download-all-progress" style={{width: `${percentage}%`}} />
            </div>
          )}
          {!!exportSettings.length ? (
            exportSettings.map((exportSetting, index) => {
                console.log('pppffff');
                
                return (
              <div key={index}>
                <ExportItem mode={mode} isMock={isMock} exportSetting={exportSetting} index={index} />
              </div>
            )})
          ) : (
            <li className="exports-empty">{t('no exports')}</li>
          )}
        </div>
      </div>
    )
  }
}

export default withTranslation('right')(RightPanel)
