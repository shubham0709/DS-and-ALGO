let nums = [-14, -4, -3, 0, 4, 5];
let ans = [];
nums.map((x, i) => {
    nums[i] = x * x;
})
nums.push(Infinity);
//console.log(nums);
let idx = -1;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
        idx = i;
        break;
    }
}
console.log(idx);
ans.push(nums[idx]);
let l = idx - 1;
let r = idx + 1;
while (l >= 0 && r < nums.length) {
    if (nums[l] < nums[r]) {
        ans.push(nums[l]);
        l--;
    } else {
        ans.push(nums[r++]);
    }
}
while (l >= 0) {
    ans.push(nums[l--]);
}
while (r < nums.length) {
    ans.push(nums[r++]);
}
ans.pop();
nums.pop();
console.log(nums);
console.log(ans);