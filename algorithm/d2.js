const random = max => parseInt(Math.random() * max);



const sort = arr => {
    const res = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        res[i] = arr[i];
        for (let j = i + 1; j < len; j++) {
            if (res[i] < res[j]) {
                res[i] = res[j];
            }
        }
    }
    return res;
}


const arr1 = Array.from({ length: 30 }).map(() => random(30));
console.log(arr1);
console.log(sort(arr1));