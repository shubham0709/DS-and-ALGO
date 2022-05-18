let find = (arr, n) => {
    let ans = new Array(n).fill(0);
    let s = [];
    for (let i = 0; i < n; i++) {
        while (s.length > 0 && arr[i] <= s[s.length - 1]) {
            s.pop();
        }
        ans[i] = s.length ? s[s.length - 1] : -1;
        s.push(arr[i]);
    }
    console.log(ans);
}

function main() {
    let arr = [100, 80, 60, 70, 60, 75, 85];
    find(arr, arr.length);
}
main();
