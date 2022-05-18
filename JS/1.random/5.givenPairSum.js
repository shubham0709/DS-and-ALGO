// let a = [1, 5, 5, 5, 5, 7];
let arr = '43 44 46 22 14 97 22 67 30 95 23 30 6 17 40 69 60 97 70 66 45 32 13 4 74 40 61 49 2 23 96 55 17 93 28 30 41 2 96 70 96 18 51 53 86'
arr = arr.split(' ').map(Number);
arr.sort((a,b)=>a-b);
console.log(arr);

let k = 43;
let l = 0, r = arr.length - 1;
let c = 0;

while (l < r) {
    let temp = arr[l] + arr[r];
    if (temp == k) {
        let a = 1, b = 1;
        while (arr[l] == arr[l + 1] && l < r) {
            a++;
            l++;
        }
        //console.log(a);
        if(l==r){
            c = a*(a-1) / 2;
            continue;
        }
        while (arr[r] == arr[r - 1] && l < r) {
            b++;
            r--;
        }
        //console.log(b);
        l++; r--;
        c += (a * b);
    } else if (temp < k) {
        l++;
    } else {
        r--;
    }
}
console.log(c);
