function main() {
    let str = 'qwer';
    let idx = 0;
    subsequences(str, idx, '');
}
main();
function subsequences(str, idx, newstr) {
    if (idx == str.length) {
        console.log(newstr);
        return;
    }
    subsequences(str, idx + 1, newstr + str[idx])
    subsequences(str, idx + 1, newstr)
}