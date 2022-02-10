const { merge } = require("webpack-merge");
const path = require("path");
const fs = require("fs");
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, "package.json"))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      );
    }
    currDir = dir;
  }
}

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  staticDirs: ["../public"],
  babel: async (options) => ({
    presets: [
      ["@babel/preset-react", { runtime: "automatic" }],
      "@emotion/babel-preset-css-prop",
    ],
  }),
  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return merge(config, {
      resolve: {
        // alias: @storybook/addon-docs(emotion 10)와 최신 emotion의 충돌 우회
        alias: {
          "@emotion/core": getPackageDir("@emotion/react"),
          "@emotion/styled": getPackageDir("@emotion/styled"),
          "emotion-theming": getPackageDir("@emotion/react"),
        },
        plugins: [
          PnpWebpackPlugin,
          new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, "../tsconfig.json"),
          }),
        ],
      },
      resolveLoader: {
        plugins: [PnpWebpackPlugin.moduleLoader(module)],
      },
    });
  },
};
