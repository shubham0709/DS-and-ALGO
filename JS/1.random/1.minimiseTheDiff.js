//split in array into two such that minimise the diff between max of first and min of second
let arr = [10, 5, 45, 78, 3, 9, 1];
arr.sort((a, b) => a - b);
console.log(arr);
let i = 1,
    j = 0;
let diff = arr[1] - arr[0];
for (let k = 1; k < arr.length; k++) {
    if (diff > arr[k] - arr[k - 1]) {
        diff = arr[k] - arr[k - 1];
        i = k;
        j = k - 1;
    }
}
let ar1 = [];
let ar2 = [];
//console.log(i, j, diff);
for (let x = 0; x < arr.length; x++) {
    if (x <= j) ar1.push(arr[x]);
    else ar2.push(arr[x]);
}
console.log(ar1, ar2);