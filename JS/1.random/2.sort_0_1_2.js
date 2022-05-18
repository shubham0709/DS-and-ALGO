let arr = [1, 1, 1, 2, 1, 0, 0, 2, 0, 1];
console.log(arr.join(" "));
let a = [0, 0, 0];
for (let i = 0; i < arr.length; i++) {
    a[arr[i]]++;
}
let x = 0,
    y = 0,
    z = 0;
for (let i = 0; i < arr.length; i++) {
    if (x < a[0]) {
        arr[i] = 0;
        x++;
    } else if (y < a[1]) {
        arr[i] = 1;
        y++;
    } else if (z < a[2]) {
        arr[i] = 2;
        z++;
    }
}
console.log(arr.join(" "));