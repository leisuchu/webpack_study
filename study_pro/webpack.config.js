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
 *  缓存处理
 *      babel缓存，在babel options中添加 cacheDirectory:5
 *      --》 第二次打包速度更快
 *      文件资源缓存：
 *          hash:每次构建生产唯一的hash值
 *               问题：如果重新重建，缓存失效
 *          chunkhash(代码块，所有依赖通过入口文件index.js引入):根据chunk生成hash值，如果打包来自同一个，重新打包一样会缓存失效
 *          contenthash:根据文件内容生成hash值，不同的文件一定不一样
 *      --》上线代码的缓存优化
 * 
 */


/*
    必须要先eslint再babel
*/
module.exports = {
    // 入口文件
    entry: './src/js/index.js',
    // 输出配置
    output: {
        filename: 'js/bundle[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    // loaders 配置
    module: {
        rules: [
            // js 处理(eslint)
            // 需要下载eslint-config-airbnb-base eslint eslint-plugin-import
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre',
                options: {
                    fix: true
                }
            },
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
    // 模式选择，生产环境js 代码自动压缩
    mode: 'production'
}