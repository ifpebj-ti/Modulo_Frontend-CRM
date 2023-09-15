// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.spec.ts'],
    collectCoverage: true,
    coverageReporters: ['json-summary', 'lcov'],
    collectCoverageFrom: ['test/**/*.ts'], // Ajuste o caminho conforme necessário
  };
  