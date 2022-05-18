let n = 3;
let r = 5;

let ans = gpSum(n, r)
console.clear();
console.log(ans.toFixed(4));
function gpSum(n, r) {
    if (n == 0) return 1;
    return 1 / (r ** n) + gpSum(n - 1, r);
}