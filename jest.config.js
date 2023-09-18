// jest.config.js
export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const testMatch = ['**/*.spec.ts'];
export const collectCoverage = true;
export const coverageReporters = ['json-summary', 'lcov'];
export const collectCoverageFrom = ['test/**/*.ts'];
