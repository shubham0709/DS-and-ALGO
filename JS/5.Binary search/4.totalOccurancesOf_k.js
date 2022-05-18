let arr = [1, 2, 2, 3, 5, 5, 5, 5];
let target = 5;
let first = search(arr, target, true);//lastindex
let last = search(arr, target, false);//firstindex

let ans = last - first + 1;
console.log(target + " appears "+ans+" times.")


function search(arr, target, flag) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((right + left / 2));
    let idx = -1;
    while (left <= right) {
        if (arr[mid] == target) {
            idx = mid;
            if (flag == false) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((right + left / 2));
    }
    return idx;
}