function main() {
    let arr = [1, 2, 3, 4];
    let n = arr.length;
    var ans = [];
    permute(arr, 0, n - 1, ans);
    console.log(ans);
}
main();


function permute(arr, l, r, ans) {
    if (l == r) {
        let temp = [];
        arr.forEach(x => {
            temp.push(x);
        })
        ans.push(temp);
        return;
    }
    else {
        for (let i = l; i <= r; i++) {
            swap(arr, l, i);
            permute(arr, l + 1, r, ans);
            swap(arr, l, i);
        }
    }
}
function swap(a, i, j) {
    temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
