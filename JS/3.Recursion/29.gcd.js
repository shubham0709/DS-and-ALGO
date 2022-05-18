let a = 32, b = 16;
let ans = gcd(a, b);
console.log(ans);

function gcd(a, b) {
    if (b <= 0) {
        return a;
    }
    return gcd(b, a%b);
}