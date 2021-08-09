const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack');

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
    resolve: {
        extensions: ['.js'],
        // alias: {
        //     '@' : path.resolve(__dirname, 'src/components'),
        //     '@p' : path.resolve(__dirname, 'src/pages'),
        //     '' : path.resolve(__dirname, 'src/assets')
        // }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        // compress: true,
        port: 3000,
        historyApiFallback: true,
        proxy: {
            '/pizzas': {
                target: 'http://localhost:3001'
            },
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
        }),
        new Dotenv(),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: 'assets/favicon.png',
        //             to: 'assets/favicon.png'
        //         }
        //     ],
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash]-[name].[ext]',
                            // name: 'assets/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
        ]
    }
}

// 'css-loader?url=false',