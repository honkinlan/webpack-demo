const merge = require('webpack-merge')
const path = require('path')

const webpackConfig = require('./webpack.config')

const config = {
    entry: ['@babel/polyfill', path.resolve(__dirname, './src/index-react.js')],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_module/,
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
                use: ['style-loader', 'css-loader']
            },
        ]
    }
}

module.exports = merge(webpackConfig,config)