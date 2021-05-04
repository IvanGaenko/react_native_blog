module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.config.js',
    '!**/.prettierrc.js',
    '!**/metro.config.js',
  ],
  coverageDirectory: 'coverage',
  testURL: 'http://localhost/',
  preset: 'jest-expo-enzyme',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './mock.js',
  ],
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
};
