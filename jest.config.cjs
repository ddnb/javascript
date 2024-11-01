// jest.config.cjs
// https://jestjs.io/docs/ecmascript-modules
// CommonJS module
module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'node'],
};

// jest.config.js
// export default {
//   transform: {
//     '^.+\\.jsx?$': 'babel-jest',
//   },
//   testEnvironment: 'node',
//   moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
// };

// jest.config.js
// export default {
//   preset: 'ts-jest', // If using TypeScript, change this according to your setup
//   testEnvironment: 'node',
//   extensionsToTreatAsEsm: ['.js'], // Treat .js files as ESM
//   transform: {
//     '^.+\\.js$': 'babel-jest', // You can remove this line if you're not using Babel anymore
//   },
//   moduleFileExtensions: ['js', 'json', 'node'],
//   globals: {
//     'ts-jest': {
//       useESM: true, // Required if using TypeScript with ESM
//     },
//   },
// };

// jest.config.js
// export default {
//   testEnvironment: 'node', // Set the environment to Node.js
//   extensionsToTreatAsEsm: ['.js'], // Treat .js files as ESM
//   moduleFileExtensions: ['js', 'json', 'node'], // Recognize these file extensions
//   transform: {}, // Remove Babel transformation if not using it
// };

// jest.config.js
// export default {
//   testEnvironment: 'node', // Set the environment to Node.js
//   moduleFileExtensions: ['js', 'json', 'node'], // Recognize these file extensions
//   transform: {}, // Remove Babel transformation if not using it
// };