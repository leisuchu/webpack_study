// 路径解析
const { resolve } = require('path')

// css 单独抽出 (插件)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// css 压缩
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

// html加载
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 定义nodejs的环境变量,决定nodejs使用哪个环境
process.env.NODE_ENV = 'production'

const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    // css 兼容处理
    {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [require('postcss-preset-env')()]
        }
    }
]

/**
 *  摇树（tree shaking）-> 删除无用代码
 *  前提：1 必须使用es6模块化编程 2 开启production环境
 */


/*
    必须要先eslint再babel
*/
module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出配置
    output: {
        filename: 'js/[name][contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    // loaders 配置
    module: {
        rules: [
            // js 处理(eslint)
            // 需要下载eslint-config-airbnb-base eslint eslint-plugin-import
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     enforce: 'pre',
            //     options: {
            //         fix: true
            //     }
            // },
            // js 处理（babel）
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: ["@babel/plugin-transform-runtime"],
                    // 开启babel缓存
                    cacheDirectory:true
                }
            },
            {
                oneOf: [
                    // css 处理
                    {
                        test: /\.css$/,
                        use: [...commonCssLoader]
                    },
                    // less 处理
                    {
                        test: /\.less$/,
                        use: [
                            ...commonCssLoader,
                            'less-loader'
                        ]
                    },

                    // 图片处理
                    {
                        test: /\.(jpg|jpeg|png|gif)$/,
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            name: '[hash:10].[ext]',
                            outputPath: 'imgs',
                            esModule: false
                        }
                    },
                    // html 图片处理
                    {
                        test: /\.html$/,
                        loader: 'html-loader'

                    },
                    // 其它资源
                    {
                        exclude: /\.(css|js|html|jpg|jpeg|png|gif)$/,
                        loader: 'file-loader',
                        options: {
                            output: 'media'
                        }
                    }
                ]
            }

        ]
    },
    // 插件配置
    plugins: [
        // css 单独抽出
        new MiniCssExtractPlugin({
            filename: 'css/build[contenthash:10].css'
        }),
        // css 压缩
        new OptimizeCssAssetsWebpackPlugin(),
        // html 配置
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                // 压缩空格
                collapseWhitespace: true,
                // 去除注释
                removeComments: true
            }
        })
    ],
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    // 模式选择，生产环境js 代码自动压缩
    mode: 'production'
}