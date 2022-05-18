let str = "abcd";
let unq = str[0];
let ans = str[0];
for (let i = 1; i < str.length; i++) {
    while (str[i] != unq) {
        ans += unq;
        i++;
    }
}
console.log(ans);