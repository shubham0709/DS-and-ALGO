//         0   1  2  3  4
let nums = [1, 3, 4, 2, 5, 5, 6, 6, 7, 7, 1, 8, 8];
for (let i = 0; i < nums.length; i++) {
    // idx = 0
    // nums[0] =1;
    // nums[nums[0]]*=-1
    let idx = Math.abs(nums[i]);
    if (nums[idx] < 0) {
        console.log(idx);
        continue;
    }
    nums[idx] *= -1;
}