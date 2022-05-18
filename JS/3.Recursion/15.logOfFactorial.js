function main() {
    let n = 3;
    let ans = 0;
    let i = 1;
    let k = logOfFactorial(n, i, ans);
    console.log(k)
}
main();
function logOfFactorial(n, i, ans) {
    if (n == i) {
        ans = ans + Math.log(i);
        return ans.toFixed(4);
    }
    ans += Math.log(i);

    //recursive call
    return logOfFactorial(n, i + 1, ans)
}