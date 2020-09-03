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
            {
                test:/\.less/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            // 图片加载需要 url-loader file-loader
            {
                test:/\.jpeg/,
                loader:'url-loader',
                options:{
                    limit:8 * 1024,
                    // 默认以es6模块化解析，而html-loader用commonjs解析
                    // 需设置url-loader 以commonjs解析
                    esModule:false,
                    name:'[hash:10].[ext]'
                }
            },
            // 负责处理html中引入img,让url-loader 可以识别到
            {
                test:/\.html$/,
                loader:'html-loader',
                options:{

                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}
