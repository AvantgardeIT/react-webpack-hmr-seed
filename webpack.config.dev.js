var path = require('path');
var webpack = require('webpack');

var DIST_DIR   = path.join(__dirname, "dist"),
    CLIENT_DIR = path.join(__dirname, "src");

var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './index.jsx',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                //test : /\.jsx?/,
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: [ "es2015", "react", "stage-0", "react-hmre" ]
                }
            }
        ]
    }
};

module.exports = config;