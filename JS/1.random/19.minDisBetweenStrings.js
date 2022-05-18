let arr = ['geeks', 'for', 'geeks', 'and', 'practices', 'practices'];
let s1 = 'geeks';
let s2 = 'practices';
let x = 0;
let y = 0;
let min = Infinity;
while (x < arr.length && y < arr.length) {
    if (arr[x] == s1 && arr[y] == s2) {
        let temp = Math.abs(x - y);
        min = Math.min(min, temp);
        x++; y++;
    }
    else if (arr[x] !== s1 && arr[y] !== s2) {
        x++; y++;
    } else if (arr[x] == s1 && arr[y] !== s2) {
        y++;
    } else if (arr[x] !== s1 && arr[y] == s2) {
        x++;
    } else {
        x++; y++;
    }
}
console.log(min);