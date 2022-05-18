let n = 3, r = 5;
let i = 0, term = 1;
let ans = 0;

let k = geomap(n, r, i, term, ans);
console.log(k.toFixed(4));
function geomap(n, r, i, term, ans) {
    if (i == n) {
        ans += term;
        return ans;
    }
    ans += term;
    term = term / r;
    return geomap(n, r, i + 1, term, ans);
}
