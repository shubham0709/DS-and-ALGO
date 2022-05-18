function main() {
    let arr = 'ab';
    let k = 3;
    let idx = 0;
    let temp = '';
    stringsOfk(arr, k, idx, temp);
}
main();
function stringsOfk(arr, k, idx, temp) {
    if (idx == arr.length || temp.length==k) {
        if(temp.length==k)console.log(temp);
        return;
    }
    stringsOfk(arr, k, idx, temp+arr[idx]);
    stringsOfk(arr, k, idx + 1, temp);
    //stringsOfk(arr, k, idx + 1, temp + arr[idx]);
}