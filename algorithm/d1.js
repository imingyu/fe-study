const nums = Array.from({ length: 128 }).map((i, index) => index + 1);

const find = (arr, element) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const middle = parseInt((low + high) / 2);
        const current = arr[middle];
        if (current === element) {
            return middle;
        }
        if (current > element) {
            high = middle;
        } else {
            low = middle;
        }
    }
}

console.log(`30=${find(nums, 30)}`);
console.log(`58=${find(nums, 58)}`);