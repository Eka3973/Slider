const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const OUTPUT_PATH = path.resolve(__dirname, 'dist')

const MODE = ((args) => {
    const tokens = args.match(/--mode=(\w+)/i)
    return tokens && tokens.length > 1 ? tokens[1].toLowerCase() : 'production'
})(process.argv.join(' '))

const DEV = MODE === 'development'
const PROD = MODE === 'production'

const config = {
    entry: "./src/index.js",
    output: {
        path: OUTPUT_PATH,
        filename: "bundle.js",
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {test: /\.js$|jsx/, use: [{loader: 'babel-loader'}], exclude: [/node_modules/, /tests/]},
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    DEV
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
                ],

            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({filename: '[name].bundle.css', chunkFilename: '[id].css'}),

    ],

    devServer: {
        port: 8080,
        contentBase: OUTPUT_PATH,
    }
}

if (DEV) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config;
