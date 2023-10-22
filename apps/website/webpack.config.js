const { withReact } = require('@nx/react');
const { composePlugins, withNx } = require('@nx/webpack');
const { merge } = require('webpack-merge');

module.exports = composePlugins(withNx(), withReact(), (webpackConfigNx) => {
  /** @type {import('webpack').Configuration} */
  const webpackConfig = {
    module: {
      rules: [
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: '@mdx-js/loader',
              /** @type {import('@mdx-js/loader').Options} */
              options: {
                providerImportSource: '@mdx-js/react',
              },
            },
          ],
        },
      ],
    },
  };
  return merge(webpackConfigNx, webpackConfig);
});
