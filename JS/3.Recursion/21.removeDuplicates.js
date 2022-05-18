function main() {
    let str = 'aabbcdeer'
    let arr = new Array(26).fill(false);
    ans = removeDuplicates(str, arr, 0, '');
    //console.clear();
    console.log(ans);
}
main();
function removeDuplicates(str, arr, idx, ans) {
    if (idx == str.length) {
        return ans;
    }
    let code = str[idx].charCodeAt(0) - 97;
    if (arr[code] == false) {
        ans += str[idx];
        arr[code] = true;
    }
    return removeDuplicates(str, arr, idx + 1, ans);
}