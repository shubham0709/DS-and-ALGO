// move -ve to end without changing order of elements
let arr = [1, -1, 3, 2, -7, -5, 11, 6];
let ans = new Array(arr.length);
let k = 0;
arr.forEach(x => {
    if (x > 0) {
        ans[k++] = x;
    }
})
arr.forEach(x => {
    if (x < 0) {
        ans[k++] = x;
    }
})
console.log(arr.join(" "));
console.log(ans.join(" "));