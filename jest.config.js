module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>test/setupTests.js'],
  transformIgnorePatterns: ['node_modules/(?!((jest-)?react-native|react-navigation|@react-navigation))'],
};
