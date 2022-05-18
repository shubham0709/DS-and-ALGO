var str = 'a 5 b 1 3 c 2 z a 1'
str = str.split(' ').join('');
var ans = ''
for (let i = 0; i < str.length;) {
    var char = str[i];
    i++;
    var count = ''
    while (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
        count += str[i];
        i++;
    }
    if (count == '') {
        ans += char;
    } else {
        count = Number(count);
        for (let x = 0; x < count; x++) {
            ans += char;
        }
    }
}
console.log(ans);