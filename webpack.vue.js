const merge = require('webpack-merge')

const webpackConfig = require('./webpack.config')

const VueLoaderPlugin  = require('vue-loader/lib/plugin')

const config = {
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}

module.exports = merge(webpackConfig,config)