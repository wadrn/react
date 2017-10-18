var webpack = require('webpack');
var path = require('path');
module.exports = {
    context: __dirname + "/src",
    entry: "./js/root.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react', 'es2015'
                    ],
                    plugins: [
                        [
                            'import', {
                                libraryName: 'antd',
                                style: 'css'
                            }
                        ]
                    ]
                }
            }, {
                test: /\.css?$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    devServer: {
        inline: true,
        port: 3000,
        proxy: {
            '/test/*': {
                target: 'http://localhost',
                changeOrigin: true,
                secure: false
            }
        }
    },
    output: {
        path: __dirname + "/src/",
        filename: "bundle.js"
    }
};
