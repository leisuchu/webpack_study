/**
 * webpack 入口
 */

 import data from './data.json'

 function add(x,y){
     return new Promise( (resolve,reject) => {
        setTimeout(() => {
            resolve(x+y)
        }, 1000);
     } );
 }

 async function test(){
     console.log('data: ',data);
     var res = await add(data.age,data.pos);
     console.log('add: ',res);
 }

 test();


 