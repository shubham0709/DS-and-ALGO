let arr = [1, 2, 10, 9, 8, -100, -200];
let left = 0;
let right = arr.length - 1;
let idx = -1;
let mid = right + Math.floor((left - right) / 2);
while (left < right) {
    if (arr[mid] < arr[mid + 1]) {
        left = mid + 1;
    } else {
        right = mid;
    }
    mid = right + Math.floor((left - right) / 2);
}
console.log(left);