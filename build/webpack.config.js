const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')

const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  // mode: NODE_ENV,
  entry: {
    app: './src/index.ts'
  },

  output: {
    path: resolve('dist'),
    filename: 'js/[name].[contenthash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body'
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    })

  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devServer: {
    host: 'localhost', // 主机名
    port: 8088,
    open: true,
    compress: true, // 启用Gzip压缩
    hot: true, // 开启 HMR 功能
    devMiddleware: {
      stats: 'errors-only' // 打包日志输出输出错误信息
    }
  },

  target: 'web' // 不加这个 无法启用热更新
}
