// var str = 'aqdcccd';
// var curr = ''
// while (true) {
//     if (curr == str) {
//         console.log(str);
//         break;
//     } else {
//         curr = str;
//         str = reduce(str);
//     }
// }
// function reduce(str) {
//     let temp = ''
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i + 1] && str[i] !== str[i - 1]) {
//             temp += str[i];
//         }
//     }
//     return temp;
// }
main()
function main() {
    let str = 'abaqqdcccd'
    remove(str, '');
}
function remove(str, curr) {
    let temp = '';
    if (str == curr) {
        console.log(curr);
        return;
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== str[i + 1] && str[i] !== str[i - 1]) {
                temp += str[i];
            }
        }
        remove(temp,str);
    }
}