import { Config } from '@stencil/core';
import { sass } from '@stencil/sass'

export const config: Config = {
  plugins: [
    sass()
  ],
  namespace: 'siigo-dropdown',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
