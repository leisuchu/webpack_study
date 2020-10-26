const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
/**
 * 样式：style-loader中支持HMR
 * js：默认不支持HMR
 * html：默认不支持HMR(实际开发中只有一个html文件)
 *  解决：入口添加index.html  entry:['./src/index.js','./src/index.html'],
 */
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            // css 加载
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            // less 加载
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            // 图片加载
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                loader:'url-loader',
                options:{
                    limit:8 * 1024,
                    name:'[hash:10].[ext]',
                    esModule:false,
                    outputPath:'imgs'
                }
            },
            // html 中的图片加载
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            // 其它资源加载
            {
                exclude:/\.(js|html|css|less|png|jpg|jpeg|gif)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]',
                    outputPath:'source'
                }
            }
        ]
    },
    plugins:[
        // css 单独抽出
        new MiniCssExtractPlugin({
            filename: 'css/build.css'
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,
        port:8082,
        open:true,
        // 开启HMR功能（hot module replacement）
        // 新配置想生效需要重启启动
        hot:true, // 热加载
    },
   
}
