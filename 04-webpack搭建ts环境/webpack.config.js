const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    // 入口文件
    entry: './main.ts',
    // 出口文件
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'cj.js'
    },
    // 后缀名
    resolve: {
        extensions: ['.ts', '.cjs', '.js', '.json']
    },
    module: {
        // 编译ts文件
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}