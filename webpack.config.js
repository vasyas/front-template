var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var pkg = require('./package.json');
var vendorDeps = Object.keys(pkg.dependencies);

module.exports = {
    entry: {
        app: 'index.tsx',
        vendor: vendorDeps
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve('build/bundled')
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
        modulesDirectories: ['src', 'node_modules']
    },
    module: {
        loaders: [
            {
                test    : /\.tsx?$/,
                loaders : ['babel', 'ts-loader']
            },
            {
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {
                test    : /\.css$/,
                loader  : 'style-loader!css-loader'
            },
            {
                test    : /\.scss$/,
                loader  : 'style-loader!css-loader!sass-loader'
            },
            {
                test    : /\.(png|jpg)$/,
                loader  : 'url-loader?limit=8192'
            },
            {
                test    : /\.(ttf|eot|svg|woff2?)(\?[a-z0-9]+)?$/,
                loader  : 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'www/index.html',
            title: 'Front Template',
            filename: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        require('webpack-fail-plugin')
    ]
};
