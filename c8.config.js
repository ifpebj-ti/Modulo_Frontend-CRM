// c8.config.js
module.exports = {
    check: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
    report: ['json-summary', 'lcov'],
    tempDirectory: './coverage/.nyc_output',
    all: true,
  };
  