let n1 = 6, a = [1, 5, 10, 20, 20, 40, 80]
let n2 = 5, b = [6, 7, 20, 20, 80, 100]
let n3 = 8, c = [3, 4, 15, 20, 30, 70, 80, 120]

let common1 = [];
let left = 0;
let right = 0;
while (left < a.length && right < b.length) {
    if (a[left] < b[right]) {
        left++;
    } else if (a[left] > b[right]) {
        right++;
    } else {
        common1.push(a[left]);
        left++;
        right++;
    }
}
console.log(common1.join(" "));