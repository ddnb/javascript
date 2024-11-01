// https://babeljs.io/docs/usage
const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        node: 'current',
        chrome: "130",
        edge: "91",
        firefox: "131",
        safari: "17.6",
      },
      modules: 'auto',
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
];

module.exports = { presets };