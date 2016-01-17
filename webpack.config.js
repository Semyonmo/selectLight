var webpack = require('webpack');

module.exports = {
    entry: {
        'select' : './src/select'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js',
        library: "Select"
    },
    debug: true,
    plugins: [
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel?presets[]=es2015'],
            },
            {test: /\.html$/, loader: 'raw'},
            {test: /\.styl$/, loader: 'style!css!stylus'},
        ]
    },
    stats: {colors: true, reasons: false},
    devServer: {
        contentBase: __dirname + '/dist',
        inline: true,
        port: '8080',
        host: 'localhost',
        filename: "main.js"
    }
};
