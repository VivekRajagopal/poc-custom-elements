import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import minifyHTML from 'rollup-plugin-minify-html-literals';

export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/index.bundled.js',
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({'Reflect.decorate': 'undefined'}),
    resolve(),
    minifyHTML(),
    terser(),
    summary(),
  ],
};
