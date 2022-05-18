function main() {
    let arr = [-10, -7, 0, 1, 2, 3, 4, 50, 77, 921];
    let k = -10;
    let left = 0;
    let right = arr.length - 1;
    let idx = search(arr, k, left, right);
    console.log(idx);
}
main();
function search(arr, k, left, right) {
    let mid = Math.floor((left + right) / 2);
    if (k == arr[mid]) {
        return mid;
    } else if (left >= right) {
        return -1;
    } else {
        if (k > arr[mid]) {
            left = mid + 1
        } else if (k < arr[mid]) {
            right = mid - 1;
        }
        return search(arr, k, left, right);
    }
}