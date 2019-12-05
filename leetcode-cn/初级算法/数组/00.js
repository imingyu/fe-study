/**
 * 从排序数组中删除重复项
 * https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/
 */

const f2 = nums => {
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
            len--;
        }
    }
    return nums.length;
};

const length = f2([1, 1, 1, 2, 2, 3, 3, 4]);
console.log(length)