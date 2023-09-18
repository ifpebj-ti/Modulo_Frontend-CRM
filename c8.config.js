// c8.config.js
export const check = {
    global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
    },
};
export const report = ['json-summary', 'lcov'];
export const tempDirectory = './coverage/.nyc_output';
export const all = true;
