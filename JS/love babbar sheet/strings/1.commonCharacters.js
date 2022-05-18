let words = ["bella", "label", "roller"]
let ans = new Array(26).fill(Infinity);

words.forEach(str => {
    let freq = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        let idx = str[i].charCodeAt(0) - 97;
        freq[idx]++;
    }
    for (let i = 0; i < 26; i++) {
        ans[i] = Math.min(ans[i], freq[i]);
    }
})
let common = ''
for (let i = 0; i < 26; i++) {
    if (ans[i]) {
        for (let j = 0; j < ans[i]; j++) {
            common += String.fromCharCode(i + 97);
        }
    }
}
console.log(common.split(''))