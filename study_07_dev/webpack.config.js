const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
                    'style-loader',
                    'css-loader'
                ]
            },
            // less 加载
            {
                test:/\.less$/,
                use:[
                    'style-loader',
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
                    esModule:false
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
                    name:'[hash:10].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,
        port:8082,
        open:true
    }
}
