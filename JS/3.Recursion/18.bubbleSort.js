function main() {
    let arr = [1, 2, 10, 3, 7, 6, 5, 0];
    let idx = 1;
    bubble(arr, idx);
    console.log(arr);
}
main();
function bubble(arr, idx) {
    if (idx == arr.length) {
        if (isSorted(arr)) {
            return;
        } else {
            return bubble(arr, 1);
        }
    }
    if (arr[idx] < arr[idx - 1]) {
        swap(arr, idx, idx - 1);
    }
    return bubble(arr, idx + 1);

}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
