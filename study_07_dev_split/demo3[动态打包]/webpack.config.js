const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'js/bundle.js',
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
            filename: 'css/build[contenthash:10].css'
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
        hot:true, // 热加载
        inline:true
    },
    /**
     * eval cheap nosource module inline hidden
     * 开发环境：eval-source-map
     * 生产环境：source-map 
     *  如果要隐藏代码 nosource-source-map(隐藏全部) hidden-source-map(隐藏原代码)
     */
    devtool:'source-map',// 错误代码详细信息及错误源代码位置
    
    /**
     * optimization 可以将modules单独打包成一个chunk输出
     * 自动分析多入口文件中有没有重复引入依赖，如果有则单独打包成一个chunk
     */

     optimization:{
         splitChunks:{
             chunks:'all'
         }
     }

}
