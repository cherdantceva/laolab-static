const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = env => {
    return merge(common(env), {

        mode: 'development',

        // Use eval-cheap-source-map for accurate line numbers, eval has best build performance
        devtool: 'eval',

        output: {
            pathinfo: true,
            publicPath: '/',
            filename: '[name].bundle.js'
        },

        devServer: {
            host: '0.0.0.0'
        },

        plugins: [
            new HtmlWebpackPlugin({
                    template: path.join(__dirname, 'index.ejs'),
                    title: 'laolab',
                    minify: false,
                    filename: 'index.html',
                }
            ),
            new HtmlWebpackPlugin({
                    template: path.join(__dirname, 'vacancies.ejs'),
                    title: 'laolab',
                    minify: false,
                    filename: 'vacancies.html',
                }
            )
        ]

    });
};
