import path from 'node:path'
import markdown from '@jackfranklin/rollup-plugin-markdown'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy'
import external from 'rollup-plugin-peer-deps-external'
import scss from 'rollup-plugin-scss'
import {uglify} from 'rollup-plugin-uglify'
import visualizer from 'rollup-plugin-visualizer'
import pkg from './package.json'

const mode = process.env.NODE_ENV || 'development'
const isProduction = mode === 'production'

const resolveFile = filePath => path.join(__dirname, filePath)

const config = {
  input: './src/lib/index.js',
  output: [
    {
      sourcemap: isProduction ? false : 'inline',
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    alias({
      entries: {
        assets: resolveFile('src/assets'),
        components: resolveFile('src/components'),
        utils: resolveFile('src/utils'),
        contexts: resolveFile('src/contexts'),
        page: resolveFile('src/page'),
        api: resolveFile('src/api'),
      },
    }),
    external(),
    json(),
    copy({
      targets: [{src: resolveFile('src/lib/index.d.ts'), dest: resolveFile('dist')}],
    }),
    scss({
      outputStyle: isProduction ? 'compressed' : 'compact',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      preferBuiltins: true,
      mainFields: ['browser'],
    }),
    commonjs(),
    image(),
    markdown(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.IS_MODULE': JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify(mode),
      },
    }),
    visualizer(),
  ],
}

if (isProduction) {
  config.plugins.push(uglify())
}

export default config
