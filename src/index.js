import {withGlobalContextProvider} from 'contexts/GlobalContext'

import {createRoot} from 'react-dom/client'
import {I18nextProvider} from 'react-i18next'
import App from './App'
import i18n from './i18n'
// import * as serviceWorker from './serviceWorker'

const ContextedApp = withGlobalContextProvider(App)

const dom = document.getElementById('root')
const root = createRoot(dom)
root.render(
  <I18nextProvider i18n={i18n}>
    <ContextedApp />
  </I18nextProvider>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
