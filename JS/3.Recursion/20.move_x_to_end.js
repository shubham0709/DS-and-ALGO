function main() {
    let str = 'sxhxuxbhamx'
    let idx = 0;
    let ans = '';
    let c = 0;
    move_x(str, ans, idx, c);
}
main();
function move_x(str, ans, idx, c) {
    if (idx == str.length) {
        for (let i = 0; i < c; i++) {
            ans += 'x';
        }
        console.log(ans);
        return;
    }

    if (str[idx] === 'x') {
        c++;
    } else {
        ans += str[idx];
    }
    //recursive call
    move_x(str, ans, idx + 1, c)
}