let str = 'abcabc';
let count = {}
let ans = str[0];
let curr = str[0];
count[str[0]] = 1;
for (let i = 1; i < str.length; i++) {
    count[str[i]] = count[str[i]] + 1 || 1;
    if (curr == str[i] || curr == '#') {
        curr = firstUnique();
    }
    ans = ans + curr;
}
function firstUnique() {
    for (let key in count) {
        if (count[key] == 1) {
            return key;
        }
    }
    return '#';
}
console.log(ans);