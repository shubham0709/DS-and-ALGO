let Str = 'abcdefghijk'
let x = decrypt(Str, 0, Str.length - 1)
console.log(x);
function decrypt(Str, Start, End) {
    if (Start > End) {
        return '';
    }
    let mid = Math.floor((Start + End) / 2);
    return Str[mid] + decrypt(Str, Start, mid - 1) + decrypt(Str, mid + 1, End);
}