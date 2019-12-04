const extractor = require('smelte/src/utils/css-extractor.js');

const productionPlugins = [
  require('@fullhuman/postcss-purgecss')({
    content: ['./**/*.svelte'],
    extractors: [
      {
        extractor,
        extensions: ['svelte']
      }
    ],
    whitelist: ['html', 'body', 'stroke-primary'],
    whitelistPatterns: [/ripple/]
  }),
  require('cssnano')
];

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer')(),
    ...(!process.env.ROLLUP_WATCH ? productionPlugins : [])
  ]
};
