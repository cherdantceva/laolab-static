const path = require('path');
const webpack = require('webpack');


const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirStyles = path.join(__dirname, 'styles');
const dirAssets = path.join(__dirname, 'assets');

/**
 * Webpack Configuration
 */
module.exports = env => {
    // Is the current build a development build
    const IS_DEV = !!env.dev;

    return {

        entry: {
            main: path.join(dirApp, 'index')
        },

        resolve: {
            modules: [
                dirNode,
                dirApp,
                dirStyles,
                dirAssets
            ]
        },

        plugins: [
            new webpack.DefinePlugin({ IS_DEV }),

        ],

        module: {
            rules: [
                // BABEL
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            compact: true
                        }
                    }
                },

                // STYLES
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: IS_DEV
                            }
                        },
                    ]
                },

                // CSS / SASS
                {
                    test: /\.scss/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: IS_DEV
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: IS_DEV,
                                sassOptions: {
                                    includePaths: [dirAssets]
                                }
                            }
                        }
                    ]
                },

                // IMAGES
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                    type: 'asset/resource',
                },
                // шрифты и SVG
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: 'asset/inline',
                },
            ]
        },

        optimization: {
            runtimeChunk: 'single'
        }

    };
};
