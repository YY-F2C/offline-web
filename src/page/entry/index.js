import {getMockFile} from 'api'
import cn from 'classnames'
import {WithCopy} from 'components/utilities'
import Tooltip from 'rc-tooltip'
import React from 'react'
import {Coffee, DollarSign, GitHub, Link2, Mail, Package, X} from 'react-feather'
import {withTranslation} from 'react-i18next'
import {getPagedFrames, getSelectedPagedFrames} from 'utils/frame'
// import {reportEvent} from 'utils/gtag'
import LangSetting from './LangSetting'
// import ProductHunt from './ProductHunt'
import './entry.scss'

import qrcode from './qrcode.jpg'
import { F2cLog } from '../../components/icons/text'

class Entry extends React.Component {
  state = {
    coffeeVisible: false,
    isLoadingDemo: false,
  }
  gotoDemo = async e => {
    e && e.preventDefault()
    this.setState({isLoadingDemo: true})
    const fileData = await getMockFile()
    // get components and styles
    const {components, styles, exportSettings} = fileData
    const {onDataGot, onComponentsOptionChange} = this.props
    const pagedFrames = getSelectedPagedFrames(getPagedFrames(fileData))
    // demo has components list
    onComponentsOptionChange && onComponentsOptionChange(true)
    this.setState({isLoadingDemo: false})
    onDataGot && onDataGot(fileData, components, styles, exportSettings, pagedFrames)
  }
  toggleCoffee = e => {
    e.preventDefault()
    const {coffeeVisible} = this.state
    this.setState({
      coffeeVisible: !coffeeVisible,
    })
  }
  componentDidMount() {
    const {backFromDemo} = this.props
    const {search} = window.location
    const urlParams = new URLSearchParams(search)
    const isDemo = urlParams.get('demo')
    if (isDemo && !backFromDemo) {
      this.gotoDemo()
    }
  }
  render() {
    const {t} = this.props
    const {coffeeVisible, isLoadingDemo} = this.state
    return (
      <div className="app-entry">
        <div className="entry-container">
          {/* <ProductHunt /> */}
          <div className="entry-logo">
            {/* <img className="hide" src={`/figmacn-logo.svg`} alt="figmacn logo" ref={this.figmacnLogo} /> */}
            <F2cLog size={120}/>
          </div>
          <div className={cn('entry-main', {hide: coffeeVisible})}>
            <p>{t('use plugin description')}</p>
            <div className="main-buttons">
              <a
                className="btn btn-lg btn-primary btn-round"
                // href="https://www.figma.com/community/plugin/830051293378016221/Heron-Handoff"
                href="https://www.figma.com/community/plugin/1248187540929489451/f2c-figma-to-code-react-rn-vue-html-yy-d2c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Package size={16} /> {t('start now')}
              </a>
              <button className="btn btn-lg btn-white-o btn-round" onClick={this.gotoDemo} disabled={isLoadingDemo}>
                {isLoadingDemo ? t('demo loading') : t('demo')}
              </button>
            </div>
          </div>
          {/* <div className={cn('entry-coffee', {hide: !coffeeVisible})}>
            <X size={36} className="coffee-close" onClick={this.toggleCoffee} />
            <img src={qrcode} alt="coffee qrcode" />
            <div className="coffee-or">Or</div>
            <a href="https://paypal.me/leadream" target="_blank" rel="noopener noreferrer">
              <DollarSign size={12} /> {t('paypal')}
            </a>
          </div> */}
          <div className="entry-footer">
            {/* <LangSetting /> */}
            <span className="footer-stretch" />
            <Tooltip overlay={t('github')} placement="top" align={{offset: [0, 3]}}>
              <a
                className="footer-item"
                href="https://github.com/YyFigmaToCode/f2c-offline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub size={14} />
              </a>
            </Tooltip>
             {/*<Tooltip overlay={t('buy me a coffee')} placement="top" align={{offset: [0, 3]}}>
              <a className="footer-item" onClick={this.toggleCoffee} href="/">
                <Coffee size={14} />
              </a>
            </Tooltip> */}
          </div>
          {/* <div className="entry-social">
            <h5>{t('contact me')}</h5>
            <div className="social-item">
              <WithCopy text="leadream4@gmail.com">
                <Mail size={14} /> leadream4@gmail.com
              </WithCopy>
            </div>
            <div className="social-item">
              <a href="https://juuun.io" target="_blank" rel="noopener noreferrer">
                <Link2 size={14} /> https://juuun.io
              </a>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default withTranslation('entry')(Entry)
