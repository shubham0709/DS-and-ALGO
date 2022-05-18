let arr = [1, 2, 3];
let start = 0;
let end = arr.length - 1;
permute(arr ,start, end);

function permute(arr, start, end){
    if (start == end) {
        console.log(arr);
        return;
    }
    for (let i = start; i <= end; i++) {
        swap(arr, start, i);
        permute(arr, start + 1, end);
        swap(arr, start, i);
    }
}
function swap(arr, start, end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}