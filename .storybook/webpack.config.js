require("imports-loader")

const path = require("path")
const SRC_PATH = path.join(__dirname, "../src")

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          configFileName: "./.storybook/tsconfig.json",
        },
      },
      { loader: require.resolve("react-docgen-typescript-loader") },
    ],
  })

  // Find Storybook's default CSS processing rule
  const cssLoaderIndex = config.module.rules.findIndex(
    rule => rule.test.source === `\\.css$`
  )

  if (!Number.isInteger(cssLoaderIndex))
    throw new Error("Could not find Storybook's CSS loader")

  // Exclude CSS Modules from Storybook's standard CSS processing
  config.module.rules[cssLoaderIndex].exclude = /\.module\.css$/

  // Add specific loader rule for CSS Modules
  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      { loader: `style-loader` },
      { loader: `css-modules-typescript-loader` },
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
    ],
    include: path.resolve(__dirname, "../src"),
  })

  // ignore gatsby-link's global `__loader` variable
  config.module.rules.push({
    test: require.resolve("gatsby-link"),
    loaders: ["imports-loader?___loader=>{enqueue:function(){}}"],
  })

  config.resolve.extensions.push(".ts", ".tsx", ".css")

  return config
}
