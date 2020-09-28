const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/main.ts'),
  mode: process.env.NODE_ENV || 'development',
  devtool: process.env.NODE_ENV == 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue': '@vue/runtime-dom'
    },
    extensions: ['.ts', '.vue', '.js']
  },
  module: {
    rules: [
      {
        test: /\.vue$/, 
        loader: "vue-loader"
      },
      {
        test: /\.ts$/, 
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV != 'production' 
            }
          },
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.(jpg|png|gif|pdf|ico|eot|ttf|woff2?)$/,
        use: [
          { 
              loader: 'url-loader', 
          }
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: false,
        default: false, 
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          filename: "vendor.js"
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new copyWebpackPlugin({
      patterns:[{from: 'src/public', to: '.'}] 
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: "minimal",
    contentBase: path.resolve(__dirname, "src/public"),
    overlay: true,
    disableHostCheck: true,
    historyApiFallback: {
      index: 'index.html'
    }
  }
}