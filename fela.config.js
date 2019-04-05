const { default: monolithic } = require('fela-monolithic');
const { default: namedKeys } = require('fela-plugin-named-keys');
const { default: fallbackValue } = require('fela-plugin-fallback-value');
const {
  default: friendlyPseudoClass,
} = require('fela-plugin-friendly-pseudo-class');
const { default: prefixer } = require('fela-plugin-prefixer');
const { default: unit } = require('fela-plugin-unit');

const plugins = [
  namedKeys({
    atTablet: '@media (min-width: 420px) and (max-width: 659px)',
    atDesktop: '@media (min-width: 660px)',
    atLargeDesktop: '@media (min-width: 840px)',
    atPrint: '@media print',
  }),

  unit(),

  prefixer(),

  fallbackValue(),
  friendlyPseudoClass(),
];
const enhancers = [];
let devMode = false;

if (process.env.NODE_ENV !== 'production') {
  enhancers.push(monolithic({ prettySelectors: true }));
  devMode = true;
}

module.exports = {
  plugins,
  enhancers,
  devMode,
};
