var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

var hotEntries = {};

Object.keys(config.entry).forEach(function(key) {
    hotEntries[key] = [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server'
    ].concat(config.entry[key]);
});

Object.assign(config, {
    devtool:  'eval-source-map',
    entry: hotEntries,
    plugins: config.plugins.concat([ new webpack.HotModuleReplacementPlugin() ])
});

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: 'errors-only',
    contentBase: 'www',

    proxy: {
        '/api': {
            target: 'http://localhost:8080',
            secure: false
        }
    }}).listen(3000, 'localhost', function (err, result) {
        if (err) {
            return console.log(err);
        }

        console.log('Listening at http://localhost:3000/');
    }
);