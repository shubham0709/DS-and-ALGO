let A = [3, 1, 2, 5, 3];
let count = new Array(A.length + 1).fill(0);
for (let i = 0; i < A.length; i++) {
    count[A[i]]++
}
let p, q;
for (let i = 1; i < count.length; i++) {
    if (count[i] == 0) {
        p = i;
    }
    if (count[i] == 2) {
        q = i;
    }
}
console.log([p, q]);