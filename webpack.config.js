const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
                
            },
            {
                test: /\.css$/,
                loader: extractTextPlugin.extract({
                    loader: 'css-loader'
                })
            }
        ]
    },
    optimization: {
        minimize: false
    }
};

module.exports = config;