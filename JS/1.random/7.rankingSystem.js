let ar = [12, 13, 14, 15, 16, 16, 17, 19, 19, 19, 19];
ar.sort((a, b) => b - a);
let r = 1;
let ans = []
for (let i = 0; i < ar.length; i++) {
    let max = ar[i];
    while (ar[i] == max) {
        ans.push(r);
        i++;
    }
    r = ans.length + 1;
}
console.log(ans);