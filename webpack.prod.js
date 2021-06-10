const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = env => {
    return merge(common(env), {

        mode: 'production',

        // IMPORTANT: Configure server to disallow access to source maps from public!
        devtool: 'source-map',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].bundle.js'
        },

        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                    template: path.join(__dirname, 'index.ejs'),
                    title: 'laolab',
                    minify: false,
                    filename: 'index.html',
            }
            ),
            new HtmlWebpackPlugin({
                    template: path.join(__dirname, 'vacancies.ejs'),
                    title: 'laolab vacancies',
                    minify: false,
                    filename: 'vacancies.html',
                }
            ),
            new HtmlWebpackPlugin({
                    template: path.join(__dirname, 'index-mobile.ejs'),
                    title: 'laolab index',
                    minify: false,
                    filename: 'index-mobile.html',
                }
            ),
            new HtmlWebpackPlugin({
                    template: path.join(__dirname, 'vacancies-mobile.ejs'),
                    title: 'laolab index',
                    minify: false,
                    filename: 'vacancies-mobile.html',
                }
            ),

            new CopyPlugin({
                patterns: [
                    { from: path.join(__dirname, 'assets'), to: 'assets' }
                ]
            })
        ]

    });
};
