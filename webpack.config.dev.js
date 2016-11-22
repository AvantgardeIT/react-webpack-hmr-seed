var path = require('path');
var webpack = require('webpack');

var DIST_DIR   = path.join(__dirname, "dist");

var config = {
    devtool: 'eval', // generated code but faster
    //devtool: 'cheap-module-eval-source-map', // original source but slower
    entry: [
        './index.js',
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
                test: /\.js$/,
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