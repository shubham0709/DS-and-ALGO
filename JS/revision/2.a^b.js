function main() {
    let a = 3;
    let b = 4;
    let ans = power(a, b);
    console.log(ans);
}
main();
function power(a, b) {
    if (b == 1) {
        return a;
    }
    let half = power(a, Math.floor(b / 2));
    if (b % 2) return a * half * half;
    else return half * half;
}