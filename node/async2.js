function fun(arg) {
    return new Promise((r, j) => {
        setTimeout(() => {
            r(arg * 10);
        }, 2 * 1000)
    })
}

async function fun2() {
    var arg = await fun(2);
    await 3;
    return arg * 3;
}

(async function () {
    var result = await fun2();
    console.log(result)
})()