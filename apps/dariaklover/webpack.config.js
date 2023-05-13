const { withReact } = require('@nrwl/react');
const { composePlugins, withNx } = require('@nrwl/webpack');
const { merge } = require('webpack-merge');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [{ loader: 'raw-loader', options: {} }],
        },
      ],
    },
  });
});
