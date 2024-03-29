const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcFolder = 'src'

module.exports = {
    entry: './src/js/index.js',
    devServer: {
        port: 3001
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, srcFolder, 'index.html')
        })
    ],
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname + '/build/js')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader'
                  }
                ]
              },
              {
                test: /\.(scss)$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader'
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: () => [
                          require('autoprefixer')
                        ]
                      }
                    }
                  },
                  {
                    loader: 'sass-loader'
                  }
                ]
              }
        ]
    }
}
