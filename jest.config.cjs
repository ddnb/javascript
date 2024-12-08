// jest.config.cjs
// https://jestjs.io/docs/ecmascript-modules
// CommonJS module
module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'node'],
  "collectCoverage": true,
  "coverageReporters": ["json", "html", "lcov", "text", "clover", "cobertura"]
};

// // ECMAScript module
// export default {
//   transform: {
//     '^.+\\.js$': 'babel-jest',
//   },
//   testEnvironment: 'node',
//   moduleFileExtensions: ['js', 'json', 'node'],
//   "collectCoverage": true,
//   "coverageReporters": ["json", "html", "lcov", "text", "clover", "cobertura"]
// };