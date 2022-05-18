// Finally, India found the vaccine, and things have started getting normal.
// Offices are opening up, and therefore, you have to shift to Bangalore. Now,
// to transport your stuff, you hire Masai Packers & Movers. The company has N trucks,
// and each truck can hold only a certain amount of weight only. Also, because of surge
// in prices of Fuel, the company has implemented a new policy, that the truck will be
// granted to the customer, only if the truck is completely occupied, and no extra space
// is left.
// You have to transport K units of weight, since each truck will take the weight
// exactly equal to its capacity, find the number of ways, in which you can transport
// K units of weight.
// n=3, k=3, arr = [1,2,3] answer = 4;
let n = 3; k = 3, arr = [1, 2, 3];
let ans = pack(n, k, arr);
console.log(ans);
function pack(n, k, arr) {
    if (k==0) {
        return 1;
    } else if (k<0) {
        return -1;
    } else {
        for (let i = 0; i < n; i++) {
            return 1 + pack(n,k-arr[i],arr);
        }
    }
}
