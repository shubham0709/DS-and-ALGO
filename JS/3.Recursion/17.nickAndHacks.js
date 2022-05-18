/*
https://oj.masaischool.com/contest/3669/problem/06
*/
//find n*10 and n*20 any number of times until reach N//
//initialy 1 rupee available;

function main() {
    let current = 10;
    let N = 2000;

    let ans = check(current, N);
    console.log(ans);
}
main();
function check(current, N) {
    if (current == N) {
        return true;
    } else if (current > N) {
        return false;
    }
    else {
        return check(current * 10, N) || check(current * 20, N);
    }
}