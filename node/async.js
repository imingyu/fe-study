/*
async 操作符的作用：
*/

//async后面只能跟function关键字

//将一个普通函数转换成一个返回Promise对象的函数
var normal = async function (params) {
    console.log(1);
    await 2;
    console.log(3);
    await 4;
    return 5;
};
var ns = normal();
console.log(ns instanceof Promise);
ns.then(data => {
    console.log(`then=>` + data);
})