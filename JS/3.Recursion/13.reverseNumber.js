let num = 12003490;
let ans = 0;
let rev = reverse(num, ans);
console.log(rev);

function reverse(num, ans) {
    if (num == 0) {
       return ans;
    }
    ans = ans * 10 + num % 10;
    return reverse(Math.floor(num / 10), ans);
}
