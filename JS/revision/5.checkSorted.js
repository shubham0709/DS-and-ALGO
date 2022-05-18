function main() {
    let arr = [-200, -10, -1, 50, 10000];
    console.log(checkSorted(arr, 0) ? 'yes' : 'No');
}
main();
function checkSorted(arr, idx) {
    if (idx == arr.length) return 1;
    return arr[idx] >= arr[idx + 1] ? 0 : checkSorted(arr, idx + 1);
}