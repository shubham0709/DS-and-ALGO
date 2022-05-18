let s = 'geeksforgeeks';
let a = 'forgeeksgeeks';
let flag = false;
//for (let i = 0; i < s.length; i++) {
    let char = s[0];
    for (let j = 0; j < a.length; j++) {
        if (char === a[j]) {
            if (compare(0, j, a, s)) {
                flag = true;
                break;
            }
        }
    }
    // if (flag) break;
//}
flag ? console.log('yes') : console.log('No');
function compare(i, j, a, s) {
    let count = 0;
    while (s[i++] == a[j++] && count<=a.length) {
        count++;
        if (j == a.length) j = 0;
    }
    if (count == a.length) {
        return true;
    }
    return false;
}