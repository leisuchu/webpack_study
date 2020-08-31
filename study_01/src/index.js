/**
 * webpack 入口
 */

 function add(x,y){
     return new Promise( (resolve,reject) => {
        setTimeout(() => {
            resolve(x+y)
        }, 1000);
     } );
 }

 async function test(){
     var res = await add( 3,4);
     console.log(res);
     
 }

 test();


 