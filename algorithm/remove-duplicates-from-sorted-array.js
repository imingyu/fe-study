/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let pre = 0;
    for (let cur = 0, len = nums.length; cur < len; cur++) {
        if (nums[cur] !== nums[pre]) {
            pre++;
            nums[pre] = nums[cur]
        }
    }
    return pre + 1;
};

var show = nums => {
    const count = removeDuplicates(nums);
    for (let i = 0; i < count; i++) {
        console.log(nums[i]);
    }
}

show([1, 1, 1, 2, 3, 3, 4, 5, 6, 7]);