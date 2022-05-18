let str = 'sxhxuxbhamx'
let count = 0;
let idx = 0;
let ans = '';
movex(str, idx, count, ans);

function movex(str, idx, count, ans) {
    if (idx == str.length) {
        ans += ('x'.repeat(count))
        console.log(ans);
        return;
    }
    str[idx] == 'x' ? count++ : ans += str[idx];
    movex(str, idx + 1, count, ans);
}