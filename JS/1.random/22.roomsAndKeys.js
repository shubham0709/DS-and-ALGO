let arr = [[1, 3], [3, 0, 1], [2], [0]];
let rooms = new Array(arr.length).fill(0)
arr[0].forEach(x => {
    rooms[x] = 1;
})

for (let i = 1; i < arr.length; i++) {
    var flag = false;
    if (rooms[i] == 1) {
        arr[i].forEach(x => {
            if (rooms[x] == 0) {
                flag = true;
            }
            rooms[x] = 1;
        })
    }
    if (flag) i = 1;
}
console.log(rooms);