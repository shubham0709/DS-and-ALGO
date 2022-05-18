let str = 'shubham';
let rev = reverse(str, 0);
console.log(rev);

function reverse(str, idx) {
    if (idx == str.length) {
        return ''
    } else {
        return reverse(str, idx+1) + str[idx];
    }
}