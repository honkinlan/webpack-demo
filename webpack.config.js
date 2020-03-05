
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpack = require('webpack')

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const config = {
    mode: process.env.NODE_ENV,
    entry: ['@babel/polyfill', resolve('./app/index.js')],

    output: {

        filename: '[name].[hash:8].js',

        path: resolve('./dist')

    },
    resolve: {// 减少后缀
        extensions: ['.js', '.jsx', '.json'],
        // modules: [ // 指定以下目录寻找第三方模块，避免webpack往父级目录递归搜索
        //   resolve('app'),
        //   resolve('node_modules'),
        // ],
        alias: { // 减少使用别名提高编译速速
          '@app': path.join(__dirname, './app'),
          '@components': path.join(__dirname, './app/components'),
          '@public': path.join(__dirname, './public'),
          '@images': path.join(__dirname, './public/images'),
          '@styles': path.join(__dirname, './public/styles')
        },
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                include: [resolve('./app')],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-react','@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', 'css-loader',{
                    loader: "less-loader", // compiles Less to CSS
                    options: {
                        sourceMap: true,
                        javascriptEnabled: true
                    }
                }]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, 
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },

    devServer: {
        port: '3000',
        host: '127.0.0.1',
        hot: true,
        open: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: resolve('./app/index.html')
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]

}

module.exports = config