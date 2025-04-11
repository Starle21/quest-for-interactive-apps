const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

const isDevelopment = process.env.NODE_ENV === "development";
const config = {
  mode: isDevelopment ? "development" : "production",
  entry: {
    quest: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: isDevelopment
      ? "/dist/"
      : "/projects/quest-for-interactive-apps/dist/",
    filename: "[name].bundle.js",
    clean: true,
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".html", ".css"],
  },
  experiments: {
    syncWebAssembly: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          // Ensure components remain readable in inspector
          keep_fnames: true,
        },
      }),
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./templates/index.template.ejs",
  //     publicPath: isDevelopment
  //       ? "/wtf"
  //       : "/projects/quest-for-interactive-apps/",
  //   }),
  // ],
  module: {
    rules: [
      // {
      //   test: /\.html$/i,
      //   use: [
      //     {
      //       loader: "raw-loader",
      //     },
      //   ],
      // },
      {
        test: /\.(ts|js)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  firefox: "132",
                  chrome: "130",
                },
              },
            ],
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: "asset/resource",
      // },
    ],
  },
  devtool: isDevelopment ? "eval-source-map" : false,
  devServer: {
    publicPath: "/dist/",
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3005,
    historyApiFallback: true,
    hot: true,
  },
};

module.exports = config;
