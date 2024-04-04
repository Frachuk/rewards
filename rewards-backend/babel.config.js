module.exports = {
  env: {
    development: {
      plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-transform-class-properties'],
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-transform-class-properties'],
    },
  },
};
