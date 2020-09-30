const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')// index.html 生成
const MiniCssExtractPlugin = require('mini-css-extract-plugin')// css 单独抽出
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')// css 压缩

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // css 加载，暂时没用到less和eslint
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    // 使用MiniCssExtractPlugin代替
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            // 图片加载
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                loader: 'url-loader',
                options: {
                    name: '[hash:10].[ext]',
                    esModule: false,
                    outputPath: 'imgs'
                }
            },
            // html 图片引入加载
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            // js 兼容处理 , 需要下载babel-loader @babel/core @babel/preset-env
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // loader: 'babel-loader',
                // options: {
                //     presets: [
                //         '@babel/preset-env',
                //     ]
                // },
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },
            // 其它资源加载
            {
                exclude: /\.(css|html|js|jpg|jpeg|gif|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'others'
                }
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'// css输出位置
        }),
        new OptimizeCssAssetsPlugin()
    ]
}


