function main() {
    let arr = [1, 2, 4];
    let ans = printSum(0, arr.length, arr);
    console.log(ans);
}
main();
function printSum(i, n, arr) {
    if (i == n) return 0;
    return arr[i] + printSum(i + 1, n, arr)
}