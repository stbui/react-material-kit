const path = require('path');

module.exports = function override(config, env) {
  // config.entry.unshift(require.resolve('react-hot-loader/patch'));

  // grab the "oneOf" rule
  const rules = config.module.rules[1].oneOf;

  // add a markdown loader
  
  // add module aliases

  return config;
};
