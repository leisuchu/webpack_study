import '../css/index.css'
console.log('index.js 被加载！')
const awaitTest = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    } );
}
const add =  async()=>{
    console.log('js 兼容处理-start');
    await awaitTest()
    console.log('js 兼容处理-done');
}
add();