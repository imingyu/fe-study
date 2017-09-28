// let count;
// function* box() {
//     count = yield 1;
//     count = yield count + 2;
// }
// var tt = box();
// tt.next();
// console.log('val=' + tt.next().value + `, count=${count}`);
// tt.next(4);
// console.log('val=' + tt.next().value + `, count=${count}`);
// tt.next(1);
// console.log('val=' + tt.next().value + `, count=${count}`);


let a, b, c;

function* fun() {
    a = yield 1;
    b = yield a + 2;
    c = yield b + 3;
}

var it = fun();
console.log(`0: a=${a}, b=${b}, c=${c}`);
it.next();
console.log(`1: a=${a}, b=${b}, c=${c}`);
it.next(2);
console.log(`2: a=${a}, b=${b}, c=${c}`);
it.next(3);
console.log(`3: a=${a}, b=${b}, c=${c}`);
