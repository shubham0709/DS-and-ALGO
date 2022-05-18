let str = 'thisracecarisgood'
let max = 1;
for (let i = 0; i < str.length; i++) {
    let temp = currMax(str, i, i + 1);
    let temp2 = currMax(str, i, i);
    max = Math.max(max, temp2, temp);
}
console.log(max);
function currMax(str, l, r) {
    let c = 0;
    if (l == r) c = -1
    while (l >= 0 && r < str.length) {
        if (str[l--] == str[r++]) c += 2;
        else break;
    }
    return c;
}