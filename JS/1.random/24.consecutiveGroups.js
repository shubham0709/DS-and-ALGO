let hand = [1, 2, 3, 6, 2, 3, 4, 7, 8], size = 3;
let count = {}
hand.forEach(x => {
    count[x] ? count[x]++ : count[x] = 1;
})
console.clear();
console.log(count);
