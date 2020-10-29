// eslint 规则配置
module.exports = {
    root:true,
    parserOptions:{
        parser:'babel-eslint'
    },
    extends:[
        'airbnb-base'
    ],
    rules:{
        'no-console':0,
        'global-require':0
    },
    // 过滤浏览器和node的变量
    env:{
        browser:true,
        node:true
    },
    // 过滤指定的全局变量
    globals:{
        lei:true
    }
}

// "eslintConfig": {
//     "extends": "airbnb-base"
//   },