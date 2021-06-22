module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest/setUpTests.ts'],
  testEnvironment: 'jsdom'
}
