/* eslint-env node */

const plugins = {
  'tailwindcss/nesting': {},
  tailwindcss: {},
  autoprefixer: {},
  'postcss-preset-env': {
    features: {'nesting-rules': false},
  },
};

if (process.env.NODE_ENV === 'production') {
  plugins.cssnano = {};
}

module.exports = {plugins};
