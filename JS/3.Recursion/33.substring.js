let main = () => {
    let str = 'abcd'
    for (let i = 0; i < str.length; i++) {
        substr(str.substring(i), '', 0);
    }
}
main();
function substr(str, ans, idx) {
    if (idx == str.length) {
        console.log(ans);
        return;
    }
    console.log(ans);
    substr(str.substring(idx), ans + str[idx], idx + 1);
}