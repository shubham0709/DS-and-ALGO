function main() {
    let str = 'aaa';
    let subset = new Set();
    uniqueSub(str, 0, '', subset);

}
function uniqueSub(str, idx, newstr, subset) {
    if (idx == str.length) {
        if (!subset.has(newstr)) {
            subset.add(newstr);
            console.log(newstr);
        }
        return;
    }
    uniqueSub(str, idx + 1, newstr + str[idx], subset);
    uniqueSub(str, idx + 1, newstr, subset);
}
main();