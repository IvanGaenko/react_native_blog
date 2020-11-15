module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.config.js',
    '!**/.prettierrc.js',
    '!**/metro.config.js',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A preset that is used as a base for Jest's configuration
  // preset: 'jest-expo',
  preset: 'react-native',

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
    // '\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
};
