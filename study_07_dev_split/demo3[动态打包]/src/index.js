import './iconfont/iconfont.css'
import './style/index.css'
import './style/index.less'
import './libs/core'

/**
 * import 动态导入，可将这个新导入新打包成一个chunk（尽量不用）
 */
// const corePath = 'core'
// import(`./libs/core`).then(
//     res => {
//         console.log('core 加载完成',res);
//     }
// )

if(module.hot){
    module.hot.accept( './libs/calculate.js',() => {
        console.log('热加载触发');
    } );
}