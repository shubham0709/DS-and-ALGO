let arr = [1,3,2,4,5,6];
let c = 0;
//132
for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] && arr[i + 1] > arr[i - 1]) {
        c++;
    }
}
console.log(c);