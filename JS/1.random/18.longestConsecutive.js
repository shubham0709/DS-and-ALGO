let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
let max = Math.max(...nums);
let arr = new Array(max).fill(0);
nums.forEach(x => {
    arr[x] = -1;
})

let mcount = 0;
for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    while (arr[i] == -1) {
        i++;
        temp++;
    }
    mcount = mcount < temp ? temp : mcount;
}
console.log(mcount);