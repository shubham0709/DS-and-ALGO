//subsequence using bit position

function main() {
    let arr = ['A', 'B', 'C', 'D'];
    let k = arr.length;
    let str = '';
    findBinary(k, str, arr);
}
main();

function findBinary(k, str, arr) {
    if (str.length == k) {
        let seq = print(str, arr);
        console.log(seq,"------",str);
        return;
    } else {
        findBinary(k, str + '1', arr);
        findBinary(k, str + '0', arr);
    }
}

function print(str, arr) {
    let ans = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '1') {
            ans += arr[i];
        }
    }
    return ans;
}