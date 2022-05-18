function main() {
    // finding exponent of 2;
    let n = 9;
    //prints 2^10
    let ans = exponent(n);
    console.clear();
    console.log(ans);
}

main();
function exponent(n) {
    if (n == 1) return 2;
    let half = exponent(Math.floor(n / 2));
    if (n % 2 == 0) {
        return half * half;
    } else {
        return 2 * half * half;
    }
}