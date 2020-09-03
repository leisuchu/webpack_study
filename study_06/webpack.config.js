const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            // css 资源加载
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            // 其它资源加载
            {
                exclude:/\.(css|js|html)$/,
                loader:'file-loader'
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',
    // 开发服务器配置
    // 启动指令：npx webpack-dev-server
    devServer:{
        // 基本路径
        contentBase:resolve(__dirname,'build'),
        // 启动压缩
        compress:true,
        // 端口号
        port:8081,
        // 自动打开浏览器
        open:true,
    }
}