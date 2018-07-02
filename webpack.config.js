const path = require('path');

module.exports = {
    entry: {
        index: './src/js/index.js',
    },         
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0']
            }
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 9999,
        host: 'localhost',
    }
};