console.log("a.js");
new Promise(resolve => {
    resolve(2)
}).then(res => {
    alert(res);
})