console.log('test 被加载');

// document.getElementById('btn').addEventListener('click', () => {
//   const lazytest = require('../libs/lazytest');
//   console.log('加载成功', lazytest);
// });


document.getElementById('btn').addEventListener('click', () => {
    // 使用这种方式eslint会报错
    import('../libs/lazytest').then(
        res => {
            console.log('加载成功', res.lazytest());
        }
    )
});

export default {};
