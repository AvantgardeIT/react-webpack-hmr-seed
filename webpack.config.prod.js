var path = require('path');
var webpack = require('webpack');

var DIST_DIR   = path.join(__dirname, "dist");

var config = {
    devtool: 'cheap-module-source-map',
    entry: [
        './index.js'
    ],
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: [ "es2015", "react", "stage-0" ]
                }
            }
        ]
    }
};

module.exports = config;