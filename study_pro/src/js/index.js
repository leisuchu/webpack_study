import '../css/index.css';

// eslint-disable-next-line
console.log('index.js 被加载！');

async function test1() {
  console.log('异步1');
}

async function test2() {
  console.log('异步2');
}

async function test() {
  await test1();
  await test2();
  console.log('异步调用完成');
}

test();
