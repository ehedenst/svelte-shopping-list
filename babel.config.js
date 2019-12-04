module.exports = function(api) {
  api.cache.forever();
  const presets = [
    [
      '@babel/env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ];
  const plugins = ['@babel/plugin-proposal-class-properties'];
  return { presets, plugins };
};
