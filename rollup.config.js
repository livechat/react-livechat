export default {
  input: 'LiveChat/LiveChat.js',
  output: {
    name: 'dist/LiveChat.js',
    format: 'umd',
    globals: {
      'react': 'React',
      'prop-types': 'PropTypes',
    }
  },
  external: ['react', 'prop-types'],
}
