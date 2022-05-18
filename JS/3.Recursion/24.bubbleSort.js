function main() {
    let arr = [9, 8, 7, 6, 5, 4, 3, 2];
    bubbleSort(arr.length, arr);
    console.log(arr);
}
function bubbleSort(n, arr) {
    if (n == 1) {
        return;
    }
    for (let i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
    }
    bubbleSort(n-1,arr);
}
main();