const fs = require("fs");
const {
  loaderByName,
  removeLoaders,
  addAfterLoader,
  addBeforeLoader,
} = require("@craco/craco");
const { ESBuildPlugin, ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig({
          webpackConfig,
          pluginOptions,
          context: { paths },
        }) {
          const useTypeScript = fs.existsSync(paths.appTsConfig);
          const esbuildLoaderOptions =
            pluginOptions && pluginOptions.esbuildLoaderOptions;

          // add includePaths custom option, for including files/components in other folders than src
          // Used as in addition to paths.appSrc, optional parameter.
          const optionalIncludes =
            (pluginOptions && pluginOptions.includePaths) || [];

          // add esbuild-loader
          addAfterLoader(webpackConfig, loaderByName("babel-loader"), {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: [paths.appSrc, ...optionalIncludes],
            loader: require.resolve("esbuild-loader"),
            options: esbuildLoaderOptions
              ? esbuildLoaderOptions
              : {
                  loader: useTypeScript ? "tsx" : "jsx",
                  target: "es2015",
                },
          });

          // handle svg via svgr
          addBeforeLoader(webpackConfig, loaderByName("esbuild-loader"), {
            test: /\.svg$/,
            use: ["@svgr/webpack"],
          });

          // remove the babel loaders
          removeLoaders(webpackConfig, loaderByName("babel-loader"));

          // Replace terser with esbuild
          webpackConfig.optimization.minimizer[0] = new ESBuildMinifyPlugin(
            pluginOptions && pluginOptions.esbuildLoaderOptions
              ? pluginOptions.esbuildLoaderOptions
              : {
                  target: "es2015",
                }
          );

          webpackConfig.plugins.push(new ESBuildPlugin());

          return webpackConfig;
        },
      },
    },
  ],
};
