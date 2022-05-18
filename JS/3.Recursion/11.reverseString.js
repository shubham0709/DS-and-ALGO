let str = 'abcd';
let k = ''
let ans = reverse("", str, 0);
console.log(ans);

function reverse(k, str, i) {
    if (i == str.length) {
        return '';
    } else {
        return reverse(k, str, i + 1) + str[i] + k;
    }
}