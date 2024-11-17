const { clear } = require('console');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { title } = require('process');
const { Template } = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'scripts', 'index.js')
    },

    // "./src/script/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        compress: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack test",
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jp?g|gif|svg)$/i,
                use: [{ loader: 'file-loader' }]
            }
        ]
    },
    // mode: "development",
    mode: "production",
}