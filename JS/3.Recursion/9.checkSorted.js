function main() {
    let arr = [1, 2, 3, 4, 5, 6, 9];
    let ans = check(1, arr.length, arr);
    console.clear();
    console.log(ans);
}
main();
function check(i, n, arr) {
    if (i == n) {
        return true;
    }
    if (arr[i] < arr[i - 1]) {
        return false;
    }
    return check(i + 1, n, arr);
}