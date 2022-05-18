let a = 2;
let b = 10;
// finding a^b
let ans = expo(a, b);
console.log(ans);

function expo(a, b) {
    if (b == 1) {
        return a;
    }
    let half = expo(a, Math.floor(b / 2))
    return b % 2 ? a * half * half : half * half
}