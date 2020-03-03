const merge = require('webpack-merge')

const webpackConfig = require('./webpack.config')

const config = {
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