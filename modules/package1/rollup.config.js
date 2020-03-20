'use strict';

const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');

module.exports = {
  input: 'src/index.ts',
  output: { dir: 'dist/', format: 'cjs' },
  plugins: [
    typescript(),
    resolve(),
  ],
};
