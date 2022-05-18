let s = "abc##qwerty###ss#####", t = "agh##cf#v##";
let skips = 0;

let ans = reduce(s) == reduce(t) ? true : false;
console.log(ans);

function reduce(s) {
    let skips = 0;
    let temp = ''
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '#') {
            skips++;
        } else if (s[i] !== '#' && skips == 0) {
            temp = s[i] + temp;
        } else if (s[i] !== '#' && skips > 0) {
            skips--;
        }
    }
    return temp;
}