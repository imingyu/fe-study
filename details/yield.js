function* box() {
    yield 1;
    console.log(`1--`);
    yield 1.1;
    // var sd = new Promise((resolve, reject) => {
    //     yield 2;
    //     resolve();
    //     yield 3;
    // }).then(() => {
    //     yield 4;
    // })
}
var tt = box();
var item=tt.next();
// while (!(item = tt.next()).done) {
//     console.log(`${item.value}`);
// }
    console.log(`${item.value}`);
