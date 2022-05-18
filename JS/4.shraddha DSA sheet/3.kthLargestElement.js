let arr = [3, 2, 3, 1, 2, 4, 4.5, 5, 5, 6];
let k = 4;

for (let i = 0; i < k; i++) {
    for (let j = i; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let t = arr[i]
            arr[i] = arr[j]
            arr[j] = t;
        }
    }
}
console.log(arr[k - 1]);