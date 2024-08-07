import path from 'path'
import {defineConfig} from '@empjs/cli'
import pluginReact from '@empjs/plugin-react'

export default defineConfig(store => {
  const appSrc = store.resolve('src')
  console.log(appSrc)
  return {
    plugins: [pluginReact()],
    define: {
      PUBLIC_URL: '',
    },
    html: {
      template: store.resolve('template/index.html'),
      favicon: store.resolve('template/favicon.ico'),
    },
    resolve: {
      alias: {
        page: path.join(appSrc, 'page'),
        assets: path.join(appSrc, 'assets'),
        components: path.join(appSrc, 'components'),
        utils: path.join(appSrc, 'utils'),
        contexts: path.join(appSrc, 'contexts'),
        api: path.join(appSrc, 'api'),
      },
    },
    debug: {
      // showRsconfig: true,
    },
  }
})
