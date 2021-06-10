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
                    template: path.join(__dirname, 'pages/index.ejs'),
                    title: 'laolab',
                    minify: false,
                    filename: 'index.html',
                }
            ),
            new HtmlWebpackPlugin({
                    template: path.join(__dirname, 'pages/vacancies.ejs'),
                    title: 'laolab',
                    minify: false,
                    filename: 'vacancies.html',
                }
            ),
            new HtmlWebpackPlugin({
                    template: path.join(__dirname, 'pages/index-mobile.ejs'),
                    title: 'laolab',
                    minify: false,
                    filename: 'index-mobile.html',
                }
            ),
            new HtmlWebpackPlugin({
                    template: path.join(__dirname, 'pages/vacancies-mobile.ejs'),
                    title: 'laolab',
                    minify: false,
                    filename: 'vacancies-mobile.html',
                }
            )
        ]

    });
};
