import {withGlobalContextProvider} from 'contexts/GlobalContext'
import React, {useEffect} from 'react'
import {I18nextProvider} from 'react-i18next'
import App from '../App'
import i18n from '../i18n'

const ContextedApp = withGlobalContextProvider(App)

function Canvas({
  pagedFrames,
  fileData,
  exportSettings,
  settings,
  onHeaderBack,
  links,
  currentFrameId,
  versions,
  currentVersion,
  onVersionChange,
}) {
  useEffect(() => {
    document.body.classList.add('f2c-handoff')
    return () => {
      document.body.classList.remove('f2c-handoff')
    }
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <ContextedApp
        isModule
        pagedFrames={pagedFrames}
        fileData={fileData}
        exportSettings={exportSettings}
        settings={{...settings, currentFrameId}}
        onHeaderBack={onHeaderBack}
        links={links}
        versionData={{
          versions,
          currentVersion,
          onVersionChange,
        }}
      />
    </I18nextProvider>
  )
}

export default Canvas
