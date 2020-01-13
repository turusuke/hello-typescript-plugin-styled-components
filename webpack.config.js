// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html#create-a-webpack-configuration-file
const path = require('path');
module.exports = {
  mode: "development",
  entry: "./src/js/app.tsx",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },

  devServer: {
    open:true,
    openPage: "index.html",
    contentBase: path.join(__dirname, 'public'),
  },

  resolve: {
    extensions: [".ts",".tsx",".js",".jsx"],
    modules: ["node_modules"]
  }
};
