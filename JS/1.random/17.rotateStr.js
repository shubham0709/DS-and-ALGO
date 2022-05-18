let s = 'helloluiya';
let a = 'ahelloluiy';
a = a.split('');
function rotate(a, s) {
    let c = 0;
    while (a[0] !== s[0] && c <= a.length) {
        a.push(a.shift());
        c++;
    }
}
let count = 0;
while (count <= a.length) {
    if (a.join("") == s) {
        console.log(a.join(""), s);
        break;
    } else {
        rotate(a, s[0]);
    }
}