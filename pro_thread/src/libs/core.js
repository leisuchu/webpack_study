/**
 *  核心代码
 */
import config from '../config/config';
import buss from './bussinessImport';
import Calculater from './Calculater';

const lei = {};
console.log('计算器加载。。。');
lei.calculater = new Calculater(2);
console.log('计算器加载完成');
lei.config = config;

lei.buss = buss;

export default lei;
