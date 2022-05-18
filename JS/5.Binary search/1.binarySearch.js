let arr = [-10, -7, 0, 1, 2, 3, 4, 50, 77, 921];
let k = -10;
let left = 0;
let right = arr.length - 1;
let idx = -1;
while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == k) {
        idx = mid;
        break;
    } else if (k < mid) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}
console.clear();
console.log(idx ? 'Not found' : "found at index : " + idx);