import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV

const config = {
  output: {
    format: 'umd',
    name: 'React LiveChat',
    exports: 'named',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
  ],
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    })
  )
}

export default config