/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        // '@config': path.resolve(__dirname, 'src/config'),
        // '@fonts': path.resolve(__dirname, 'src/fonts'),
        // '@hooks': path.resolve(__dirname, 'src/hooks'),
        "@images": path.resolve(__dirname, "src/images"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@styles": path.resolve(__dirname, "src/styles"),
        // '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  })
}