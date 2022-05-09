const { resolve } = require("path");

module.exports = {
  output: {
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
};
