function main() {
    let arr = [1, 6, 4, 10, 2, 5];
    find(arr, arr.length);
}
main();

function find(arr, n) {
    let ans = new Array(n).fill(0);
    let s = []
    for (let i = 0; i < n; i++) {
        while (s.length > 0 && s[s.length - 1] >= arr[i]) {
            s.pop();
        }
        ans[i] = s.length ? s[s.length - 1] : -1;
        s.push(arr[i]);
    }
    console.log(ans);
}

// eaaabbddddde
// ee
// ""
// qwe
 // qwe
 // qwe