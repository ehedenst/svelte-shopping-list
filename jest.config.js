module.exports = {

  roots: ['<rootDir>/src/', '<rootDir>/tests/'],

  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@smui)/)"
  ],

  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  },

  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jest'
  }
};
