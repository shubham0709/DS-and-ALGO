let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 17;
let l = 0, r = 0, sum = 0;

while (r < arr.length) {
    if (sum == k) {
        console.log(arr[l-1], arr[r], sum);
        break;
    } else if (sum < k) {
        sum += arr[r]; r++;
    } else if (sum > k && l < r) {
        sum -= arr[l];
        l++;
    }
}
