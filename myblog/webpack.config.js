var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname +'/src',
    entry: "./index.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    "plugins":[
                        ['import',{
                            libraryName:'antd',
                            libraryDirectory:'lib',
                            style:'css',
                        }]
                    ]
                },

            },
            {
                test:/\.css?$/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    devServer: {
        inline: true,
        port: 3000
    },
    output: {
        path: __dirname + "/src/",
        filename: "bundle.js"
    }
};
