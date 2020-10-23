import './iconfont/iconfont.css'
import './style/index.css'
import './style/index.less'
import './libs/core.js'

if(module.hot){
    module.hot.accept( './libs/calculate.js',() => {
        console.log('热加载触发');
    } );
}