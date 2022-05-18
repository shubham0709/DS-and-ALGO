let n = 7;
let b = binary(n, '');
console.log(b);
function binary(n, ans) {
    if (n == 0) {
        return ans;
    }
    ans = n % 2 + ans;
    return binary(Math.floor(n / 2), ans);
}