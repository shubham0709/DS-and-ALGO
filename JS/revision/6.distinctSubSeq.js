function main() {
    let str = "abc";
    let idx = 0;
    let ans = '';
    let sat = {}
    distinctSubSequence(str, idx, ans, sat)
    console.log(sat);
    // var size = Object.keys(sat).length - 1;
    // console.log(size);
}
main()

function distinctSubSequence(str, idx, ans, sat) {
    if (idx == str.length) {
        sat[ans]=0;
        return;
    }
    distinctSubSequence(str, idx + 1, ans, sat)
    distinctSubSequence(str, idx + 1, ans + str[idx], sat)
    
}
