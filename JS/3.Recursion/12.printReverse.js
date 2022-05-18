let str = 'shubham';
let i = 0;
let rev = ''
printReverse(str, i, rev);
function printReverse(str, i) {
    if (!str[i]) {
        return '';
    }
    printReverse(str, i+1)
    rev+=str[i];
}
console.log(rev);