import Test from './test'
import Calculator from './calculate'
import $ from 'jquery'

// 挂载核心对象
window.lei = {};

console.log('计算器被加载');
lei.calculator = new Calculator();

console.log('测试模块被加载');
lei.test = new Test();

export default {}