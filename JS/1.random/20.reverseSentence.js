let str = 'i.like.this.program.very.much';
let arr = []
for (let i = 0; i < str.length; i++) {
    let temp = '';
    while (str[i] !== '.' && i < str.length) {
        temp += str[i];
        i++;
    }
    arr.unshift(temp);
}
let ans = '';
for (let i = 0; i < arr.length - 1; i++) {
    ans = ans + arr[i] + '.'
}
ans += arr[arr.length - 1]
console.log(ans);