let arr = [-100, 40, 400, 401, 401, 401, 402];
let target = 401;
let ans = occurence(arr, target, 0);
console.log("first occurence : " + ans);
ans = occurence(arr, target, 1);
console.log("last occurence : " + ans);


function occurence(arr, k, flag) {
    let left = 0;
    let right = arr.length - 1;
    let idx = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == k) {
            idx = mid;
            if (flag == 1) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else if (k < mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return idx;
}