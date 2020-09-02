const {resolve} = require('path') 
module.exports = {
    // 入口文件路径
    entry: './src/index.js',
    // 输出打包文件路径
    output: {
        filename: 'lei.js',
        path: resolve(__dirname, 'build'),
    },
    // loaders配置 module不加s
    module: {
        rules: [
            // css loader
            {
                test:/\.css$/,
                // 执行顺序：从右往左，或者说从下往上
                use:[
                    // 创建style标签
                    'style-loader',
                    // 以字符串的形式将css载入js，生成commonjs模块
                    'css-loader'
                ]
            },
            // less loader
            // TODO 要下载less less-loader
            {
                test:/\.less/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    // plugins配置
    plugins: [

    ],
    // 打包模式，开发/生产（production）
    mode: 'development'
}
