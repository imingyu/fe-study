const babel = require('@babel/core');
const result = babel.transform(`const user = {
    name: 'Tom',
    age: 20
};

const add = (...args) => args.reduce((sum, item) => {
    sum += item;
    return sum;
}, 0);

user.age = add(user.age, 2);`);

console.log(result);