module.exports = function() {
  return {
    files: ['src/**/*.js', 'src/**/*.svelte'],
    tests: ['tests/**/*.test.js'],
    env: {
      type: 'node'
    },
    testFramework: 'jest'
  };
};
