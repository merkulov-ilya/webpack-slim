# Steps

```bash
yarn init
yarn add webpack webpack-cli webpack-dev-server -D
yarn add html-webpack-plugin -D
yarn add mini-css-extract-plugin -D
yarn add html-loader css-loader node-sass sass-loader -D
```

package.json
```
+ "scripts": {
+   "start": "webpack-dev-server --mode development"
+ },
- "main": "index.js",
```

project
```
  webpack-demo
  |- package.json
+ |- /src
+   |- index.js
+   |- index.slim
+   |- style.sass
+ |- webpack.config.js
+ |- slim-loader.js
```

+ webpack.config.js
```js
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.slim' }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/     , use: [ MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.s[ac]ss$/i, use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      { test: /\.slim$/    , use: [ 'html-loader', path.resolve('slim-loader') ] },
    ],
  },
};
```

+ slim-loader.js
```js
module.exports = function (source) {
  return require('child_process').execSync('slimrb -s -p', { input: source });
}
```

+ src/index.slim
```slim
doctype html
html
  head
    meta charset="utf-8"
    title Slim
  body
    h1 Slim
```

+ src/style.sass
```sass
body
  background: #242424
  color: #d4d4d4
```

+ src/index.js
```js
import './style.sass'
console.log('index.js');
```

